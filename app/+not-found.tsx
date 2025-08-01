import { View, StyleSheet } from "react-native";
import { Link, Stack } from 'expo-router';

export default function NotFoundScreen() {
    return (
        <>
            <Stack.Screen
                options={{
                    title: 'Oops! Not Found',
                }}
            />
            <View
                style={styles.container}
            >
                <Link href="/" style={styles.button}>
                    Go back to Home screen!
                </Link>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "#25292e",
        alignItems: "center",
    },
    button: {
        fontSize: 20,
        color: "#fff",
        fontWeight: "bold",
        textDecorationLine: "underline",
    },
});