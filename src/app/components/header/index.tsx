import { Pressable, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Header() {
  return (
    <View
      style={{
        paddingHorizontal: 15,
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 26, color: "#00461a" }}>Habitomic</Text>
      <Pressable>
        <Ionicons name="add-outline" size={30} color="#00461a" />
      </Pressable>
    </View>
  );
}
