import React from "react";
import VStack from "../Layout/VStack";
import HStack from "../Layout/HStack";
import Image from "next/image";
import Link from "next/link";
import Button from "../Bricks/Button";

const Menu_Hero = () => {
  return (
    <VStack
      style=' items-center relative w-full   overflow-hidden  rtl:ml-0    bg-gradient-to-b from-primary to-black pt-0 md:pt-64 justify-center h-screen'
      id='scopri'
    >
      <HStack style=' relative items-center justify-end '>
        <div className='  lg:w-3/4  h-fit  w-full ml-16 max-lg:ml-6 z-20 '>
          <p className='lg:text-9xl max-lg:text-6xl font-miofont  font-bold  text-white text-center leading-10'>
            Immergiti nella nostra cucina
          </p>
        </div>
        <div className=' absolute top-15  -left-60  '>
          <Image
            alt=''
            className='myimg  '
            src='/menuhero.png'
            width={950}
            height={1000}
          ></Image>
        </div>
      </HStack>

      <Link href='/about'>
        <Button style=' relative py-8 px-10 bg-secondary text-center font-miofont font-bold text-2xl my-7  '>
          Prenota
        </Button>
      </Link>
    </VStack>
  );
};

export default Menu_Hero;
