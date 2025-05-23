import { DefaultTheme, ThemeProvider } from "@react-navigation/native";
import "../styles/global.css";
import { Slot } from "expo-router";
import { DarkTheme } from "../styles/theme/theme";
import { useColorScheme } from "react-native";

export default function RootLayout() {
  // set color scheme to dark default

  const colorScheme = "dark";

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Slot />
    </ThemeProvider>
  );
}
