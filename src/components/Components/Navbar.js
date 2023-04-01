import React from "react";
import Image from "next/image";
import HStack from "../Layout/HStack";
import VStack from "../Layout/VStack";

import { imageConfigDefault } from "next/dist/shared/lib/image-config";
import Button from "../Bricks/Button/Button";
import Link from "next/link";

const Navbar = () => {
  return (
    <HStack style='fixed w-full  text-white z-20 p-4 justify-between px-10'>
      <div>
        <Image alt='' src='/logo.svg' width={180} height={180}></Image>
      </div>
      <HStack style='items-center flex max-sm:hidden'>
        <Link href='/about'>
          <h1>About</h1>
        </Link>
      </HStack>
      <HStack style='flex sm:hidden'>
        <Button
          onClick={() => {
            alert("button mobile");
          }}
        ></Button>
      </HStack>
    </HStack>
  );
};

export default Navbar;
