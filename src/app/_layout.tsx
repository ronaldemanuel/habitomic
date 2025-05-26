import { DefaultTheme, ThemeProvider } from "@react-navigation/native";
import "../styles/global.css";
import { Slot, Tabs } from "expo-router";
import { DarkTheme } from "../styles/theme/theme";

export default function RootLayout() {
  // set color scheme to dark default

  const colorScheme = "default";

  return (
    // <ThemeProvider value={DefaultTheme}>
    <Slot />
    // </ThemeProvider>
  );
}
