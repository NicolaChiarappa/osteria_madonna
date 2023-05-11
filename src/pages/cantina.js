import React from "react";
import Head from "next/head";
import Navbar from "@/components/Components/Navbar";
import Footer from "@/components/Components/Footer";
import WinesComponent from "@/components/Components/cantina/WinesComponent";
const cantina = () => {
  return (
    <>
      <Head>
        <title>Osteria della Madonna-Cantina</title>
        <meta
          name='description'
          content="la selezione di vini dell' osteria della madonna"
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar />
      <WinesComponent />
      <Footer />
    </>
  );
};

export default cantina;
