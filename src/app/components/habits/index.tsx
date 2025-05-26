import { useEffect, useState } from "react";
import {
  Dimensions,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import HabitItem from "./item";
import Constants from "expo-constants";
import { LinearGradient } from "expo-linear-gradient";

export default function Habits() {
  const screenHeight = Dimensions.get("window").height;

  type ItemData = {
    id: string;
    title: string;
  };
  const [habits, setHabits] = useState<ItemData[]>([]);

  useEffect(() => {
    const data: ItemData[] = [
      { id: "1", title: "Leitura" },
      { id: "2", title: "Exercício físico" },
      { id: "3", title: "Meditação" },
      { id: "4", title: "Diário de gratidão" },
      { id: "5", title: "Beber água regularmente" },
      { id: "6", title: "Dormir bem" },
      { id: "7", title: "Aprender algo novo" },
      { id: "8", title: "Estudar um idioma" },
      { id: "9", title: "Organização" },
      { id: "10", title: "Caminhada ao ar livre" },
    ];

    setHabits(data);
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ paddingHorizontal: 8 }}>
        <FlatList
          data={habits}
          renderItem={({ item }) => <HabitItem title={item.title} />}
          keyExtractor={(item) => item.id}
          numColumns={2}
          columnWrapperStyle={{ justifyContent: "space-between" }}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 16 }}
        />
      </View>
    </SafeAreaView>
  );
}
