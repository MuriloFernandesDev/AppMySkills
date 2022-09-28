import { useEffect, useState } from "react";
import {
  FlatList,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { Button } from "../components/Button";
import { SkillCard } from "../components/SkillCard";

interface SkillData {
  id: string;
  name: string;
}

export default function Home() {
  const [skill, setSkill] = useState<string>("");
  const [mySkills, setMySkills] = useState<SkillData[]>([]);
  const [gretting, setGretting] = useState("");

  function handleNewAddSkill() {
    const data = {
      id: String(new Date().getTime()),
      name: skill,
    };

    setMySkills((oldSkills) => [...oldSkills, data]);
  }

  useEffect(() => {
    const CurrentHour = new Date().getHours();
    if (CurrentHour < 12 && CurrentHour > 5) {
      setGretting("Good Morning");
    } else if (CurrentHour > 12 && CurrentHour < 18) {
      setGretting("Good afternoon");
    } else {
      setGretting("Boa night");
    }
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, Murilo</Text>
      <Text style={{ color: "white" }}>{gretting}</Text>

      <TextInput
        style={styles.input}
        placeholder="NewSkill"
        placeholderTextColor="#555"
        onChangeText={setSkill}
      />

      <Button onPress={handleNewAddSkill} />

      <Text style={[styles.title, { marginTop: 30, textAlign: "left" }]}>
        MySkills
      </Text>

      <FlatList
        data={mySkills}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <SkillCard skill={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121015",
    paddingHorizontal: 20,
    paddingVertical: 70,
  },
  title: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
  input: {
    backgroundColor: "#1F1E25",
    color: "white",
    fontSize: 18,
    padding: Platform.OS === "ios" ? 15 : 10,
    marginTop: 30,
    borderRadius: 10,
  },
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
