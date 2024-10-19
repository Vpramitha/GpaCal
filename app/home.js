import React, { useState, useEffect } from "react";
import { Text, View, Button, StyleSheet } from "react-native";
import { useRouter } from "expo-router"; // Import the useRouter for navigation
import NewDegreeModal from "./newDegreeModal";
// Import necessary Firestore methods
import { doc, setDoc, collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "./firebase"; // Adjust the path as necessary
import { useSession } from "./SessionContext.js";

export default function Home() {
  const { sessionData, updateSessionData } = useSession();
  const router = useRouter(); // Initialize the router
  const [isNewDegreeModalVisible, setNewDegreeModalVisible] = useState(false); // Control modal visibility
  const [degrees, setDegrees] = useState([]); // State to store degrees

  // Fetch degrees when the page loads
  useEffect(() => {
    const fetchDegrees = async () => {
      try {
        // Reference to Vidul's account's Degree subcollection
        const accountRef = doc(db, "Account", "vidul_pramitha");
        const degreeRef = collection(accountRef, "Degree");

        // Get all the degrees
        const degreeSnapshot = await getDocs(degreeRef);

        // Store degrees in the state
        const degreeList = degreeSnapshot.docs.map((doc) => ({
          id: doc.id, // Each document's ID
          ...doc.data(), // The data of the degree
        }));

        setDegrees(degreeList); // Update state with the degrees
      } catch (error) {
        console.error("Error fetching degrees: ", error);
      }
    };

    fetchDegrees(); // Call the function when the component mounts
  }, []);

  const handleButtonPress = (degreeId,numOfYears) => {
    console.log(`${degreeId} Button Pressed`);
    console.log("numOfYears : ", numOfYears);
    updateSessionData({ DegreeId: degreeId ,NumOfYears:numOfYears});
    router.push("/semesters"); // Navigate to the next page (replace this with the appropriate behavior)
  };

  const handleNewDegree = () => {
    console.log("New Degree button pressed");
    setNewDegreeModalVisible(true);
  };

  const handleFormSubmit = async (formData) => {
    console.log("Form Data:", formData); // Log the form data

    try {
      // Create an account with name and NIC (replace with dynamic data if needed)
      const accountRef = doc(db, "Account", "vidul_pramitha"); // Document for Vidul Pramitha

      await setDoc(accountRef, {
        name: "Vidul Pramitha",
        NIC: "1234", // Replace with dynamic NIC if needed
      });

      console.log("Account created for Vidul Pramitha");

      // Add the degree as a subcollection under Vidul Pramitha's account
      const degreeRef = collection(accountRef, "Degree");
      await addDoc(degreeRef, formData);

      console.log("Degree added to Vidul's account:", formData);
      
    } catch (error) {
      console.error("Error adding degree to Vidul's account: ", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome to the Home Page!</Text>

      {/* Render a button for each degree */}
      {degrees.map((degree) => (
        <View key={degree.id} style={styles.buttonContainer}>
          <Button
            title={degree.DegreeName} // Display the degree name on the button
            onPress={() => handleButtonPress(degree.id, degree.NumOfYears)}
          />
        </View>
      ))}

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
