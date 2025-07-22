import { Text, View, StyleSheet, TextInput } from "react-native";
import Button from "@/components/Button";
import { useRouter } from 'expo-router';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { useState } from "react";
import { useProfileContext } from "@/context/AuthContext";

export default function signUp() {
    const router = useRouter();
    const navigation = useNavigation();
    const profileContext = useProfileContext();
    const setName = profileContext?.setName ?? (() => { });
    const setAge = profileContext?.setAge ?? (() => { });
    const setUsername = profileContext?.setUsername ?? (() => { });
    const setPassword = profileContext?.setPassword ?? (() => { });

    // Local state for input fields
    const [name, setNameLocal] = useState("");
    const [age, setAgeLocal] = useState("");
    const [username, setUsernameLocal] = useState("");
    const [password, setPasswordLocal] = useState("");

    const resetToHome = () => {
        // Prevent navigation if required fields are not filled
        if (
            !name.trim() ||
            !age.trim() ||
            !username.trim() ||
            !password.trim()
        ) {
            alert("Please fill in all fields");
            return;
        }
        // Update context before navigation
        setName(name);
        setAge(Number(age));
        setUsername(username);
        setPassword(password);

        navigation.dispatch(
            CommonActions.reset({
                index: 0,
                routes: [{ name: '(tabs)' }],
            })
        );
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Ready to get started? SIGN UP TODAY!</Text>

            <View style={styles.row}>
                <Text style={styles.label}>Name:</Text>
                <TextInput
                    value={name}
                    onChangeText={setNameLocal}
                    style={styles.input}
                    placeholder="Enter your name"
                    placeholderTextColor="#94A3B8"
                />
            </View>

            <View style={styles.row}>
                <Text style={styles.label}>Age:</Text>
                <TextInput
                    value={age}
                    onChangeText={setAgeLocal}
                    style={styles.input}
                    placeholder="Enter your age"
                    placeholderTextColor="#94A3B8"
                    keyboardType="numeric"
                />
            </View>

            <View style={styles.row}>
                <Text style={styles.label}>Username:</Text>
                <TextInput
                    value={username}
                    onChangeText={setUsernameLocal}
                    style={styles.input}
                    placeholder="Choose a username"
                    placeholderTextColor="#94A3B8"
                />
            </View>

            <View style={styles.row}>
                <Text style={styles.label}>Password:</Text>
                <TextInput
                    value={password}
                    onChangeText={setPasswordLocal}
                    style={styles.input}
                    placeholder="Choose a password"
                    placeholderTextColor="#94A3B8"
                    secureTextEntry
                />
            </View>
            <Button label="Go to HOME page" onPress={resetToHome} />
            <View style={[styles.row, { justifyContent: 'center', marginTop: 20 }]}>
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
        backgroundColor: "#0F172A", // dark navy consistent background
        alignItems: "center",
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: "700",
        color: "#F8FAFC",
        textAlign: "center",
        marginBottom: 24,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 14,
        width: '90%',
        justifyContent: 'space-between',
        backgroundColor: "#1E293B", // slightly lighter container for inputs
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderRadius: 12,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 4,
    },
    label: {
        fontSize: 16,
        fontWeight: "600",
        color: "#CBD5E1", // light label text
        width: 90,
    },
    input: {
        flex: 1,
        height: 40,
        backgroundColor: "#0F172A",
        borderWidth: 1,
        borderColor: "#64748B",
        borderRadius: 8,
        paddingHorizontal: 10,
        color: "#E2E8F0",
        fontSize: 16,
    },
    text: {
        fontSize: 16,
        color: "#E2E8F0",
        fontWeight: "600",
        marginRight: 5,
    },
    login: {
        fontSize: 16,
        color: "#2563EB",
        fontWeight: "700",
        textDecorationLine: 'underline',
    },
});
