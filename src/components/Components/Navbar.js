import React, { useState } from "react";
import Image from "next/image";
import HStack from "../Layout/HStack";
import VStack from "../Layout/VStack";
import { IoMenu } from "react-icons/io5";

import { imageConfigDefault } from "next/dist/shared/lib/image-config";
import Button from "../Bricks/Button/Button";
import Link from "next/link";
import Menu from "./Menu";

const Navbar = () => {
  const [show, setShow] = useState("invisible");

  return (
    <>
      <HStack style='sticky top-0 w-full  text-white z-30 justify-between px-10 h-fit bg-secondary'>
        <div>
          <Image alt='' src='/logo.svg' width={100} height={100}></Image>
        </div>
        <HStack style='items-center flex max-sm:hidden'>
          <Link href='/about'>
            <h1>About</h1>
          </Link>
        </HStack>
        <HStack style='flex sm:hidden  items-center'>
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

export default Navbar;
