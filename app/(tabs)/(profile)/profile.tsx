import { Text, View, StyleSheet } from "react-native";
import Button from "@/components/Button";
import { useRouter } from 'expo-router';

export default function Profile() {
  return (
    <View style={styles.container}>
      <Button label = "User Settings" onPress={settingsPage}/>
      <Text style={styles.text}>Profile Screen</Text>
    </View>

  );
}

function settingsPage() {
  const router = useRouter();
  router.navigate('/userSettings');
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