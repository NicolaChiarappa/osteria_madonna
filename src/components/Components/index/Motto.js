import React from "react";
import Button from "@/components/Bricks/Button";
import VStack from "@/components/Layout/VStack";
import HStack from "@/components/Layout/HStack";
import Link from "next/link";
import Image from "next/image";

const Motto = () => {
  return (
    <VStack
      style=' items-center relative w-full   overflow-hidden  rtl:ml-0  mt-24  bg-gradient-to-t from-primary to-transparent pt-28 md:pt-64 justify-center h-screen'
      id='scopri'
    >
      <HStack style=' relative items-center  '>
        <div className='  lg:w-3/4  h-fit  w-full ml-16 max-lg:ml-6 z-20 '>
          <h2 className='lg:text-8xl max-lg:text-5xl font-miofont  font-bold  text-white text-center leading-10'>
            Spirito tradizionale ma attento al futuro
          </h2>
        </div>
        <div className=' absolute top-15  -right-60  '>
          <Image
            alt=''
            className='myimg  '
            src='/motto.png'
            width={1000}
            height={1000}
          ></Image>
        </div>
      </HStack>

      <Link href='/about'>
        <Button style=' relative py-6 px-6 bg-secondary text-center font-miofont font-bold text-2xl my-7  '>
          Leggi la nostra storia
        </Button>
      </Link>
    </VStack>
  );
};

export default Motto;
