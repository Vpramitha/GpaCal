import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen
        name="home"
        options={{
          title: "Home Page",
          headerBackVisible: false, // Hide the back button
        }}
      />
      <Stack.Screen
        name="semesters"
        options={{
          title: "Semesters Page",
          
        }}
      />
      <Stack.Screen name="marks"></Stack.Screen>
    </Stack>
  );
}
