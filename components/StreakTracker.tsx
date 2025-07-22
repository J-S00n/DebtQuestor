import { ProgressBar } from "react-native-paper";
import { useStreakContext } from "../context/StreakContext";
import { StyleSheet, Text, View } from "react-native";

export default function StreakTracker() {
    const { streak } = useStreakContext();

    return (
        <View style={styles.container}>
            <Text style={styles.streakText}>
                Track your daily tasks and maintain your streak!
            </Text>
            <Text style={styles.streakText}>
                Current Streak: {streak} day(s)🔥
            </Text>
            <ProgressBar
                style={styles.progressBar}
                progress={streak / 7}
                color="#6200ee"
            />
        </View >
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-start",
        backgroundColor: "#1E293B",
        alignItems: "center",
        paddingHorizontal: 24,
        paddingTop: 48,
        paddingBottom: 40,
    },
    progressBar: {
        width: "80%",
        height: 12,
        borderRadius: 6,
        marginTop: 24,
        backgroundColor: "#334155",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.15,
        shadowRadius: 3,
    },
    streakText: {
        fontSize: 20,
        color: "#F1F5F9",
        fontWeight: "bold",
        marginTop: 12,
        letterSpacing: 1,
        textShadowColor: "#334155",
        textShadowOffset: { width: 0, height: 2 },
        textShadowRadius: 4,
        textAlign: "center",
    },
});

