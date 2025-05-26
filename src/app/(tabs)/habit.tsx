import { View } from "react-native";
import Header from "../components/header";
import MotivationalText from "../components/motivationalText";
import Habits from "../components/habits";
import Constants from "expo-constants";

export default function Habit() {
  const statusBarHeight = Constants.statusBarHeight;

  return (
    <View style={{ flex: 1 }} className="bg-white">
      <Header />
      {/* <LinearGradient
        colors={["white", "transparent"]}
        style={{
          position: "absolute",
          top: 162, // ajusta conforme o tamanho do header
          left: 0,
          right: 0,
          height: 30,
          zIndex: 5,
        }}
        pointerEvents="none"
      /> */}
      <Habits />
    </View>
  );
}
