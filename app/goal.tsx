import { Text, View, StyleSheet } from "react-native";
import Button from "@/components/Button";
import { useRouter } from 'expo-router';

export default function goal() {
    const router = useRouter();
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Set your goals</Text>
            <Button
                label="Register now to start tracking and reaching your goals!"
                onPress={() => router.navigate('/signUp')}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "#0F172A", // dark navy background
        alignItems: "center",
        padding: 20,
    },
    title: {
        fontSize: 24,
        color: "#F8FAFC", // bright white for title
        fontWeight: "700",
        textAlign: "center",
        marginBottom: 16,
    },
});
