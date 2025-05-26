import { Pressable, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import MotivationalText from "../motivationalText";
import Constants from "expo-constants";

export default function Header() {
  const statusBarHeight = Constants.statusBarHeight;

  return (
    <View style={{ marginTop: statusBarHeight }}>
      <View
        style={{
          paddingHorizontal: 15,
          justifyContent: "space-between",
          flexDirection: "row",
          alignItems: "center",
          marginBottom: 10,
        }}
      >
        <Text style={{ fontSize: 26, color: "#00461a" }}>Habitomic</Text>
        <Pressable>
          <Ionicons name="add-outline" size={30} color="#00461a" />
        </Pressable>
      </View>
      {/* <MotivationalText /> */}
    </View>
  );
}
