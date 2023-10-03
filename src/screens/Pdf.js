import React, { useState, useEffect } from "react";
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

const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#fff",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  text: {
    fontSize: 12,
    marginBottom: 5,
  },
  image: {
    width: 150,
    height: 150,
    margin: "auto",
  },
});

const Docs = () => {
  const [studentData, setStudentData] = useState({
    studentName: "John Doe",
    age: "18",
    dateOfBirth: "01/01/2005",
    joiningDate: "09/01/2023",
    endingDate: "06/30/2024",
    photoUrl: "https://example.com/student.jpg",
    institutionName: "Sample School",
  });

  const downloadPdf = () => {
    // You can use react-to-pdf to generate a PDF from your component
  };

  return (
    <div className="w-64 h-96 border border-gray-300 p-4 mx-auto mt-8 rounded-lg shadow-lg">
      <div className="text-center">
        <h1 className="text-xl font-bold">{studentData.institutionName}</h1>
        <img
          src={studentData.photoUrl}
          alt="Student Photo"
          className="w-32 h-32 mx-auto mt-4 rounded-full"
        />
        <p className="mt-4">Name: {studentData.studentName}</p>
        <p>Age: {studentData.age}</p>
        <p>Date of Birth: {studentData.dateOfBirth}</p>
        <p>Joining Date: {studentData.joiningDate}</p>
        <p>Ending Date: {studentData.endingDate}</p>
        <button
          onClick={downloadPdf}
          className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg"
        >
          Download PDF
        </button>
      </div>
    </div>
  );
};

export default Docs;
