import React, { useState } from "react";
import VStack from "../Layout/VStack";
import Button from "../Bricks/Button";
import { IoClose } from "react-icons/io5";
import Link from "next/link";

const Menu = ({ show, setShow }) => {
  return (
    <VStack
      style={
        "fixed right-0 top-0 h-screen w-3/4 z-40 bg-secondary overflow-hidden   shadow-black   shadow-2xl " +
        show
      }
    >
      <Button
        onClick={() => {
          setShow("invisible");
        }}
        icon={<IoClose size='50px' color='red'></IoClose>}
      ></Button>
      <VStack style='items-start space-y-10 mt-9 ml-4'>
        <Link href='/menu'>
          <p className='text-4xl text-primary font-semibold  '>Menu</p>
        </Link>
        <Link href='/menu_gruppi'>
          <p className='text-4xl text-primary font-semibold '>Menu gruppi</p>
        </Link>
        <Link href='/about'>
          <p className='text-4xl text-primary font-semibold'>Chi siamo</p>
        </Link>
        <Link href='/cantina'>
          <p className='text-4xl text-primary font-semibold'>La cantina</p>
        </Link>
        <Link href='/prenota'>
          <p className='text-4xl text-primary font-semibold'>Prenota</p>
        </Link>
      </VStack>
    </VStack>
  );
};

export default Menu;
