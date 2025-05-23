import { View } from "react-native";
import Header from "./components/header";
import Constants from "expo-constants";

export default function Index() {
  const statusBarHeight = Constants.statusBarHeight;

  return (
    <View style={{ flex: 1 }}>
      <View style={{ backgroundColor: "#fff", marginTop: statusBarHeight }}>
        <Header />
      </View>
    </View>
  );
}
