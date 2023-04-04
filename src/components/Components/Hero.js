import React from "react";
import Image from "next/image";
import Button from "../Bricks/Button/Button";
import VStack from "../Layout/VStack";
import HStack from "../Layout/HStack";

//this is my hero page

const Hero = () => {
  return (
    //ciao
    <div className='custom-img max-h-screen w-screen'>
      {/* */}
      <div className='relative  bg-secondary opacity-20  h-screen z-0' />
      {/*this is vertical stack where setted up logo sign and a button like call
      to action */}
      <VStack style='absolute top-56 right-0 items-center justify-start min-h-screen z-20 w-screen space-y-20'>
        <Image
          className='md:hidden w-screen px-[5%]'
          alt=''
          src='/titolo_madonna.svg'
          width={200}
          height={100}
        ></Image>
        <Image
          className='max-md:hidden w-screen px-[20%]'
          alt=''
          src='/titolo_madonna.svg'
          height={100}
          width={1}
        ></Image>
        <Button style='bg-secondary w-36 h-16 active:bg-secondary'>
          <p className='font-miofont font-semibold text-2xl'>Scopri</p>
        </Button>
      </VStack>
    </div>
  );
};

export default Hero;
