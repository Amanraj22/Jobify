import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Header from "./components/Layout/Header/Header";
import NotFound from "./components/Layout/NotFound/NotFound";
import JobListingPage from "./components/JobListing/JobListingPage";
import Footer from "./components/Layout/Footer/Footer";

const App = () => {

  return (
    <>
        <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/jobs" element={<JobListingPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
     
    </>
  );
};

export default App;
