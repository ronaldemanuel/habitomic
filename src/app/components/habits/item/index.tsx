import { Text, TouchableOpacity, View } from "react-native";
import styles from "./style";

type ItemProps = {
  title: string;
};

export default function HabitItem(props: ItemProps) {
  return (
    <View style={styles.cardContainer}>
      <TouchableOpacity style={styles.cardButton}>
        <Text style={styles.cardText}>{props.title}</Text>
      </TouchableOpacity>
    </View>
  );
}
