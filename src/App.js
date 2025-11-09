import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import Navbar from "./Components/NavBar";
import Footer from "./Components/Footer";

const About = () => <div>About</div>;

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* <Route path="/about" element={<About />} /> */}
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
};

export default App;
