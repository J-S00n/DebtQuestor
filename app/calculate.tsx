import { Text, View, StyleSheet } from "react-native";
import Button from "@/components/Button";
import { useRouter } from 'expo-router';

export default function homePage() {
    const router = useRouter();
    return (
        <View style={styles.container}>
            {/* remember to animate the FRONT PAGE */}
            <Text style={styles.text}>You need x amount of time to get out of debt!</Text>
            <Text style={styles.text}>Thats a long time...</Text>
            <Text style={styles.text}>but we can help!</Text>
            <Button label="Start planning your debt quest today!" onPress={()=> router.navigate('/calculate')}></Button>
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