import { Text, View, StyleSheet } from "react-native";
import Button from "@/components/Button";
import { useRouter } from 'expo-router';
import { MotiView, MotiText } from 'moti';
import { useState } from "react";

export default function calculate() {
    const router = useRouter();
    const [estimate, setEstimate] = useState("x");

    return (
        <View style={styles.container}>
            {/* Animated grand title */}
            <MotiText
                from={{ opacity: 0, scale: 3, translateY: 0 }}
                animate={{ opacity: 1, scale: 1.5, translateY: -40 }}
                transition={{ type: 'timing', duration: 1200 }}
                style={styles.grandTitle}
            >
                You need {estimate} years to get out of debt!
            </MotiText>

            {/* Slide-in text */}
            <MotiText
                from={{ opacity: 0, translateY: 40 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{ delay: 1300, type: 'timing', duration: 800 }}
                style={styles.text}
            >
                But we can help!
            </MotiText>

            {/* Fade in button */}
            <MotiView
                from={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2200, duration: 600 }}
                style={{ width: '100%', alignItems: 'center', marginTop: 20 }}
            >
                <Button label="Start planning your debt quest today!" onPress={() => router.navigate('/goal')} />
            </MotiView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "#0F172A", // dark navy
        alignItems: "center",
        padding: 20,
    },
    grandTitle: {
        fontSize: 24,
        fontWeight: "800",
        color: "#60A5FA",
        textAlign: "center",
        marginBottom: 2,  
        letterSpacing: 1,
        paddingHorizontal: 20,
        maxWidth: '90%',
    },
    text: {
        fontSize: 18,
        color: "#E2E8F0", // soft light gray
        fontWeight: "600",
        textAlign: "center",
        marginBottom: 0,
        marginTop: 0,  
    },
});

