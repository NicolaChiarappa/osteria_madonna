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
      <HStack style='sticky top-0 w-full  text-white z-30 justify-between  h-fit bg-secondary items-center py-3 '>
        <Link href='/' className='ml-7'>
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
      </HStack>
      <Menu show={show} setShow={setShow} blur={blur}></Menu>
    </>
  );
};

const NavItems = () => {
  return (
    <HStack style='items-center flex max-lg:hidden space-x-10 mr-10 '>
      <Link href='/menu'>
        <Heading as='h1' size='3xl'>
          Menu
        </Heading>
      </Link>
      <Link href='/menu_gruppi'>
        <Heading as='h1' size='3xl'>
          Menu gruppi
        </Heading>
      </Link>
      <Link href='/cantina'>
        <Heading as='h1' size='3xl'>
          La cantina
        </Heading>
      </Link>
      <Link href='/about'>
        <Heading as='h1' size='3xl'>
          Chi siamo
        </Heading>
      </Link>
      <Link href='/prenota'>
        <Heading as='h1' size='3xl'>
          Prenota
        </Heading>
      </Link>
    </HStack>
  );
};

export default Navbar;
