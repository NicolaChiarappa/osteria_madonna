import React from "react";
import Navbar from "@/components/Components/Navbar";
import Footer from "@/components/Components/Footer";
import MenuGruppi2023 from "@/components/Components/menu_gruppi/MenuGruppi2023";

const menu_gruppi = () => {
  return (
    <>
      <Navbar></Navbar>
      <MenuGruppi2023></MenuGruppi2023>
      <Footer></Footer>
    </>
  );
};

export default menu_gruppi;
