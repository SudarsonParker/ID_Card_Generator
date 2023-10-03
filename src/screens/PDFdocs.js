import React from "react";
import {
  PDFDownloadLink,
  PDFViewer,
  Document,
  Page,
  Text,
  View,
  Image,
  StyleSheet,
} from "@react-pdf/renderer";

const PDFDocument = ({ studentData }) => {
  return (
    <Document>
      <Page size="A4" style={{ flexDirection: "row", backgroundColor: "#fff" }}>
        <View style={{ margin: 10, padding: 11, flexGrow: 1 }}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: "bold",
              marginBottom: 10,
              textAlign: "center",
            }}
          >
            {studentData.institutionName}
          </Text>
          <Image
            src={studentData.photoUrl}
            style={{ width: 150, height: 150, margin: "auto" }}
          />
          <Text style={{ fontSize: 12, marginBottom: 5 }}>
            Name: {studentData.studentName}
          </Text>
          <Text style={{ fontSize: 12, marginBottom: 5 }}>
            Age: {studentData.age}
          </Text>
          <Text style={{ fontSize: 12, marginBottom: 5 }}>
            Date of Birth: {studentData.dateOfBirth}
          </Text>
          <Text style={{ fontSize: 12, marginBottom: 5 }}>
            Joining Date: {studentData.joiningDate}
          </Text>
          <Text style={{ fontSize: 12, marginBottom: 5 }}>
            Ending Date: {studentData.endingDate}
          </Text>
        </View>
      </Page>
    </Document>
  );
};

export default PDFDocument;
