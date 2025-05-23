import { DefaultTheme } from "@react-navigation/native";

const LightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#6DBE45",
    background: "#FFFFFF",
    card: "#A3D977",
    text: "#333333",
    border: "#CCCCCC",
    notification: "#FFD700",
  },
};

const DarkTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#6DBE45",
    background: "#1E1E1E",
    card: "#4A7C2A",
    text: "#FFFFFF",
    border: "#444444",
    notification: "#FFD700",
  },
};

export { LightTheme, DarkTheme };
