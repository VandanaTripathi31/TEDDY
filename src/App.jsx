import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/assets/Navbar/Navbar.jsx";
import MyAccount from "./components/assets/My account/Myaccount.jsx";
import HomePage from "./components/assets/Home/HeroSection.jsx";

import "@fortawesome/fontawesome-free/css/all.min.css";
// import Shoppage from "./components/assets/Shop/Shoppage.jsx";
import Footer from "./components/assets/Footer/Footer.jsx";
import About from "./components/assets/About/About.jsx";
import FullStory from "./components/assets/About/Fullstory.jsx";
import ProcessSteps from "./components/assets/ProcessSteps/ProcessSteps.jsx";
import Shop from "./components/assets/Shop/Shop.jsx";
import ViewProducts from "./components/assets/Shop/ViewProducts.jsx";
const App = () => {
  return (
    <Router>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<> <HomePage/><About/><ProcessSteps/><Shop/> </> } />
        <Route path="/shop" element={<Shop />} /> 
        <Route path="/fullstory" element={<FullStory />} />
        <Route path="/view-products" element={<ViewProducts/>}/>
        <Route path="/signup" element={<Signup />} />
        <Route path="/my-account" element={<MyAccount />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<AccountLogin />} />
      </Routes>

      <Footer/>
    </Router>
  );
};

export default App;
