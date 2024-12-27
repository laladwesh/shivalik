import React, { useState } from "react";

const AccordionWithOptions = ({ isOpen: initialIsOpen, title }) => {
  const [isOpen, setIsOpen] = useState(initialIsOpen); // Accordion open state
  const [selectedOption, setSelectedOption] = useState("option1"); // Selected radio button state

  const toggleAccordion = () => setIsOpen(!isOpen);

  return (
    <div
      className={`max-w-full mx-auto p-4 ${
        isOpen
          ? "rounded-lg" // Fully rounded when open
          : "rounded-t-lg border-b-2 border-gray-300" // Border when closed
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
        className={`mt-4 overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-gray-600 text-sm mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum
          dolor sit amet.
        </p>
        <div className="space-y-3">
          {/* Option 1 */}
          <div
            className={`flex items-center justify-between p-4 border rounded-lg cursor-pointer ${
              selectedOption === "option1"
                ? "border-primary ring-2 ring-purple-200"
                : "border-gray-300"
            }`}
            onClick={() => setSelectedOption("option1")}
          >
            <div>
              <h4 className="font-semibold text-gray-800">Type</h4>
              <p className="text-sm text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem
                ipsum dolor sit amet
              </p>
            </div>
            <input
              type="radio"
              name="option"
              value="option1"
              checked={selectedOption === "option1"}
              onChange={() => setSelectedOption("option1")}
              className="form-radio text-primary"
            />
          </div>

          {/* Option 2 */}
          <div
            className={`flex items-center justify-between p-4 border rounded-lg cursor-pointer ${
              selectedOption === "option2"
                ? "border-primary ring-2 ring-purple-200"
                : "border-gray-300"
            }`}
            onClick={() => setSelectedOption("option2")}
          >
            <div>
              <h4 className="font-semibold text-gray-800">Type</h4>
              <p className="text-sm text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem
                ipsum dolor sit amet
              </p>
            </div>
            <input
              type="radio"
              name="option"
              value="option2"
              checked={selectedOption === "option2"}
              onChange={() => setSelectedOption("option2")}
              className="form-radio text-primary"
            />
          </div>

          {/* Option 3 */}
          <div
            className={`flex items-center justify-between p-4 border rounded-lg cursor-pointer ${
              selectedOption === "option3"
                ? "border-primary ring-2 ring-purple-200"
                : "border-gray-300"
            }`}
            onClick={() => setSelectedOption("option3")}
          >
            <div>
              <h4 className="font-semibold text-gray-800">Type</h4>
              <p className="text-sm text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem
                ipsum dolor sit amet
              </p>
            </div>
            <input
              type="radio"
              name="option"
              value="option3"
              checked={selectedOption === "option3"}
              onChange={() => setSelectedOption("option3")}
              className="form-radio text-primary"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccordionWithOptions;
