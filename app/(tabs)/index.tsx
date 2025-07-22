import Button from "@/components/Button";
import StreakTracker from "@/components/StreakTracker";
import { StreakProvider } from "@/context/StreakContext";
import { useRouter } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { Provider, Card } from "react-native-paper";
import { ProfileProvider, useProfileContext } from "@/context/AuthContext";

export default function Index() {
  const router = useRouter();
  const goal = "Temporary goal";

  const profileContext = useProfileContext();
  const name = profileContext?.name ?? '';
  const user = name || 'User'; // Fallback to 'User' if name is not set

  return (
    <ProfileProvider>
      <View
        style={styles.container}
      >
        <Text style={styles.text}>
          Welcome, {user}!
        </Text>
        <StreakProvider>
          <Provider>
            <StreakTracker />
          </Provider>
        </StreakProvider>
        <View style={styles.buttonContainer}>
          <Button label="Quests" theme="primary" onPress={() => router.navigate("/(home)/quest")} />
        </View>
        <View style={styles.buttonContainer}>
          <Button label="Budget" theme="primary" onPress={() => router.navigate("/(home)/budget")} />
        </View>
        <View style={styles.buttonContainer}>
          <Button label="Transactions" theme="primary" onPress={() => router.navigate("/(home)/transaction")} />
        </View>
        <Card>
          <Card.Content>
            <Text style={styles.goalText}>{goal}</Text>
          </Card.Content>
        </Card>
      </View>
    </ProfileProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    backgroundColor: "#1E293B", // Slightly lighter navy for depth
    alignItems: "center",
    paddingHorizontal: 24,
    paddingTop: 48,
    paddingBottom: 40,
  },
  text: {
    fontSize: 26,
    color: "#F1F5F9", // Brighter for welcome
    fontWeight: "bold",
    marginBottom: 18,
    letterSpacing: 1,
    textShadowColor: "#334155",
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    marginTop: 16,
    marginBottom: 4,
    gap: 8,
  },
  goalText: {
    fontSize: 18,
    color: "#38BDF8", // Accent color for goal
    fontWeight: "600",
    textAlign: "center",
    marginTop: 8,
    marginBottom: 4,
  },
});

