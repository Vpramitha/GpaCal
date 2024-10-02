import React from "react";
import { Text, View, Button, StyleSheet } from "react-native";
import { useRouter } from "expo-router"; // Import the useRouter for navigation
import NewDegreeModal from "./newDegreeModal";
import { useState } from "react";



export default function Home() {
  const router = useRouter(); // Initialize the router
  const [isNewDegreeModalVisible, setNewDegreeModalVisible] = useState(false); // Control modal visibility

  const handleButtonPress = function () {
    console.log("Button Pressed");
    router.push("/semesters"); // Navigate to the Home page after the progress reaches 100%
  };

  const handleNewDegree = function () {
    console.log("New Degree button pressed");
    setNewDegreeModalVisible(true);
  };

  const handleFormSubmit = (formData) => {
    console.log("Form Data:", formData); // Do something with form data
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome to the Home Page!</Text>

      {/* Wrap buttons in a View for styling */}
      <View style={styles.buttonContainer}>
        <Button
          title="Bsc Hons IT University of Kelaniya"
          onPress={handleButtonPress}
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button title="Add new Degree" onPress={handleNewDegree} />
      </View>
      <NewDegreeModal
        visible={isNewDegreeModalVisible}
        onClose={() => setNewDegreeModalVisible(false)}
        onSubmit={handleFormSubmit}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
  },
  buttonContainer: {
    marginBottom: 20, // Space between buttons
  },
});
