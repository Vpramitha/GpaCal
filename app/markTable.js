import React from "react";
import { View, StyleSheet } from "react-native";
import { Table, Row, Rows, Text } from "react-native-table-component";

export default function MarkTable() {
  const tableHead = ["Code", "Course", "Result"];
  const tableData = [
    ["Row 1, Col 1", "Row 1, Col 2", "Row 1, Col 3"],
    ["Row 2, Col 1", "Row 2, Col 2", "Row 2, Col 3"],
    ["Row 3, Col 1", "Row 3, Col 2", "Row 3, Col 3"],
    ["Row 4, Col 1", "Row 4, Col 2", "Row 4, Col 3"],
    ["Row 5, Col 1", "Row 5, Col 2", "Row 5, Col 3"],
    ["Row 6, Col 1", "Row 6, Col 2", "Row 6, Col 3"],
    ["Row 7, Col 1", "Row 7, Col 2", "Row 7, Col 3"],
    ["Row 8, Col 1", "Row 8, Col 2", "Row 8, Col 3"],
  ];

  return (
    <View style={styles.container}>
      <Table borderStyle={{ borderWidth: 1, borderColor: "#C1C0B9" }}>
        <Row data={tableHead} style={styles.head} textStyle={styles.text} />
        <Rows data={tableData} textStyle={styles.text} />
      </Table>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 10, backgroundColor: "#fff" },
  head: { height: 40, backgroundColor: "#f1f8ff" },
  text: { margin: 6, textAlign: "center" },
});
