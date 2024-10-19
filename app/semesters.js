import React from "react";
import { Text, View, Button, StyleSheet } from "react-native";
import { useRouter } from "expo-router"
import { useSession } from "./SessionContext.js";

export default function Semesters() {
  const { sessionData, updateSessionData } = useSession();
  const route =useRouter();
  const handleButtonPress = (semester) => {
    console.log(`${semester} Button Pressed`);
    // Add navigation or other logic here
    updateSessionData({SemesterId:semester});
    //console.log("The Degree id is : ",sessionData.DegreeId);
    route.push("/marks");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Semesters of the Degree</Text>

      <View style={styles.grid}>
        {/* Column 1 */}
        <View style={styles.column}>
          <Button
            title="Semester 1"
            onPress={() => handleButtonPress("Semester 1")}
          />
          <View style={styles.buttonSpacing} />
          <Button
            title="Semester 3"
            onPress={() => handleButtonPress("Semester 3")}
          />
          <View style={styles.buttonSpacing} />
          <Button
            title="Semester 5"
            onPress={() => handleButtonPress("Semester 5")}
          />
          <View style={styles.buttonSpacing} />
          <Button
            title="Semester 7"
            onPress={() => handleButtonPress("Semester 7")}
          />
        </View>

        {/* Column 2 */}
        <View style={styles.column}>
          <Button
            title="Semester 2"
            onPress={() => handleButtonPress("Semester 2")}
          />
          <View style={styles.buttonSpacing} />
          <Button
            title="Semester 4"
            onPress={() => handleButtonPress("Semester 4")}
          />
          <View style={styles.buttonSpacing} />
          <Button
            title="Semester 6"
            onPress={() => handleButtonPress("Semester 6")}
          />
          <View style={styles.buttonSpacing} />
          <Button
            title="Semester 8"
            onPress={() => handleButtonPress("Semester 8")}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   // flex: 1,
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
    justifyContent: "space-between", // Space columns evenly
    width: "100%", // Make the grid full width
  },
  column: {
    flex: 1, // Allow each column to take equal space
    marginLeft:5,
  },
  buttonSpacing: {
    height: 15, // Space between buttons
  },
});

