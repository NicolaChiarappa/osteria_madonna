import Footer from "@/components/Components/Footer";
import Navbar from "@/components/Components/Navbar";
import React, { useState } from "react";

import HStack from "@/components/Layout/HStack";
import Button from "@/components/Bricks/Button";
import VStack from "@/components/Layout/VStack";
import Heading from "@/components/Bricks/Heading";

import { menu2023 } from "@/menu2023";

const menu = () => {
  const [sezione, setSezione] = useState("antipasti");
  return (
    <>
      <Navbar />
      <VStack style='relative h-screen  items-center my-10'>
        <Heading as='h3' size='4xl'>
          Il nostro menu 2023
        </Heading>
        <ButtonGroup set={setSezione} />
        <VStack style=' h-screen w-full  items-center pt-11 space-y-11'>
          {menu2023[sezione].map((piatti) => {
            return <Portata {...piatti}></Portata>;
          })}
        </VStack>
      </VStack>
      <Footer />
    </>
  );
};

const ButtonGroup = ({ set }) => {
  const [colors, setColors] = useState([
    "black",
    "gray-500",
    "gray-500",
    "gray-500",
  ]);
  return (
    <HStack style='justify-center space-x-5  mt-10 flex-wrap'>
      <Button
        style='relative '
        onClick={() => {
          set("antipasti");
          setColors(["black", "gray-500", "gray-500", "gray-500"]);
        }}
      >
        <p className={"font-miofont font-normal text-xl text-" + colors[0]}>
          Antipasti
        </p>
      </Button>
      <Button
        style='relative'
        onClick={() => {
          set("primi");
          setColors(["gray-500", "black", "gray-500", "gray-500"]);
        }}
      >
        <p className={"font-miofont font-normal text-xl text-" + colors[1]}>
          Primi
        </p>
      </Button>
      <Button
        style='relative'
        onClick={() => {
          set("secondi");
          setColors(["gray-500", "gray-500", "black", "gray-500"]);
        }}
      >
        <p className={"font-miofont font-normal text-xl text-" + colors[2]}>
          Secondi
        </p>
      </Button>
      <Button
        style='relative'
        onClick={() => {
          set("dolci");
          setColors(["gray-500", "gray-500", "gray-500", "black"]);
        }}
      >
        <p className={"font-miofont font-normal text-xl text-" + colors[3]}>
          Dolci
        </p>
      </Button>
    </HStack>
  );
};

const Portata = ({ item, prezzo }) => {
  return (
    <HStack style='justify-between space-x-5  lg:w-1/2 max-lg:w-3/4 mx-10'>
      <p className='text-start'>{item}</p>
      <p>{prezzo}</p>
    </HStack>
  );
};

export default menu;
