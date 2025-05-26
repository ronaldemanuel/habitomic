import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#00461a",
        tabBarStyle: {
          height: 70,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
          title: "Home",
        }}
      />
      <Tabs.Screen
        name="habit"
        options={{
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="create-outline" size={size} color={color} />
          ),
          title: "Hábitos",
        }}
      />
      <Tabs.Screen
        name="goal"
        options={{
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="rocket-outline" size={size} color={color} />
          ),
          title: "Metas",
        }}
      />
      <Tabs.Screen
        name="reward"
        options={{
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="ribbon-outline" size={size} color={color} />
          ),
          title: "Recompensas",
        }}
      />
    </Tabs>
  );
}
