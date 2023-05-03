import React from "react";
import Navbar from "@/components/Components/Navbar";
import Footer from "@/components/Components/Footer";
import WinesComponent from "@/components/Components/cantina/WinesComponent";
const cantina = () => {
  return (
    <>
      <Navbar />
      <WinesComponent />
      <Footer />
    </>
  );
};

export default cantina;
