import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AllServicePage from "./pages/AllServicePage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/allservices" element={<AllServicePage />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
