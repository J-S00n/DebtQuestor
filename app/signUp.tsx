import { Text, View, StyleSheet } from "react-native";
import Button from "@/components/Button";
import { useRouter } from 'expo-router';

export default function signUp() {
    const router = useRouter();
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Ready to get started? SIGN UP TODAY!</Text>
            {/* dismiss to gets rid of the log in slideshow and makes it so you cannot go backwards */}
            <Button label="Go to HOME page" onPress={() => router.dismissTo('/(tabs)')} />
            <View style={styles.row}>
                <Text style={styles.text}>Not a new user? Click here to</Text>
                <Text style={styles.login} onPress={() => router.navigate('/login')}> log in</Text>
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
    login: {
        fontSize: 20,
        color: "#50a3f7ff",
        fontWeight: "bold",
        textDecorationLine: 'underline',
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    }
});