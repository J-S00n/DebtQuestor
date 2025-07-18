import { ProgressBar } from "react-native-paper";
import { useStreakContext } from "../context/StreakContext";
import { StyleSheet, Text, ScrollView } from "react-native";

export default function StreakTracker() {
    const { streak } = useStreakContext();

    return (
        <ScrollView style={styles.container}>
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
        </ScrollView >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#25292e",
    },
    progressBar: {
        width: "80%",
        height: 10,
        borderRadius: 5,
        marginTop: 20,
        backgroundColor: "#3f51b5",
    },
    streakText: {
        fontSize: 16,
        color: "#fff",
        fontWeight: "bold",
        marginTop: 10,
    },
});

