import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

interface SkillCardProps extends TouchableOpacityProps {
  skill: string;
}

export const SkillCard = ({ skill, ...rest }: SkillCardProps) => {
  return (
    <TouchableOpacity {...rest} style={styles.buttonSkill}>
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
