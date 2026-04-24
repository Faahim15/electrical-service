import { Ionicons } from "@expo/vector-icons";

export interface FeatureChip {
  icon: keyof typeof Ionicons.glyphMap;
  label: string;
  iconColor?: string;
}

export interface ListItem {
  icon: keyof typeof Ionicons.glyphMap;
  iconBg: string;
  iconColor: string;
  title: string;
  subtitle?: string;
  highlightBg?: string;
}

export interface OnboardingSlide {
  id: string;
  svg: string;
  title: string;
  description: string;
  chips?: FeatureChip[];
  listItems?: ListItem[];
  primaryBtn: string;
  secondaryBtn?: string;
  note?: string;
}
