import { Stack } from "expo-router";
import { SessionProvider } from './SessionContext.js'; // Adjust the path to where your SessionContext file is located

export default function RootLayout() {
  return (
    <SessionProvider>
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
    </SessionProvider>
  );
}
