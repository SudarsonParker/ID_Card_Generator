import React, { useState } from "react";

const Signup1 = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    dob: "",
    adhaarNumber: "",
    address: "",
    city: "",
    state: "",
    nationality: "",
    phoneNumber: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform form submission logic here with the formData state.
    console.log(formData);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-brown-500">
      <div className="bg-yellow-300 p-6 rounded-lg text-black text-center">
        <h1 className="text-2xl font-bold pb-4">Sign Up</h1>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="border-2 border-yellow-700 mb-4 p-2 rounded"
            placeholder="Name"
          />
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            className="border-2 border-yellow-700 mb-4 p-2 rounded"
            placeholder="Age"
          />
          <input
            type="text"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            className="border-2 border-yellow-700 mb-4 p-2 rounded"
            placeholder="Date of Birth"
          />
          <input
            type="text"
            name="adhaarNumber"
            value={formData.adhaarNumber}
            onChange={handleChange}
            className="border-2 border-yellow-700 mb-4 p-2 rounded"
            placeholder="Adhaar Number"
          />
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="border-2 border-yellow-700 mb-4 p-2 rounded"
            placeholder="Address"
          />
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="border-2 border-yellow-700 mb-4 p-2 rounded"
            placeholder="City"
          />
          <input
            type="text"
            name="state"
            value={formData.state}
            onChange={handleChange}
            className="border-2 border-yellow-700 mb-4 p-2 rounded"
            placeholder="State"
          />
          <input
            type="text"
            name="nationality"
            value={formData.nationality}
            onChange={handleChange}
            className="border-2 border-yellow-700 mb-4 p-2 rounded"
            placeholder="Nationality"
          />
          <input
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="border-2 border-yellow-700 mb-4 p-2 rounded"
            placeholder="Phone Number"
          />
          <button
            type="submit"
            className="bg-yellow-600 text-black font-bold py-2 px-4 rounded-md"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup1;
