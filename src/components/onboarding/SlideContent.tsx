import { OnboardingSlide } from "@/src/types/onboarding.types";
import React from "react";
import { Dimensions, Text, View } from "react-native";
import { SvgXml } from "react-native-svg";
import { Chip } from "./Chip";
import { ListRow } from "./Listrow";
const { width } = Dimensions.get("window");

interface SlideContentProps {
  slide: OnboardingSlide;
}

export const SlideContent = ({ slide }: SlideContentProps) => (
  <View style={{ width }} className="flex-1 bg-[#F0F9FF] px-[5%]">
    {/* Illustration */}
    <View className="items-center mt-10 mb-6">
      <SvgXml xml={slide.svg} width={width * 0.82} height={220} />
    </View>

    {/* Title */}
    <Text
      className="font-Inter_Bold text-gray-900 mb-2"
      style={{ fontSize: 24, lineHeight: 32 }}
    >
      {slide.title}
    </Text>

    {/* Description */}
    <Text
      className="font-Inter_Regular text-gray-500 mb-4"
      style={{ fontSize: 14, lineHeight: 22 }}
    >
      {slide.description}
    </Text>

    {/* Chips — screen 1 */}
    {slide.chips && (
      <View className="flex-row flex-wrap mb-2">
        {slide.chips.map((chip) => (
          <Chip key={chip.label} {...chip} />
        ))}
      </View>
    )}

    {/* List items */}
    {slide.listItems && (
      <View className="mb-2">
        {slide.listItems.map((item) => (
          <ListRow key={item.title} item={item} />
        ))}
      </View>
    )}

    {/* Note — screen 5 */}
    {slide.note && (
      <View className="bg-gray-100 rounded-xl px-4 py-3 mb-4">
        <Text className="text-xs text-gray-500 font-Inter_Regular text-center">
          {slide.note}
        </Text>
      </View>
    )}
  </View>
);
