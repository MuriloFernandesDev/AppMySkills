import { StyleSheet, Text, TouchableOpacity } from "react-native";

export const SkillCard = ({ skill }) => {
  return (
    <TouchableOpacity style={styles.buttonSkill}>
      <Text style={styles.textSkill}>{skill}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonSkill: {
    backgroundColor: "#1F1E25",
    padding: 15,
    borderRadius: 17,
    fontWeight: "bold",
    alignItems: "center",
    marginVertical: 5,
  },
  textSkill: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
