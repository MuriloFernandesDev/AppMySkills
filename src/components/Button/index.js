import { StyleSheet, Text, TouchableOpacity } from "react-native";

export const Button = ({ onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.button}
      activeOpacity={0.8}
    >
      <Text style={styles.buttonText}>Add</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#a370f7",
    padding: 15,
    borderRadius: 7,
    alignItems: "center",
    marginTop: 30,
  },
  buttonText: {
    fontSize: 17,
    fontWeight: "bold",
    color: "white",
  },
});
