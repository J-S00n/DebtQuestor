import { Tabs, Stack } from 'expo-router';
import React from 'react';
import { Ionicons } from "@expo/vector-icons";
import { Platform } from 'react-native';

export default function RootLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile'
        }}
      />

    </Tabs>);
}
