import CustomStatusBar from "@/src/utils/CustomStatusBar";
import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
export default function ProfileLayout() {
  return (
    <SafeAreaProvider>
      <CustomStatusBar backgroundColor="#ffffff" barStyle="dark-content" />
      <Stack screenOptions={{ headerShown: false }}></Stack>
    </SafeAreaProvider>
  );
}
