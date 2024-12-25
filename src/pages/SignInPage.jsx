import React from 'react'

const SignInPage = () => {
    const [formData, setFormData] = React.useState({
        email: "",
      });
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      }
      const handleSubmit = async (event) => {}
  return (
    <div className="px-4 md:px-16 lg:px-28 bg-gray-100 font-montserrat">
      <div className="w-full h-[100vh] p-14 bg-white rounded-[32px] shadow-md flex gap-14">
        {/* Form Section */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-14 w-1/2">
          <div className="flex flex-col gap-6">
            <h1 className="text-[#1a0066] text-4xl font-bold leading-10">
              Login
            </h1>
            <div className="flex flex-wrap gap-6">
              {/* Company Name */}
              <div className="flex-1 flex flex-col gap-2">
                <label className="text-[#5b5b5b] text-base font-semibold">
                Enter your e-mail number to receive a one-time password
                </label>
                <input
                  type="text"
                  name="otp"
                  value={formData.otp}
                  onChange={handleChange}
                  placeholder="e.g. johndoe@mail.com"
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
              Send OTP
            </button>
          </div>
          <p className="text-[#5b5b5b] text-base font-semibold font-montserrat">
            Don't have an account ?{" "}
          </p>
          <button className="px-4 md:px-6 py-2 md:py-4 font-montserrat w-full border-2 border-primary text-primary rounded-xl md:rounded-2xl hover:bg-secondary transition">
                 Create Account
                </button>
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

  )
}

export default SignInPage