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
        <meta name='description' content='osteria tipica nel centro di Pavia' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta
          name='google-site-verification'
          content='ZyTT__6a3J-9l3PPgi7T_ww46te48AFLDgiFM26gPjA'
        />
        <link rel='icon' href='/osteria.ico' />
      </Head>

      <Navbar></Navbar>
      <Hero></Hero>
      <Motto></Motto>
      <Menu_Hero></Menu_Hero>
      <Footer></Footer>
    </>
  );
}
