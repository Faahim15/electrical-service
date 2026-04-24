import { onb1, onb2, onb3, onb4, onb5 } from "@/assets/images/svg/onb-svg";
import { OnboardingSlide } from "@/src/types/onboarding.types";

export const slides: OnboardingSlide[] = [
  {
    id: "1",
    svg: onb1,
    title: "Welcome to smarter electrical service",
    description:
      "Request quotes, troubleshoot common issues, manage safety reminders, and connect with trusted local partners — all in one place.",
    chips: [
      { icon: "flash", label: "Fast Quotes", iconColor: "#0EA5E9" },
      {
        icon: "shield-checkmark-outline",
        label: "Expert Help",
        iconColor: "#0EA5E9",
      },
      { icon: "time-outline", label: "Safety Reminders", iconColor: "#0EA5E9" },
    ],
    primaryBtn: "Continue",
    secondaryBtn: "Skip Intro",
  },
  {
    id: "2",
    svg: onb2,
    title: "Get quotes easily",
    description:
      "Choose a service, answer a few simple questions, upload photos, and send your request in minutes.",
    listItems: [
      {
        icon: "flash",
        iconBg: "#E0F7FA",
        iconColor: "#0EA5E9",
        title: "EV Charger Installation",
      },
      {
        icon: "flash",
        iconBg: "#E0F7FA",
        iconColor: "#0EA5E9",
        title: "Panel Upgrade",
      },
      {
        icon: "image-outline",
        iconBg: "#FEF3C7",
        iconColor: "#F59E0B",
        title: "Photo Upload Ready",
      },
    ],
    primaryBtn: "Next",
    secondaryBtn: "Back",
  },
  {
    id: "3",
    svg: onb4,
    title: "Troubleshoot common issues",
    description:
      "Follow clear step-by-step guides for issues like GFCI resets, breaker checks, and outlet problems — with safety-first instructions.",
    listItems: [
      {
        icon: "warning-outline",
        iconBg: "#FEF3C7",
        iconColor: "#F59E0B",
        title: "Safety First",
        subtitle: "Know when to stop and call a professional",
        highlightBg: "#FFFBEB",
      },
      {
        icon: "refresh-circle-outline",
        iconBg: "#E0F7FA",
        iconColor: "#0EA5E9",
        title: "GFCI Reset",
      },
      {
        icon: "checkbox-outline",
        iconBg: "#E0F7FA",
        iconColor: "#0EA5E9",
        title: "Breaker Check",
      },
      {
        icon: "power-outline",
        iconBg: "#E0F7FA",
        iconColor: "#0EA5E9",
        title: "Outlet Issues",
      },
    ],
    primaryBtn: "Next",
    secondaryBtn: "Back",
  },
  {
    id: "4",
    svg: onb3,
    title: "Stay safe and connected",
    description:
      "Set maintenance reminders, keep up with important safety checks, and quickly find trusted local partners for related services.",
    listItems: [
      {
        icon: "notifications-outline",
        iconBg: "#E0F7FA",
        iconColor: "#0EA5E9",
        title: "Smoke Detector Check",
        subtitle: "Every Year",
      },
      {
        icon: "person",
        iconBg: "#0EA5E9",
        iconColor: "#FFFFFF",
        title: "Apex Plumbing Co.",
        subtitle: "(555) 123-4567 · apexplumbing.com",
      },
    ],
    primaryBtn: "Get Started",
    secondaryBtn: "Back",
  },
  {
    id: "5",
    svg: onb5,
    title: "Enable helpful access",
    description:
      "Turn on notifications for reminders and updates, and allow photo access so you can easily upload project images for quote requests.",
    listItems: [
      {
        icon: "notifications-outline",
        iconBg: "#E0F7FA",
        iconColor: "#0EA5E9",
        title: "Notifications",
        subtitle:
          "Get quote updates, maintenance reminders, and helpful alerts.",
      },
      {
        icon: "image-outline",
        iconBg: "#E0F7FA",
        iconColor: "#0EA5E9",
        title: "Photo Access",
        subtitle:
          "Upload images of panels, outlets, work areas, and project details.",
      },
    ],
    note: "You can manage permissions later in settings.",
    primaryBtn: "Allow Access",
    secondaryBtn: "Not Now",
  },
];
