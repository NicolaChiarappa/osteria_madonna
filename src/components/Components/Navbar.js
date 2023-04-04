import React, { useState } from "react";
import Image from "next/image";
import HStack from "../Layout/HStack";
import VStack from "../Layout/VStack";

import { IoMenu } from "react-icons/io5";

import { imageConfigDefault } from "next/dist/shared/lib/image-config";
import Button from "../Bricks/Button";
import Heading from "../Bricks/Heading";
import Link from "next/link";
import Menu from "./Menu";

const Navbar = () => {
  const [show, setShow] = useState("invisible");

  return (
    <>
      <HStack style='sticky top-0 w-full  text-white z-30 justify-between  h-fit bg-secondary items-center py-3'>
        <Link href='/' className='ml-7'>
          <Image alt='' src='/logo.svg' width={100} height={100}></Image>
        </Link>
        <NavItems></NavItems>

        <HStack style='flex sm:hidden  items-center  h-fit mr-8'>
          <Button
            onClick={() => {
              setShow("visible");
            }}
            icon={<IoMenu size='50px' color='#385738'></IoMenu>}
          ></Button>
        </HStack>
      </HStack>
      <Menu show={show} setShow={setShow}></Menu>
    </>
  );
};

const NavItems = () => {
  return (
    <HStack style='items-center flex max-sm:hidden space-x-14 mr-10'>
      <Link href='/'>
        <Heading as='h1' size='2xl'>
          Home
        </Heading>
      </Link>
      <Link href='/menu'>
        <Heading as='h1' size='2xl'>
          Menu
        </Heading>
      </Link>
      <Link href='/about'>
        <Heading as='h1' size='2xl'>
          Chi siamo
        </Heading>
      </Link>
      <Link href='/cantina'>
        <Heading as='h1' size='2xl'>
          La cantina
        </Heading>
      </Link>
      <Link href='/prenota'>
        <Heading as='h1' size='2xl'>
          Prenota
        </Heading>
      </Link>
    </HStack>
  );
};

export default Navbar;
