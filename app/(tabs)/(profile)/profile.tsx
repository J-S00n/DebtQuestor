import { Text, View, StyleSheet, ScrollView, TextInput } from "react-native";
import Button from "@/components/Button";
import { useRouter } from 'expo-router';
import { useState } from "react";
import Dropdown from "@/components/Dropdown";

export default function Profile() {
  const router = useRouter();
  const [name, onChangeName] = useState("Name");
  const [age, onChangeAge] = useState("Age");
  const [income, onChangeIncome] = useState('0');

  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* name */}
        <View style={styles.row}>
          <Text style={styles.text}>Name:</Text>
          <TextInput
            onChange={() => onChangeName}
            value={name}
            style={styles.input}
          />
        </View>
        {/* age */}
        <View style={styles.row}>
          <Text style={styles.text}>Age:</Text>
          <TextInput
            onChange={() => onChangeAge}
            value={age}
            style={styles.input}
          />
        </View>

        {/* Program */}
        <View style={styles.row}>
          <Text style={styles.text}>University:</Text>
          <Dropdown />
        </View>
        <View style={styles.row}>
          <Text style={styles.text}>Program:</Text>
          <Dropdown />
        </View>

        {/* rent */}
        <View style={styles.row}>
          <Text style={styles.text}>Rent:</Text>
          <Dropdown />
        </View>

        {/* income */}
        <View style={styles.row}>
          <Text style={styles.text}>Income:</Text>
          <TextInput
            onChange={() => onChangeIncome}
            value={income}
            style={styles.input}
          />
        </View>

        {/* projected costs */}
        <View style={styles.row}>
          <Text style={styles.text}>Projected Costs for ___:</Text>
          <TextInput
            readOnly
            style={styles.costs}
          />
        </View>
        <Button label="User Settings" onPress={() => router.navigate('/userSettings')} />

        {/* temporary filler block for scrolling; REMOVE LATER */}
        <View style={styles.filler}></View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  filler: {
    padding: 200
  },
  container: {
    justifyContent: "center",
    backgroundColor: "#25292e",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
  },
  input: {
    height: 40,
    width: 200,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "white",
  },
  costs: {
    height: 40,
    width: 100,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "white",
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
});