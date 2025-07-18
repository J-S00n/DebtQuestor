import { Text, View, StyleSheet } from "react-native";
import Button from "@/components/Button";
import { useRouter } from 'expo-router';

export default function homePage() {
    const router = useRouter();
    return (
        <View style={styles.container}>
            {/* remember to animate the FRONT PAGE */}
            <Text style={styles.text}>Set your goals</Text>
            <Button label="Register now to start tracking and reaching your goals!" onPress={() => router.navigate('/signUp')}></Button>
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