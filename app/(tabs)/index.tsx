import { Text, View, StyleSheet } from "react-native";
import Button from "@/components/Button";

export default function Index() {
  return (
    <View
      style={styles.container}
    >
      <Text style={styles.text}>Home Screen</Text>
      <View style={styles.footerContainer}>
        <Button label="Go to Budget" theme="primary" onPress={() => alert('Navigating to your budget.')}/>
      </View>
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
  footerContainer: {
    position: "absolute",
    bottom: 20,
    width: "100%",
    alignItems: "center",
  },
});
