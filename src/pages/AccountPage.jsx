import React from "react";

const AccountPage = () => {
  const [formData, setFormData] = React.useState({});
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log("Form Submitted: ", formData);
  };

  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-28 bg-gray-100 font-montserrat min-h-screen">
      <div className="w-full p-6 md:p-10 lg:p-14 bg-white rounded-[32px] shadow-md flex flex-col gap-14">
        <form onSubmit={handleSubmit} className="flex flex-col gap-10 w-full">
          <div className="flex flex-col gap-6">
            <h1 className="text-[#1a0066] text-3xl md:text-4xl font-bold leading-10">
              My Account
            </h1>
            <hr className="border-t-2 border-primary my-4" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* First Name */}
              <div className="flex flex-col gap-2">
                <label className="text-[#5b5b5b] text-sm md:text-base font-semibold">
                  First name
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="e.g. Raj"
                  className="h-12 px-4 bg-[#f4f4f4] rounded-lg text-[#5b5b5b] text-sm md:text-base"
                  required
                />
              </div>
              {/* Last Name */}
              <div className="flex flex-col gap-2">
                <label className="text-[#5b5b5b] text-sm md:text-base font-semibold">
                  Last name
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="e.g. Sharma"
                  className="h-12 px-4 bg-[#f4f4f4] rounded-lg text-[#5b5b5b] text-sm md:text-base"
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Phone Number */}
              <div className="flex flex-col gap-2">
                <label className="text-[#5b5b5b] text-sm md:text-base font-semibold">
                  Phone number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="e.g. 987654321"
                  className="h-12 px-4 bg-[#f4f4f4] rounded-lg text-[#5b5b5b] text-sm md:text-base"
                  required
                />
              </div>
              {/* Email */}
              <div className="flex flex-col gap-2">
                <label className="text-[#5b5b5b] text-sm md:text-base font-semibold">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="e.g. Raj1234@gmail.com"
                  className="h-12 px-4 bg-[#f4f4f4] rounded-lg text-[#5b5b5b] text-sm md:text-base"
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
              {/* Company Name */}
              <div className="flex flex-col gap-2 col-span-full">
                <label className="text-[#5b5b5b] text-sm md:text-base font-semibold">
                  Company’s name
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="e.g. Raj Industries Pvt. Ltd."
                  className="h-12 px-4 bg-[#f4f4f4] rounded-lg text-[#5b5b5b] text-sm md:text-base"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* State */}
              <div className="flex flex-col gap-2">
                <label className="text-[#5b5b5b] text-sm md:text-base font-semibold">
                  State
                </label>
                <input
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  placeholder="e.g. Maharashtra"
                  className="h-12 px-4 bg-[#f4f4f4] rounded-lg text-[#5b5b5b] text-sm md:text-base"
                />
              </div>
              {/* Pincode */}
              <div className="flex flex-col gap-2">
                <label className="text-[#5b5b5b] text-sm md:text-base font-semibold">
                  Pincode
                </label>
                <input
                  type="number"
                  name="pincode"
                  value={formData.pincode}
                  onChange={handleChange}
                  placeholder="6-Digit code"
                  className="h-12 px-4 bg-[#f4f4f4] rounded-lg text-[#5b5b5b] text-sm md:text-base"
                />
              </div>
            </div>
          </div>
          {/* Buttons */}
          <div className="flex flex-col md:flex-row justify-end gap-4">
            <button
              type="submit"
              className="w-full md:w-auto px-6 py-3 bg-[#5230b2] text-white text-sm md:text-base rounded-2xl"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AccountPage;
