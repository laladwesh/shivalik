import React, { useState, useEffect } from "react";
import { useOrder } from "../context/order";

const AccordionWithOptions = ({ is, title, category }) => {
  const { order, updateOrder } = useOrder(); // Access OrderContext
  const [isOpen, setIsOpen] = useState(is);
  const [selectedOption, setSelectedOption] = useState(""); // Use current order if exists
  const [ddata, setdata] = useState([]);
  const [hasFetched, setHasFetched] = useState(false);

  const toggleAccordion = () => setIsOpen(!isOpen);

  useEffect(() => {
    if ( !hasFetched) {
      const fetchData = async () => {
        try {
          const response = await fetch(
            `http://localhost:4000/api/v1/materials/idxx/${category}`,
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
              },
            }
          );

          const data = await response.json();
          console.log("Data fetched for category:", category, data);
          setdata(data.data || []);

          // Set the default selected option
          if (data.data && data.data.length > 0) {
            const defaultOption = data.data[0]; // First item in the array
            setSelectedOption(order[category]?.id || defaultOption._id); // Use existing or default to the first
            updateOrder(category, {
              name: defaultOption.name,
              id: defaultOption._id,
              price: defaultOption.price,
            });
          }
          setHasFetched(true);
        } catch (error) {
          console.error("Error occurred while fetching data:", error);
          alert("Something went wrong. Please try again.");
        }
      };

      fetchData();
    }
  }, [isOpen, category, hasFetched, order, updateOrder]);

  const handleOptionSelect = (option) => {
    setSelectedOption(option._id); // Update local selection
    updateOrder(category, { name: option.name, id: option._id, price: option.price }); // Update global OrderContext
    console.log("Selected Option Updated:", { category, option }); // Debug log
  };

  return (
    <div
      className={`max-w-full mx-auto p-4 ${
        isOpen ? "rounded-lg" : "rounded-t-lg border-b-2 border-gray-300"
      }`}
    >
      {/* Accordion Header */}
      <button
        onClick={toggleAccordion}
        className="flex justify-between items-center w-full text-left py-2"
      >
        <span className="text-lg font-semibold text-gray-800">{title}</span>
        <svg
          className={`w-5 h-5 transform transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {/* Accordion Content */}
      <div
        className={`mt-4 overflow-y-scroll no-scrollbar transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-gray-600 text-sm mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum
          dolor sit amet.
        </p>
        <div className="space-y-3">
          {Array.isArray(ddata) &&
            ddata.map((item) => (
              <div
                key={item._id}
                className={`flex items-center justify-between p-4 border rounded-lg cursor-pointer ${
                  selectedOption === item._id
                    ? "border-primary ring-2 ring-purple-200"
                    : "border-gray-300"
                }`}
                onClick={() => handleOptionSelect(item)} // Call handler on selection
              >
                <div>
                  <h4 className="font-semibold text-gray-800">{item.name}</h4>
                  <p className="text-sm text-gray-600">{item.description}</p>
                  <p className="text-sm text-gray-600">{item.price}</p>
                </div>
                <input
                  type="radio"
                  name={category}
                  value={item._id}
                  checked={selectedOption === item._id}
                  onChange={() => handleOptionSelect(item)}
                  className="form-radio text-primary"
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default AccordionWithOptions;
