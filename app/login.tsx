import { Text, View, StyleSheet } from "react-native";
import Button from "@/components/Button";
import { useRouter } from 'expo-router';

export default function login() {
    const router = useRouter();
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Log in!</Text>
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