import { Text, View, StyleSheet } from "react-native";
import Button from "@/components/Button";
import { useRouter } from 'expo-router';
import { CommonActions, useNavigation } from '@react-navigation/native';

export default function signUp() {
    const router = useRouter();
    const navigation = useNavigation();
    const resetToHome = () => {
        navigation.dispatch(
            // common actions deletes everything currently in the stack (index, calc, goal)
            // clearing the stack makes it so you cannot go back to intro slideshow
            CommonActions.reset({
                index: 0,
                //displays home page, cannot go back to intro slideshow 
                routes: [{ name: '(tabs)' }],
            })
        );
    };

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Ready to get started? SIGN UP TODAY!</Text>
            {/* dismiss to gets rid of the log in slideshow and makes it so you cannot go backwards */}
            <Button label="Go to HOME page" onPress={() => resetToHome()} />
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