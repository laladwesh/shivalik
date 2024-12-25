const Navbar = () => {
  return (
    <div className="bg-gray-100 flex flex-col items-center px-4 sm:px-8 md:px-16 lg:px-28 py-4 md:py-8">
      {/* Navbar */}
      <div
        className={`min-h-[10vh] w-full bg-white rounded-lg shadow-md flex flex-col sm:flex-row justify-between items-center px-4 sm:px-6 py-3 sm:py-4`}
      >
        {/* Logo */}
        <div className="h-6 w-16 sm:w-20 bg-gray-300 rounded mb-4 sm:mb-0"></div>

        {/* Links */}
        <div className="font-montserrat flex flex-col sm:flex-row sm:space-x-6 text-gray-600 text-center sm:text-left space-y-3 sm:space-y-0">
          <a
            href="/contact"
            className="font-montserrat hover:text-primary transition-all"
          >
            Contact us
          </a>
          <a
            href="/about"
            className="hover:text-primary transition-all"
          >
            About us
          </a>
          <a
            href="/login"
            className="hover:text-primary transition-all"
          >
            Login
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
