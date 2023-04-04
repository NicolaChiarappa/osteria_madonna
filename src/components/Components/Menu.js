import React, { useState } from "react";
import VStack from "../Layout/VStack";
import Button from "../Bricks/Button/Button";
import { IoClose } from "react-icons/io5";
import Link from "next/link";

const Menu = ({ show, setShow }) => {
  return (
    <VStack
      style={
        "fixed right-0 top-0 h-screen w-56 z-40 bg-success overflow-hidden   shadow-success shadow-2xl " +
        show
      }
    >
      <Button
        onClick={() => {
          setShow("invisible");
        }}
        icon={<IoClose size='50px' color='red'></IoClose>}
      ></Button>
      <VStack style='items-center space-y-16 mt-9 '>
        <Link href='/menu'>
          <p className='text-4xl text-white font-semibold underline'>Menu</p>
        </Link>
        <Link href='/about'>
          <p className='text-4xl text-white font-semibold'>Chi siamo</p>
        </Link>
        <Link href='/cantina'>
          <p className='text-4xl text-white font-semibold'>La cantina</p>
        </Link>
        <Link href='/prenota'>
          <p className='text-4xl text-white font-semibold'>Prenota</p>
        </Link>
      </VStack>
    </VStack>
  );
};

export default Menu;
