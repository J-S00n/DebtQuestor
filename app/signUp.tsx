import { Text, View, StyleSheet, TextInput } from "react-native";
import Button from "@/components/Button";
import { useRouter } from 'expo-router';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { useState } from "react";

export default function signUp() {
    const router = useRouter();
    const navigation = useNavigation();
    const [user, setUser] = useState("User");
    const [pass, setPass] = useState("Password");
    const [name, setName] = useState("Name");
    const [age, setAge] = useState("Age");
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
            <View style={styles.row}>
                <Text style={styles.text}>Name:</Text>
                <TextInput
                    onChange={() => setName}
                    value={name}
                    style={styles.input}
                />
            </View>

            <View style={styles.row}>
                <Text style={styles.text}>Age:</Text>
                <TextInput
                    onChange={() => setAge}
                    value={age}
                    style={styles.input}
                />
            </View>

            <View style={styles.row}>
                <Text style={styles.text}>Username:</Text>
                <TextInput
                    onChange={() => setUser}
                    value={user}
                    style={styles.input}
                />
            </View>

            <View style={styles.row}>
                <Text style={styles.text}>Password:</Text>
                <TextInput
                    onChange={() => setPass}
                    value={pass}
                    style={styles.input}
                />
            </View>

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
    },
    input: {
        height: 40,
        width: 200,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        backgroundColor: "white",
    },
});