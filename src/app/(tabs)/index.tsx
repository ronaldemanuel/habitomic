import { Text, View } from "react-native";
import Header from "../components/header";

export default function Index() {
  return (
    <View style={{ flex: 1 }} className="bg-white">
      <Header />
      <Text>HomePage</Text>
    </View>
  );
}
