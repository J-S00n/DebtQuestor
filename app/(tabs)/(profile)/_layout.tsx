import { Stack } from 'expo-router';
import React from 'react';

export default function RootLayout() {
  return (
    <Stack screenOptions={{
      headerStyle: {
        backgroundColor: '#d0d0d0ff',
      },
      headerShadowVisible: false,
      title:"Profile"
    }}>
      {/* profile is the first screen declared, which is why it is automatically navigated to when the profile tab is pressed */}
      <Stack.Screen name="profile" />
      <Stack.Screen name="userSettings" options={{
        //title is the default title, headerTitle overrides it
        title: 'Profile',
        headerStyle: { backgroundColor: '#f4511e' },
        //makes the back button and title white
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerTitle: "User Settings",
      }} />
    </Stack>
  );
}