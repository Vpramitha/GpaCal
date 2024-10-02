import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import ProgressBar from "react-native-progress/Bar";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router"; // Import the useRouter for navigation

export default function Welcome() {
  const [progress, setProgress] = useState(0);
  const router = useRouter(); // Initialize the router

  useEffect(() => {
    let interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 1) {
          clearInterval(interval);
          setTimeout(() => {
            router.push("/home"); // Navigate to the Home page after the progress reaches 100%
          }, 500); // Optional delay before navigation
          return 1; // Stops progress at 100%
        }
        return prevProgress + 0.1; // Increment progress by 10%
      });
    }, 500); // Progress update every 0.5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <LinearGradient
      colors={["#4c669f", "#3b5998", "#192f6a"]}
      style={styles.container}
    >
      <Text style={styles.welcomeText}>Welcome to the GPA Calculator App!</Text>
      <Text style={styles.subText}>Calculating GPA made easy</Text>
      <ProgressBar
        progress={progress}
        width={200}
        color={"#ff6347"}
        unfilledColor={"#dcdcdc"}
        borderWidth={2}
        borderColor={"#ffffff"}
        height={15}
        borderRadius={10}
      />
      <Text style={styles.loadingText}>
        {Math.floor(progress * 100)}% Loaded
      </Text>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 10,
  },
  subText: {
    fontSize: 16,
    color: "#dcdcdc",
    marginBottom: 30,
  },
  loadingText: {
    fontSize: 14,
    color: "#fff",
    marginTop: 10,
  },
});
