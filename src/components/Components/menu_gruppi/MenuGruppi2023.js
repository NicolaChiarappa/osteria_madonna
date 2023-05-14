import React from "react";
import HStack from "@/components/Layout/HStack";
import Button from "@/components/Bricks/Button";
import VStack from "@/components/Layout/VStack";
import Heading from "@/components/Bricks/Heading";
import { useState } from "react";
import { menu_gruppi_obj } from "@/menu_gruppi_obj";

//most of these components are described in Menu2023.js

const Menu2023 = () => {
  const [numeroMenu, setNumeroMenu] = useState("0");

  return (
    <VStack style='relative min-h-fit  items-center my-10 space-y-11'>
      <Heading as='h3' size='4xl'>
        Proposte ai gruppi
      </Heading>
      <ButtonGroup set={setNumeroMenu}> </ButtonGroup>
      {/*in this vstack we are fetching datas from a json, we are taking for every single menu all sections. every section have a title and a list of items*/}
      <VStack>
        {menu_gruppi_obj[numeroMenu]["portate"].map((sezione) => {
          return (
            <Sezione
              key={sezione["title"]}
              title={sezione["title"]}
              items={sezione["items"]}
            ></Sezione>
          );
        })}
        <VStack style='mt-7 items-center'>
          <p className='font-miofont font-bold text-center '>Prezzo</p>
          <p className='font-miofont font-medium text-center '>
            {" "}
            € {menu_gruppi_obj[numeroMenu]["prezzo"]}
          </p>
        </VStack>
      </VStack>
    </VStack>
  );
};

const ButtonGroup = ({ set }) => {
  const [btnactive, setBtnactive] = useState("0");

  return (
    <HStack style='justify-center space-x-5  mt-10 flex-wrap'>
      <MenuButton
        sezione='0'
        set={set}
        setBtn={setBtnactive}
        active={btnactive}
      />
      <MenuButton
        sezione='1'
        set={set}
        setBtn={setBtnactive}
        active={btnactive}
      />
      <MenuButton
        sezione='2'
        set={set}
        setBtn={setBtnactive}
        active={btnactive}
      />
      <MenuButton
        sezione='3'
        set={set}
        setBtn={setBtnactive}
        active={btnactive}
      />
    </HStack>
  );
};

const MenuButton = ({ sezione, set, setBtn, active }) => {
  const color =
    active == sezione.toLowerCase() ? "text-black" : "text-gray-500";
  const stile = "relative font-miofont font-normal text-xl " + color;

  return (
    <Button
      style={stile}
      onClick={() => {
        set(sezione.toLowerCase());
        setBtn(sezione.toLowerCase());
      }}
    >
      {parseInt(sezione) + 1}
    </Button>
  );
};

{
  /*this is a single section of a menu with title and a list of items. we are using items in a vstack to show vertically all items */
}
const Sezione = ({ title, items }) => {
  items.map((item) => console.log(item));
  return (
    <VStack style='my-4'>
      <Heading as='h2'>{title}</Heading>
      <VStack style='h-fit space-y-6 mt-2 px-4'>
        {items.map((item) => {
          return (
            <p className='font-miofont font-medium text-center ' key={item}>
              {item}
            </p>
          );
        })}
      </VStack>
    </VStack>
  );
};

export default Menu2023;
