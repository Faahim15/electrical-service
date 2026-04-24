import { ListItem } from "@/src/types/onboarding.types";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Text, View } from "react-native";

export const ListRow = ({ item }: { item: ListItem }) => {
  const isHighlighted = !!item.highlightBg;
  const isApex = item.title === "Apex Plumbing Co.";
  const isSmokeDetector = item.title === "Smoke Detector Check";

  return (
    <View
      className="flex-row items-start rounded-2xl px-4 py-3.5 mb-3"
      style={{ backgroundColor: isHighlighted ? item.highlightBg : "#FFFFFF" }}
    >
      {/* Icon badge */}
      <View
        className="w-10 h-10 rounded-full items-center justify-center mr-3 mt-0.5"
        style={{ backgroundColor: item.iconBg }}
      >
        {item.icon === "person" ? (
          <Text className="text-white font-Inter_Bold text-base">A</Text>
        ) : (
          <Ionicons name={item.icon} size={18} color={item.iconColor} />
        )}
      </View>

      {/* Content */}
      <View className="flex-1">
        <Text
          className="font-Inter_SemiBold text-gray-800"
          style={{ fontSize: 15 }}
        >
          {item.title}
        </Text>

        {item.subtitle &&
          (isApex ? (
            <View>
              <View className="flex-row mt-0.5">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Ionicons key={s} name="star" size={12} color="#FBBF24" />
                ))}
              </View>
              <View className="flex-row items-center mt-1">
                <Ionicons name="call-outline" size={12} color="#6B7280" />
                <Text className="ml-1 text-xs text-gray-500 font-Inter_Regular">
                  (555) 123-4567
                </Text>
              </View>
              <View className="flex-row items-center mt-0.5">
                <Ionicons name="globe-outline" size={12} color="#6B7280" />
                <Text className="ml-1 text-xs text-gray-500 font-Inter_Regular">
                  apexplumbing.com
                </Text>
              </View>
            </View>
          ) : isSmokeDetector ? (
            <View className="flex-row items-center mt-0.5">
              <Ionicons name="calendar-outline" size={12} color="#6B7280" />
              <Text className="ml-1 text-xs text-gray-500 font-Inter_Regular">
                {item.subtitle}
              </Text>
            </View>
          ) : (
            <Text className="text-xs text-gray-500 font-Inter_Regular mt-0.5">
              {item.subtitle}
            </Text>
          ))}
      </View>
    </View>
  );
};
