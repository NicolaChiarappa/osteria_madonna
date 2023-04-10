import React from "react";
import VStack from "../Layout/VStack";
import HStack from "../Layout/HStack";
import Link from "next/link";
import Image from "next/image";

import Button from "../Bricks/Button";

const Motto = () => {
  return (
    <VStack
      style=' items-center relative w-full   overflow-hidden  rtl:ml-0  mt-24  bg-gradient-to-t from-primary to-transparent pt-28 md:pt-64 justify-center h-screen'
      id='scopri'
    >
      <HStack style=' relative items-center  '>
        <div className='  lg:w-3/4  h-fit  w-full ml-16 max-lg:ml-6 z-20 '>
          <p className='lg:text-9xl max-lg:text-6xl font-miofont  font-bold  text-white text-center leading-10'>
            Spirito tradizionale ma attento al futuro
          </p>
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
        <Button style=' relative py-8 px-10 bg-secondary text-center font-miofont font-bold text-2xl my-7  '>
          Leggi la nostra storia
        </Button>
      </Link>
    </VStack>
  );
};

export default Motto;
