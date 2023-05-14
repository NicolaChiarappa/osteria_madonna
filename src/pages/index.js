import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";

import Navbar from "../components/Components/Navbar";
import Hero from "@/components/Components/index/Hero";
import Motto from "@/components/Components/index/Motto";
import Menu_Hero from "@/components/Components/index/Menu_Hero";
import Footer from "@/components/Components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Osteria della Madonna-Pavia</title>
        <meta
          name='description'
          content="Viaggia tra i sapori della terra Pavese e dell'oltrepò. Qui all'Osteria della Madonna in pieno centro a Pavia troverai degli ottimi accompagnatori. SPIRITO TRADIZIONALE MA ATTENTO AL FUTURO"
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta
          name='google-site-verification'
          content='7NX12AF8JTDoHXD23_CE8ENhGa9GnNmuBW8TYviMxN8'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Navbar></Navbar>
      <Hero></Hero>
      <Motto></Motto>
      <Menu_Hero></Menu_Hero>
      <Footer></Footer>
    </>
  );
}
