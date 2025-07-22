import { Text, View, StyleSheet, TextInput } from "react-native";
import Button from "@/components/Button";
import { useRouter } from 'expo-router';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { useState } from "react";
import { useProfileContext } from "@/context/AuthContext";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, firestore } from "@/firebase";
import { doc, getDoc } from "firebase/firestore";

export default function login() {
    const router = useRouter();
    const navigation = useNavigation();
    const profileContext = useProfileContext();
    const {setUser} = profileContext || { setUser: () => {} };

    const [inputData, setInputData] = useState({
        user: '',
        pass: '',
    });

    const login = async()=> {
        // Prevent navigation if required fields are not filled
        if (!inputData.user.trim() || !inputData.pass.trim()) {
            alert("Please fill in all fields");
            return;
        }

        try {
            const result = await signInWithEmailAndPassword(
                auth,
                inputData.user,
                inputData.pass
            );
            const userDoc = await getDoc(doc(firestore, "users", result.user.uid));
            if (userDoc.exists()) {
                const userData = userDoc.data();
                setUser({
                    displayName: userData.name,
                    age: userData.age,
                    email: userData.email,
                    username: inputData.user, // Assuming username is the same as email
                });
            } else {
                console.error("No such document!");
            }
        } catch (error) {
            console.error("Error signing in:", error);
            alert("Login failed. Please check your credentials.");
            return;
        }

        navigation.dispatch(
            CommonActions.reset({
                index: 0,
                routes: [{ name: '(tabs)' }],
            })
        );
    }



    return (
        <View style={styles.container}>
            <Text style={styles.text}>Log in!</Text>
            <View style={styles.row}>
                <Text style={styles.text}>Username:</Text>
                <TextInput
                    value={inputData.user}
                    onChangeText={(text) => setInputData({ ...inputData, user: text })}
                    style={styles.input}
                    placeholder="Enter your username"
                    placeholderTextColor="#94A3B8"
                />
            </View>
            <View style={styles.row}>
                <Text style={styles.text}>Password:</Text>
                <TextInput
                    value={inputData.pass}
                    onChangeText={(text) => setInputData({ ...inputData, pass: text })}
                    style={styles.input}
                    placeholder="Enter your password"
                    placeholderTextColor="#94A3B8"
                    secureTextEntry
                />
            </View>
            <Button label="Log In" onPress={() => { login() }} />
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
