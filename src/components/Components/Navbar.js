import React, { useState } from "react";
import Image from "next/image";
import HStack from "../Layout/HStack";
import VStack from "../Layout/VStack";

import { IoMenu, IoClose } from "react-icons/io5";

import { imageConfigDefault } from "next/dist/shared/lib/image-config";
import Button from "../Bricks/Button";
import Heading from "../Bricks/Heading";
import Link from "next/link";
import Menu from "./Menu";

const Navbar = () => {
  const [show, setShow] = useState("invisible");
  const [blur, setBlur] = useState(" ");

  return (
    <>
      <nav className='flex flex-row sticky top-0 w-full  text-white z-30 justify-between  h-fit bg-secondary items-center py-3 '>
        <Link href='/' className='ml-7' title='Home'>
          <Image alt='' src='/logo.svg' width={100} height={100}></Image>
        </Link>
        <NavItems></NavItems>

        <HStack style='flex lg:hidden  items-center  h-fit mr-8 '>
          <Button
            onClick={() => {
              setShow(show == "visible" ? "invisible" : "visible");
              setBlur(blur == " " ? " backdrop-blur-[2px]" : " ");
            }}
            icon={
              show == "invisible" ? (
                <IoMenu size='50px' color='#385738'></IoMenu>
              ) : (
                <IoClose size='50px' color='#385738'></IoClose>
              )
            }
          ></Button>
        </HStack>
      </nav>
      <Menu show={show} setShow={setShow} blur={blur}></Menu>
    </>
  );
};

const NavItems = () => {
  return (
    <HStack style='items-center flex max-lg:hidden space-x-10 mr-10 '>
      <Link
        title='Il menu 2023'
        href='/menu'
        className='font-semibold font-miofont text-black  text-center  text-xl'
      >
        Menu
      </Link>
      <Link
        title='I menu per i gruppi'
        href='/menu_gruppi'
        className='font-semibold font-miofont text-black  text-center  text-xl'
      >
        Menu Gruppi
      </Link>
      <Link
        title='I nostri vini'
        href='/cantina'
        className='font-semibold font-miofont text-black  text-center  text-xl'
      >
        La cantina
      </Link>
      <Link
        title='Scopri chi siamo'
        href='/about'
        className='font-semibold font-miofont text-black  text-center  text-xl'
      >
        Chi siamo
      </Link>
      <Link
        title='Prenota un tavolo'
        href='/prenota'
        className='font-semibold font-miofont text-black  text-center  text-xl'
      >
        Prenota
      </Link>
    </HStack>
  );
};

export default Navbar;
