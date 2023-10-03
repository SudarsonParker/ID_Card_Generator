import React, { useState, useEffect } from "react";

const IDCard = () => {
  const [studentData, setStudentData] = useState({
    studentName: "",
    age: "",
    dateOfBirth: "",
    joiningDate: "",
    endingDate: "",
    photoUrl: "",
  });

  // Fetch student data from the database using an API call or other means.
  useEffect(() => {
    // Replace with your API call or data fetching logic
    // Example API call using fetch:
    fetch("https://yourapi.com/student/123")
      .then((response) => response.json())
      .then((data) => {
        setStudentData(data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="w-64 h-96 border border-gray-300 p-4 mx-auto mt-8 rounded-lg shadow-lg justify-center">
      <div className="text-center">
        <h1 className="text-xl font-bold">
          National Institute of Technoloy - Trichy
        </h1>
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
      </div>
    </div>
  );
};

export default IDCard;
