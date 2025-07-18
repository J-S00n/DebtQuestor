import { View, Text, StyleSheet } from 'react-native';
import { MotiView, MotiText } from 'moti';
import { useRouter } from 'expo-router';
import Dropdown from '@/components/Dropdown'; // replace with correct path
import Button from '@/components/Button';     // replace with correct path

export default function HomePage() {
    const router = useRouter();

    return (
        <View style={styles.container}>
            {/* Welcome Text Animation - Starts centered, then moves up */}
            <MotiText
                from={{ opacity: 0, scale: 0.8, translateY: 300 }}
                animate={{ opacity: 1, scale: 1, translateY: 0 }}
                transition={{ type: 'timing', duration: 1500 }}
                style={styles.welcomeTitle}
            >
                Welcome to Debt Questor!
            </MotiText>

            {/* Slide-in Messages */}
            <MotiText
                from={{ opacity: 0, translateY: 40 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{ delay: 1600, type: 'timing', duration: 800 }}
                style={styles.text}
            >
                Your journey towards a debt-free life starts today! All with a single click of a button
            </MotiText>

            <MotiText
                from={{ opacity: 0, translateY: 40 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{ delay: 2800, type: 'timing', duration: 800 }}
                style={styles.text}
            >
                Ready? Start by inputting your university program and year number
            </MotiText>

            {/* Fade in the dropdowns and button */}
            <MotiView
                from={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                // normal delay is 4400
                transition={{ delay: 0, duration: 800 }}
                style={{ width: '100%', alignItems: 'center' }}
            >
                <View style={styles.row}>
                    <Text style={styles.label}>University:</Text>
                    <Dropdown />
                </View>

                <View style={styles.row}>
                    <Text style={styles.label}>Program:</Text>
                    <Dropdown />
                </View>

                <Button label="Calculate Debt" onPress={() => router.navigate('/calculate')} />
            </MotiView>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "#0F172A",
        alignItems: "center",
        padding: 20,
    },
    welcomeTitle: {
        fontSize: 32,
        fontWeight: "900",
        color: "#F8FAFC",
        marginBottom: 24,
        textAlign: "center",
        textTransform: "uppercase",
        letterSpacing: 1.2,
        lineHeight: 40,
        textShadowColor: 'rgba(255,255,255,0.15)',
        textShadowOffset: { width: 0, height: 2 },
        textShadowRadius: 10,
    },
    text: {
        fontSize: 18,
        color: "#E2E8F0",
        fontWeight: "600",
        textAlign: "center",
        marginBottom: 12,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: "#1E293B",
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderRadius: 12,
        marginBottom: 14,
        width: "90%",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5,
    },
    label: {
        color: "#CBD5E1",
        fontSize: 16,
        fontWeight: "500",
    },
});
