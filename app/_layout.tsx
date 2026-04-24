import "@/global.css";

import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import { Toaster } from "sonner-native";
export default function RootLayout() {
  useEffect(() => {
    SplashScreen.preventAutoHideAsync();
  }, []);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Stack screenOptions={{ headerShown: false }} />

      <Toaster />
    </GestureHandlerRootView>
  );
}
