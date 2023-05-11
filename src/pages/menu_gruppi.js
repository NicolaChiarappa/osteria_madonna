import React from "react";
import Head from "next/head";
import Navbar from "@/components/Components/Navbar";
import Footer from "@/components/Components/Footer";
import MenuGruppi2023 from "@/components/Components/menu_gruppi/MenuGruppi2023";

const menu_gruppi = () => {
  return (
    <>
      <Head>
        <title>Osteria della Madonna-Menu-Gruppi</title>
        <meta
          name='description'
          content="l'osteria della madonna propone menu per gruppi di persone"
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar></Navbar>
      <MenuGruppi2023></MenuGruppi2023>
      <Footer></Footer>
    </>
  );
};

export default menu_gruppi;
