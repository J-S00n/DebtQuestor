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
            onChangeText={onChangeName}
            value={name}
            style={styles.input}
            placeholderTextColor="#94A3B8"
          />
        </View>

        {/* age */}
        <View style={styles.row}>
          <Text style={styles.text}>Age:</Text>
          <TextInput
            onChangeText={onChangeAge}
            value={age}
            style={styles.input}
            placeholderTextColor="#94A3B8"
            keyboardType="numeric"
          />
        </View>

        {/* university */}
        <View style={styles.row}>
          <Text style={styles.text}>University:</Text>
          <Dropdown data={[
            { label: 'Algoma University', value: 'algoma' },
            { label: 'Brock University', value: 'brock' },
            { label: 'Carleton University', value: 'carleton' },
            { label: 'Collège Universitaire Dominicain', value: 'cud' },
            { label: 'Lakehead University', value: 'lakehead' },
            { label: 'Laurentian University', value: 'laurentian' },
            { label: 'McMaster', value: 'mac' },
            { label: 'Nipissing University', value: 'nipissing' },
            { label: 'OCAD University', value: 'ocad' },
            { label: 'Ontario Tech University', value: 'otech' },
            { label: 'Queen\'s University', value: 'queens' },
            { label: 'Redeemer University', value: 'redeemer' },
            { label: 'Royal Military College of Canada', value: 'military' },
            { label: 'TMU', value: 'tmu' },
            { label: 'Trent University', value: 'trent' },
            { label: 'Université de Hearst', value: 'hearst' },
            { label: 'University of Guelph', value: 'guelph' },
            { label: 'University of Ottawa', value: 'ottawa' },
            { label: 'University of Toronto', value: 'uoft' },
            { label: 'University of Waterloo', value: 'loo' },
            { label: 'University of Windsor', value: 'windsor' },
            { label: 'Western University', value: 'western' },
            { label: 'Wilfrid Laurier University', value: 'wilfrid' },
            { label: 'York University', value: 'york' }]} title={'University'} />
        </View>

        {/* program */}
        <View style={styles.row}>
          <Text style={styles.text}>Program:</Text>
          <Dropdown data={[
            { label: 'Art', value: 'art' },
            { label: 'Computer Science', value: 'cs' },
            { label: 'Engineering', value: 'eng' },
            { label: 'Health Sciences', value: 'health' },
            { label: 'Mathematics', value: 'math' }]} title={'Program'} />
        </View>

        {/* rent */}
        <View style={styles.row}>
          <Text style={styles.text}>Rent:</Text>
          <Dropdown data={[{ label: 'Campus Residence', value: 'rez' },
          { label: 'Renting', value: 'rent' },
          { label: 'N/A - Commuting', value: 'commute' },
          { label: 'Other', value: 'custom' }]} title={'Rent'} />
        </View>

        {/* income */}
        <View style={styles.row}>
          <Text style={styles.text}>Income:</Text>
          <TextInput
            onChangeText={onChangeIncome}
            value={income}
            style={styles.input}
            placeholderTextColor="#94A3B8"
            keyboardType="numeric"
          />
        </View>

        {/* projected costs */}
        <View style={styles.row}>
          <Text style={styles.text}>Projected Costs:</Text>
          <TextInput
            editable={false}
            style={styles.costs}
            placeholder="TBD"
            placeholderTextColor="#94A3B8"
          />
        </View>

        <View style={{ marginTop: 20 }}>
          <Button label="User Settings" onPress={() => router.navigate('/userSettings')} />
        </View>

        {/* temporary filler block for scrolling; REMOVE LATER */}
        <View style={styles.filler}></View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  filler: {
    paddingBottom: 100,
  },
  container: {
    justifyContent: "center",
    backgroundColor: "#0F172A", // themed dark navy
    alignItems: "center",
    paddingTop: 60,
    paddingBottom: 30,
  },
  text: {
    fontSize: 18,
    color: "#E2E8F0", // soft light gray
    fontWeight: "600",
    marginRight: 10,
    width: 120,
  },
  input: {
    height: 40,
    width: 180,
    borderWidth: 1,
    paddingHorizontal: 10,
    backgroundColor: "#1E293B", // darker input background
    borderColor: "#334155",
    color: "#E2E8F0", // light text in input
    borderRadius: 6,
  },
  costs: {
    height: 40,
    width: 180,
    borderWidth: 1,
    paddingHorizontal: 10,
    backgroundColor: "#1E293B",
    borderColor: "#334155",
    color: "#E2E8F0",
    borderRadius: 6,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    paddingHorizontal: 10,
  },
});
