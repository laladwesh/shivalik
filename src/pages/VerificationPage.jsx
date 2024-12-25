import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const VerificationPage = () => {
  const navigate = useNavigate();
  const location = useLocation(); // Access state passed from LoginPage
  const { email } = location.state || {}; // Destructure email or set undefined if state is missing\
  console.log(email);
  const [formData, setFormData] = React.useState({
    otp: "",
    email: email || "", // Set email in formData
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const goBack = () => {
    navigate(-1); // This navigates to the previous page in the history stack
  };
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent page reload
    try {
      const response = await fetch("http://localhost:4000/api/v1/signup", {
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
      if (data.success) {
        navigate("/");
        //console.log("OTP sent successfully:", data);
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
    }
  };
  return (
    <div className="px-4 md:px-16 lg:px-28 bg-gray-100 font-montserrat">
      <div className="w-full h-[100vh] p-14 bg-white rounded-[32px] shadow-md flex gap-14">
        {/* Form Section */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-14 w-1/2">
          <div className="flex flex-col gap-6">
            <button className="mb-5" onClick={goBack}>
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="arrow_back">
                  <path
                    id="icon"
                    d="M10.434 17.3333L17.9007 24.8L16.0007 26.6666L5.33398 16L16.0007 5.33331L17.9007 7.19998L10.434 14.6666H26.6673V17.3333H10.434Z"
                    fill="#3D3D3D"
                  />
                </g>
              </svg>
            </button>
            <h1 className="text-[#1a0066] text-4xl font-bold leading-10">
              Verification
            </h1>
            <div className="flex flex-wrap gap-6">
              {/* Company Name */}
              <div className="flex-1 flex flex-col gap-2">
                <label className="text-[#5b5b5b] text-base font-semibold">
                  Enter one-time password sent to your phone number
                </label>
                <input
                  type="text"
                  name="otp"
                  value={formData.otp}
                  onChange={handleChange}
                  placeholder="e.g. 123456"
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
          </div>
          <p className="text-[#5b5b5b] text-base font-semibold font-montserrat">
            Incorrect number?{" "}
            <a href="/login" className="cursor-pointer text-heading">
              Go back
            </a>
          </p>
        </form>

        {/* Illustration Section */}
        <div className="flex-1 rounded-3xl flex items-center justify-center">
          <div className="relative w-full h-[85vh]">
            {/* Placeholder for illustration */}
            <div className="absolute w-full h-full bg-hero-pattern bg-cover rounded-3xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerificationPage;
