import React, { useState, useEffect } from "react";
import { Text, View, Button, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { useSession } from "./SessionContext.js";
import { doc, collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";

export default function Semesters() {
  const { sessionData, updateSessionData } = useSession();
  const [semesters, setSemesters] = useState([]); // State to store degrees
  const route = useRouter();

  const handleButtonPress = (semesterId) => {
    console.log(`${semesterId} Button Pressed`);
    // Add navigation or other logic here
    updateSessionData({ SemesterId: semesterId });
    route.push("/marks");
  };

  useEffect(() => {
    const fetchSemesters = async () => {
      try {
        if (!sessionData.DegreeId) {
          console.error("DegreeId is not available.");
          return;
        }

        // Reference to Vidul's account's Degree subcollection and the specific degree document
        const accountRef = doc(
          db,
          "Account",
          "vidul_pramitha",
          "Degree",
          sessionData.DegreeId
        );
        const semesterRef = collection(accountRef, "semester");

        // Get all semesters from the 'semester' subcollection
        const semesterSnapshot = await getDocs(semesterRef);

        // Map the fetched documents into an array of semesters
        const semesterList = semesterSnapshot.docs.map((doc) => ({
          id: doc.id, // Each document's ID
          ...doc.data(), // The data of the semester document
        }));

        // Update the state with the list of semesters
        setSemesters(semesterList);
        console.log("Fetched semesters: ", semesterList);
      } catch (error) {
        console.error("Error fetching semesters: ", error);
      }
    };

    fetchSemesters(); // Call the fetch function when the component mounts
  }, [sessionData.DegreeId]);

  // Optional useEffect to track semesters change
  useEffect(() => {
    console.log("Updated semesters: ", semesters);
  }, [semesters]);

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Semesters of the Degree</Text>

      <View style={styles.grid}>
        {/* Dynamically render semester buttons */}
        {semesters.map((semester) => (
          <View key={semester.id} style={styles.buttonContainer}>
            <Button
              title={semester.name || `Semester ${semester.id}`} // Fallback to "Semester <id>" if no name
              onPress={() => handleButtonPress(semester.id)}
            />
            <View style={styles.buttonSpacing} />
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  grid: {
    flexDirection: "row", // Arrange columns horizontally
    flexWrap: "wrap", // Allow buttons to wrap into multiple rows
    justifyContent: "space-between", // Space columns evenly
    width: "100%", // Make the grid full width
  },
  buttonContainer: {
    flexBasis: "45%", // Width of each button (adjust as needed)
    marginBottom: 15, // Space between buttons
  },
  buttonSpacing: {
    height: 15, // Space between buttons
  },
});
