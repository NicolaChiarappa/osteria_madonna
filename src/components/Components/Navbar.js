import React from "react";
import Image from "next/image";
import HStack from "../Layout/HStack";
import VStack from "../Layout/VStack";

import { imageConfigDefault } from "next/dist/shared/lib/image-config";

const Navbar = () => {
  return (
    <HStack style='items-center bg-black'>
      <Image
        priority
        src='/logo.svg'
        alt=''
        width={100}
        height={100}
        className=''
      />

      <div className='border-solid border-black border-2 flex flex-row items-center bg-slate-600'>
        <h1>Ciao</h1>
      </div>
    </HStack>
  );
};

export default Navbar;
