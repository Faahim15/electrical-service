import React from "react";
import { StatusBar, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface Props {
  backgroundColor?: string;
  barStyle?: "default" | "light-content" | "dark-content";
}

export default function CustomStatusBar({
  backgroundColor = "#ffffff",
  barStyle = "dark-content",
}: Props) {
  const insets = useSafeAreaInsets();

  return (
    <View style={{ height: insets.top, backgroundColor }}>
      <StatusBar
        translucent
        backgroundColor={backgroundColor}
        barStyle={barStyle}
      />
    </View>
  );
}
