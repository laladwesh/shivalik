import React, { useState } from "react";
//import {  useNavigate } from "react-router-dom";

const LoginPage = () => {
 // const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    company: "",
    state: "",
    pincode: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent page reload
    try {
      const response = await fetch("http://localhost:4000/api/v1/send-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData), // Send form data to backend
      });

      // Check if the response is JSON
      const contentType = response.headers.get("Content-Type");
      let data;
      if (contentType && contentType.includes("application/json")) {
        data = await response.json(); // Parse JSON response
      } else {
        data = await response.text(); // Parse plain text response
      }
      if(data.success) {
        console.log("OTP sent successfully:", data);
      }
      
    } catch (error) {
      console.error("Error submitting the form:", error);
    }
  };

  return (
    <div className="px-4 md:px-16 lg:px-28 bg-gray-100 font-montserrat">
      <div className="w-full h-[881px] p-14 bg-white rounded-[32px] shadow-md flex gap-14">
        {/* Form Section */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-14 w-1/2">
          <div className="flex flex-col gap-6">
            <h1 className="text-[#1a0066] text-4xl font-bold leading-10">
              Create account
            </h1>
            <div className="flex flex-wrap gap-6">
              {/* First Name */}
              <div className="flex-1 flex flex-col gap-2">
                <label className="text-[#5b5b5b] text-base font-semibold">
                  Enter your first name *
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="e.g. Raj"
                  className="h-12 px-4 bg-[#f4f4f4] rounded-lg text-[#5b5b5b]"
                  required
                />
              </div>
              {/* Last Name */}
              <div className="flex-1 flex flex-col gap-2">
                <label className="text-[#5b5b5b] text-base font-semibold">
                  Enter your last name *
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="e.g. Sharma"
                  className="h-12 px-4 bg-[#f4f4f4] rounded-lg text-[#5b5b5b]"
                  required
                />
              </div>
            </div>
            <div className="flex flex-wrap gap-6">
              {/* Phone Number */}
              <div className="flex-1 flex flex-col gap-2">
                <label className="text-[#5b5b5b] text-base font-semibold">
                  Phone number 
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="e.g. 987654321"
                  className="h-12 px-4 bg-[#f4f4f4] rounded-lg text-[#5b5b5b]"
                  required
                />
              </div>
              {/* Email */}
              <div className="flex-1 flex flex-col gap-2">
                <label className="text-[#5b5b5b] text-base font-semibold">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="e.g. Raj1234@gmail.com"
                  className="h-12 px-4 bg-[#f4f4f4] rounded-lg text-[#5b5b5b]"
                  required
                />
              </div>
            </div>
            <div className="flex flex-wrap gap-6">
              {/* Company Name */}
              <div className="flex-1 flex flex-col gap-2">
                <label className="text-[#5b5b5b] text-base font-semibold">
                  Enter your company’s name
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="e.g. Raj Industries Pvt. Ltd."
                  className="h-12 px-4 bg-[#f4f4f4] rounded-lg text-[#5b5b5b]"
                />
              </div>
            </div>
            <div className="flex flex-wrap gap-6">
              {/* State */}
              <div className="flex-1 flex flex-col gap-2">
                <label className="text-[#5b5b5b] text-base font-semibold">
                  Enter your state
                </label>
                <input
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  placeholder="e.g. Maharashtra"
                  className="h-12 px-4 bg-[#f4f4f4] rounded-lg text-[#5b5b5b]"
                />
              </div>
              {/* Pincode */}
              <div className="flex-1 flex flex-col gap-2">
                <label className="text-[#5b5b5b] text-base font-semibold">
                  Enter your pincode
                </label>
                <input
                  type="number"
                  name="pincode"
                  value={formData.pincode}
                  onChange={handleChange}
                  placeholder="6-Digit code"
                  className="h-12 px-4 bg-[#f4f4f4] rounded-lg text-[#5b5b5b]"
                />
              </div>
            </div>
          </div>
          {/* Buttons */}
          <div className="flex flex-col gap-6">
            <button
              type="submit"
              className="w-full px-24 py-4 bg-[#5230b2] text-white text-2xl font-bold rounded-2xl"
            >
              Create account
            </button>
            <button
              type="button"
              className="w-full px-24 py-4 border-2 border-[#5230b2] text-[#5230b2] text-2xl font-semibold rounded-2xl"
            >
              Cancel
            </button>
          </div>
        </form>
        {/* Illustration Section */}
        <div className="flex-1 rounded-3xl flex items-center justify-center">
          <div className="relative w-full h-[95vh]">
            {/* Placeholder for illustration */}
            <div className="absolute w-full h-full bg-hero-pattern bg-cover rounded-3xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
