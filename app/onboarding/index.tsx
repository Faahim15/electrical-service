import React, { useState } from "react";
import {
    Dimensions,
    StatusBar,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
    Easing,
    useAnimatedReaction,
    useAnimatedStyle,
    useSharedValue,
    withTiming,
} from "react-native-reanimated";

import { DotsIndicator } from "@/src/components/onboarding/DotsIndicator";
import { GradientButton } from "@/src/components/onboarding/GradientButton";
import { SlideContent } from "@/src/components/onboarding/SlideContent";
import { slides } from "@/src/components/onboarding/Slides";

const { width } = Dimensions.get("window");
const SWIPE_THRESHOLD = width * 0.25;
const DURATION = 350;
const TOTAL = slides.length;

export default function OnboardingScreen() {
  // JS state — only used for rendering bottom controls & dots
  const [currentIndex, setCurrentIndex] = useState(0);

  // UI-thread shared values
  const translateX = useSharedValue(0);
  const activeIndex = useSharedValue(0); // mirrors currentIndex on the UI thread

  // ─── Sync UI-thread index → JS state (no runOnJS needed) ─────────────────
  useAnimatedReaction(
    () => activeIndex.value,
    (next, prev) => {
      if (next !== prev) {
        // This callback automatically runs on the JS thread
        setCurrentIndex(next);
      }
    },
  );

  // ─── Core animate helper (runs on JS thread) ──────────────────────────────
  const animateTo = (nextIndex: number) => {
    if (nextIndex < 0 || nextIndex >= TOTAL) return;
    activeIndex.value = nextIndex; // triggers reaction above
    translateX.value = withTiming(-nextIndex * width, {
      duration: DURATION,
      easing: Easing.out(Easing.cubic),
    });
  };

  // ─── Button handlers ──────────────────────────────────────────────────────
  const goNext = () => {
    if (currentIndex < TOTAL - 1) animateTo(currentIndex + 1);
    else console.log("Onboarding complete!");
  };

  const handleSecondary = () => {
    if (currentIndex === 0) {
      animateTo(TOTAL - 1); // Skip intro → jump to last
    } else if (currentIndex === TOTAL - 1) {
      console.log("Skipped permissions"); // "Not Now"
    } else {
      animateTo(currentIndex - 1);
    }
  };

  // ─── Swipe gesture (fully on UI thread — no JS calls needed) ─────────────
  const startX = useSharedValue(0);

  const panGesture = Gesture.Pan()
    .onStart(() => {
      startX.value = translateX.value;
    })
    .onUpdate((e) => {
      const proposed = startX.value + e.translationX;
      const minVal = -(TOTAL - 1) * width;
      translateX.value = Math.max(minVal, Math.min(0, proposed));
    })
    .onEnd((e) => {
      "worklet";
      const swipedLeft =
        e.translationX < -SWIPE_THRESHOLD || e.velocityX < -500;
      const swipedRight = e.translationX > SWIPE_THRESHOLD || e.velocityX > 500;

      let next = activeIndex.value;
      if (swipedLeft) next = Math.min(activeIndex.value + 1, TOTAL - 1);
      else if (swipedRight) next = Math.max(activeIndex.value - 1, 0);

      // Mutate shared values directly — useAnimatedReaction syncs to JS state
      activeIndex.value = next;
      translateX.value = withTiming(-next * width, {
        duration: DURATION,
        easing: Easing.out(Easing.cubic),
      });
    })
    .runOnJS(false); // explicit: keep entirely on UI thread

  // ─── Animated strip style ─────────────────────────────────────────────────
  const stripStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  const slide = slides[currentIndex];

  return (
    <View className="flex-1 bg-[#F0F9FF]">
      <StatusBar barStyle="dark-content" backgroundColor="#F0F9FF" />

      {/* Swipeable slides strip */}
      <GestureDetector gesture={panGesture}>
        <Animated.View
          style={[
            { flexDirection: "row", width: width * TOTAL, flex: 1 },
            stripStyle,
          ]}
        >
          {slides.map((s) => (
            <SlideContent key={s.id} slide={s} />
          ))}
        </Animated.View>
      </GestureDetector>

      {/* Bottom controls — fixed outside the animated strip */}
      <View className="px-[5%] bg-[#F0F9FF]">
        <GradientButton label={slide.primaryBtn} onPress={goNext} />

        {slide.secondaryBtn && (
          <TouchableOpacity
            onPress={handleSecondary}
            activeOpacity={0.7}
            className="items-center py-3"
          >
            <Text
              className="font-Inter_Medium"
              style={{
                fontSize: 15,
                color: slide.id === "5" ? "#0EA5E9" : "#9CA3AF",
              }}
            >
              {slide.secondaryBtn}
            </Text>
          </TouchableOpacity>
        )}

        <DotsIndicator total={TOTAL} active={currentIndex} />
      </View>
    </View>
  );
}
