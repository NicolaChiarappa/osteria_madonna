import React from "react";
import Button from "@/components/Bricks/Button";
import VStack from "@/components/Layout/VStack";
import HStack from "@/components/Layout/HStack";
import Image from "next/image";
import Link from "next/link";

const Menu_Hero = () => {
  return (
    <VStack
      style=' items-center relative w-full   overflow-hidden  rtl:ml-0    bg-gradient-to-b from-primary to-black pt-0 md:pt-64 justify-center h-screen'
      id='scopri'
    >
      <HStack style=' relative items-center justify-end '>
        <div className='  lg:w-3/4  h-fit  w-full ml-16 max-lg:ml-6 z-20 '>
          <h2 className='lg:text-8xl max-lg:text-5xl font-miofont  font-bold  text-white text-center leading-10'>
            Immergiti nella nostra cucina
          </h2>
        </div>
        <div className=' absolute top-15  -left-60  '>
          <Image
            alt='foto decorativa piatto-preparato da noi'
            className='myimg  '
            src='/menuhero.webp'
            width={950}
            height={1000}
          ></Image>
        </div>
      </HStack>

      <Link href='/prenota'>
        <Button style=' relative py-6 px-6 bg-secondary text-center font-miofont font-bold text-2xl my-7  '>
          Prenota
        </Button>
      </Link>
    </VStack>
  );
};

export default Menu_Hero;
