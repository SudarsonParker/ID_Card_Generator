import React, { useState } from "react";
import Signup from "./Signup";

const Signup = () => {
  const [name, setName] = useState("");
  const [name1, setName1] = useState("");
  const [selectedOption, setSelectedOption] = useState(""); // State for radio button selection

  const handleChange = (e) => setName(e.target.value);
  const mailid = (e) => setName1(e.target.value);

  const handleRadioChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-yellow-500">
      {/* Center the login holder */}
      <div className="bg-white p-6 rounded-lg text-black text-center">
        <div className="flex justify-center">
          <h1 className="text-2xl font-bold pb-4 mr-72">LOGIN</h1>
        </div>
        <form className="flex flex-col">
          <input
            className="border-2 border-yellow-700 ... mb-4"
            placeholder="Enter Name"
            onChange={handleChange}
          />
          <input
            className="border-2 border-yellow-700 mb-4"
            placeholder="Enter email"
            onChange={mailid}
          />
          <div className="flex flex-row">
            <div className="mb-4">
              <label>
                <input
                  type="radio"
                  value="Option 1"
                  checked={selectedOption === "Option 1"}
                  onChange={handleRadioChange}
                />
                Male
              </label>
            </div>

            <div className="mb-4">
              <label>
                <input
                  type="radio"
                  value="Option 2"
                  checked={selectedOption === "Option 2"}
                  onChange={handleRadioChange}
                />
                Female
              </label>
            </div>
            <div className="text-center pl-10 pt-8">
              <button
                type="submit"
                className="bg-yellow-600 text-black font-bold py-2 px-4 rounded-md"
              >
                Login
              </button>
            </div>
          </div>
        </form>
        <h4 className="font-semibold pt-4">new user ? signup</h4>
      </div>
    </div>
  );
};

export default Signup;
