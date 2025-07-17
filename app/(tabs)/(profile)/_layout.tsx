import { Stack } from 'expo-router';
import React from 'react';

export default function RootLayout() {
  return (
    <Stack screenOptions ={{headerShown:false}}>
      {/* <Stack.Screen name = "userSettings" options = {{headerShown: false}}/> */}
    </Stack>
  );
}