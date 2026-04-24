import React, { useEffect } from "react";
import { View } from "react-native";
import Animated, {
    Easing,
    useAnimatedStyle,
    useSharedValue,
    withTiming,
} from "react-native-reanimated";

interface DotsIndicatorProps {
  total: number;
  active: number;
}

const Dot = ({ isActive }: { isActive: boolean }) => {
  const width = useSharedValue(isActive ? 24 : 8);
  const opacity = useSharedValue(isActive ? 1 : 0.4);

  useEffect(() => {
    width.value = withTiming(isActive ? 24 : 8, {
      duration: 300,
      easing: Easing.out(Easing.cubic),
    });
    opacity.value = withTiming(isActive ? 1 : 0.4, { duration: 300 });
  }, [isActive]);

  const animatedStyle = useAnimatedStyle(() => ({
    width: width.value,
    opacity: opacity.value,
  }));

  return (
    <Animated.View
      style={[
        {
          height: 4,
          borderRadius: 2,
          marginHorizontal: 3,
          backgroundColor: "#0EA5E9",
        },
        animatedStyle,
      ]}
    />
  );
};

export const DotsIndicator = ({ total, active }: DotsIndicatorProps) => (
  <View className="flex-row items-center justify-center mt-4 mb-2">
    {Array.from({ length: total }).map((_, i) => (
      <Dot key={i} isActive={i === active} />
    ))}
  </View>
);
