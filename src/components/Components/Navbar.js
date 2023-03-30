import React from "react";
import Image from "next/image";
import HStack from "../Layout/HStack";
import VStack from "../Layout/VStack";

import { imageConfigDefault } from "next/dist/shared/lib/image-config";
import Button from "./Button";

const Navbar = () => {
  return (
    <HStack style='items-center bg-success justify-between sti'>
      <div className='p-3'>
        <Image
          priority
          src='/logo.svg'
          alt=''
          width={150}
          height={150}
          className='fill-blue-500'
        />
      </div>

      <div className=' flex flex-row items-center max-sm:hidden'>
        <h1 className='text-4xl font-sans '>Ciao</h1>
      </div>
      <HStack className='items-center sm:hidden mr-5 justify-start'>
        <Button
          onClick={() => {
            alert("mobile");
          }}
        >
          alert
        </Button>
      </HStack>
    </HStack>
  );
};

export default Navbar;
