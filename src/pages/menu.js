import Head from "next/head";
import Footer from "@/components/Components/Footer";
import Navbar from "@/components/Components/Navbar";
import Menu2023 from "@/components/Components/menu/Menu2023";

export default function MenuPage() {
  return (
    <>
      <Head>
        <title>Osteria della Madonna-Menu-Gruppi</title>
        <meta
          name='description'
          content="il menu 2023 dell'osteria della madonna"
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar></Navbar>
      <Menu2023></Menu2023>
      <Footer></Footer>
    </>
  );
}
