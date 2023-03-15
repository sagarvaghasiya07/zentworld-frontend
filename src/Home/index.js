import React from "react";
import NavBar from "../Components/NavBar/NavBar";
import SectionOne from "./SectionOne/SectionOne";
import SectionFour from "./SectionFour";
import Footer from "../Components/Footer/Footer";
import SectionThree from "./SectionThree/SectionThree";

const Home = () => {
  return (
    <>
      <NavBar />
      <SectionOne />
      <SectionThree />
      <SectionFour />
      <Footer />
    </>
  );
};

export default Home;
