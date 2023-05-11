import React, { useState } from "react";
import VStack from "../Layout/VStack";
import Button from "../Bricks/Button";
import { IoClose } from "react-icons/io5";
import Link from "next/link";

const Menu = ({ show, setShow, blur }) => {
  const stile = show + " " + blur;
  console.log(stile);
  return (
    <VStack style={"fixed right-0 top-25 w-full h-[7000px]  z-[30]  " + stile}>
      <VStack
        style={
          "absolute right-0 top-25 h-[7000px] w-3/4 z-[50]  bg-secondary overflow-hidden     "
        }
      >
        <VStack style='items-start space-y-10 mt-9 ml-4'>
          <Link href='/menu'>
            <p className='text-4xl text-black font-semibold  '>Menu</p>
          </Link>
          <Link href='/menu_gruppi'>
            <p className='text-4xl text-black font-semibold '>Menu gruppi</p>
          </Link>
          <Link href='/cantina'>
            <p className='text-4xl text-black font-semibold'>La cantina</p>
          </Link>
          <Link href='/about'>
            <p className='text-4xl text-black font-semibold'>Chi siamo</p>
          </Link>
          <Link href='/prenota'>
            <p className='text-4xl text-black font-semibold'>Prenota</p>
          </Link>
        </VStack>
      </VStack>
    </VStack>
  );
};

export default Menu;
