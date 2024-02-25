"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
 faCoffee,
 faPizzaSlice,
 faHamburger,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Iconselect = () => {
 const [selectedOption, setSelectedOption] = useState("");

 const options = [
  { label: "coffe", value: "coffee", icon: faCoffee },
  { label: "Pizza Slice", value: "pizza", icon: faPizzaSlice },
  { label: "Hamburger", value: "hamburger", icon: faHamburger },
  { label: "Pizza Slice", value: "pizza", icon: faPizzaSlice },
  { label: "Hamburger", value: "hamburger", icon: faHamburger },
 ];

 const handleOptionChange = (e) => {
  setSelectedOption(e.target.value);
 };

 return (

  <>
  <div>
    {selectedOption && (
      <FontAwesomeIcon icon={options.find(option => option.value === selectedOption).icon} />
    )}
  </div>
  <select
    className="bg-gray-100 border border-gray-400 w-full p-6 rounded placeholder:text-2xl placeholder:capitalize"
    value={selectedOption}
    onChange={handleOptionChange}
  >
    <option value="">Select an option</option>
    {options.map((option) => (
      <option key={option.value} value={option.value}>
        {option.label}
      </option>
    ))}
  </select>
</>
 );
};

export default Iconselect;
