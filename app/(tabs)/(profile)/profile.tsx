import { Text, View, StyleSheet } from "react-native";
import Button from "@/components/Button";
import { useRouter } from 'expo-router';

export default function Profile() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Button label = "User Settings" onPress={() => router.navigate('/userSettings')}/>
      <Text style={styles.text}>Profile Screen</Text>
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