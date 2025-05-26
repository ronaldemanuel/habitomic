import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  cardContainer: {
    width: "44%", // smaller cards
    aspectRatio: 1.2, // slightly rectangular
    margin: 10, // more space between cards
    minWidth: 120, // prevent cards from being too small on very small screens
    maxWidth: 180, // prevent cards from being too large on tablets
    alignSelf: "center", // center cards in column
  },
  cardButton: {
    backgroundColor: "#fff",
    borderRadius: 16,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#222",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.1,
    shadowRadius: 18,
    elevation: 8,
    padding: 10,
  },
  cardText: {
    color: "#333",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default styles;
