import { Text, View } from "react-native";
import Header from "./components/header";
import Constants from "expo-constants";
import MotivationalText from "./components/motivationalText";

export default function Index() {
  const statusBarHeight = Constants.statusBarHeight;

  return (
    <View style={{ flex: 1 }}>
      <View style={{ marginTop: statusBarHeight }}>
        <Header />
        <MotivationalText />
      </View>
    </View>
  );
}
