import { Text, View, StyleSheet } from "react-native";
import Button from "@/components/Button";
import { useRouter } from 'expo-router';
import Dropdown from "@/components/Dropdown";

export default function homePage() {
    const router = useRouter();
    return (
        <View style={styles.container}>
            {/* remember to animate the FRONT PAGE */}
            <Text style={styles.text}>Welcome to Debt Questor!</Text>
            <Text style={styles.text}>Your journey towards a debt-free life starts today! All with a single click of a button</Text>
            <Text style={styles.text}>Ready? Start by inputting your university program and year number</Text>
            {/* program */}
            <View style={styles.row}>
                <Text style={styles.text}>University:</Text>
                <Dropdown />
            </View>
            <Button label="Calculate Debt" onPress={() => router.navigate('/calculate')}></Button>
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
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
});