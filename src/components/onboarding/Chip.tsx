import { FeatureChip } from "@/src/types/onboarding.types";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Text, View } from "react-native";

export const Chip = ({ icon, label, iconColor }: FeatureChip) => (
  <View className="flex-row items-center border border-gray-200 rounded-full px-3 py-2 mr-2 mb-2 bg-white">
    <Ionicons name={icon} size={14} color={iconColor ?? "#0EA5E9"} />
    <Text className="ml-1.5 text-sm text-gray-700 font-Inter_Medium">
      {label}
    </Text>
  </View>
);
