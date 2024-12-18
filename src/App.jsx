import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/assets/Navbar/Navbar.jsx";
import HomePage from "./components/assets/Home/HomePage.jsx";
import Signup from "./components/assets/Signup/Signup.jsx";
import "@fortawesome/fontawesome-free/css/all.min.css";
// import Shoppage from "./components/assets/Shop/Shoppage.jsx";
import Footer from "./components/assets/Footer/Footer.jsx";
import About from "./components/assets/About/About.jsx";
import FullStory from "./components/assets/About/Fullstory.jsx";

const App = () => {
  return (
    <Router>
      <Navbar /> {/* Navbar stays constant */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About/>}/>
        <Route path="/fullstory" element={<FullStory />} />
        {/* <Route path="/shop" element={<Shoppage />} /> */}
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
