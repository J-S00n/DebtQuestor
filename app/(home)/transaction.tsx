import { Text, View, StyleSheet } from "react-native";

export default function transactionPage() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to the Transaction Page</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#25292e",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
  },
});