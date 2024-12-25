import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AllServicePage from "./pages/AllServicePage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import LoginPage from "./pages/LoginPage";
import VerificationPage from "./pages/VerificationPage";
import SignInPage from "./pages/SignInPage";
import AccountPage from "./pages/AccountPage";
import OrderHistoryPage from "./pages/OrderHistoryPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/allservices" element={<AllServicePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/verify-otp" element={<VerificationPage/>} />
        <Route path="/sign-in" element={<SignInPage/>} />
        <Route path="/my-acc" element={<AccountPage/>} />
        <Route path="/order-his" element={<OrderHistoryPage/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
