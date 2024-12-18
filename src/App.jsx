import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/assets/Navbar/Navbar.jsx";
import MyAccount from "./components/My account/Myaccount.jsx";
import HomePage from "./components/assets/Home/HeroSection.jsx";
import Signup from "./components/assets/Signup/Signup.jsx";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Shoppage from "./components/assets/Shop/Shoppage.jsx";
import Footer from "./components/assets/Footer/Footer.jsx";

const App = () => {
  return (
    <Router>
      <Navbar /> {/* Navbar stays constant */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<Shoppage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/my-account" element={<MyAccount />} />
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
