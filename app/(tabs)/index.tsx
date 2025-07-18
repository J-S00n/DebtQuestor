import Button from "@/components/Button";
import StreakTracker from "@/components/StreakTracker";
import { StreakProvider } from "@/context/StreakContext";
import { useRouter } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-native-paper";

export default function Index() {
  const router = useRouter();

  return (
    <View
      style={styles.container}
    >
      <StreakProvider>
        <Provider>
          <StreakTracker />
        </Provider>
      </StreakProvider>
      <View style={styles.footerContainer}>
        <Button label="Go to Budget" theme="primary" onPress={() => router.navigate("/(home)/budget")} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#0F172A", // Updated to dark navy
    alignItems: "center",
    paddingHorizontal: 20,
    paddingBottom: 80, // Ensures content doesn't overlap with button
  },
  text: {
    fontSize: 20,
    color: "#E2E8F0", // Soft light gray for readability
    fontWeight: "bold",
  },
  footerContainer: {
    position: "absolute",
    bottom: 20,
    width: "100%",
    alignItems: "center",
    paddingHorizontal: 20,
  },
});

