import React from "react";
import Image from "next/image";
import Button from "@/components/Bricks/Button";
import VStack from "@/components/Layout/VStack";
import HStack from "@/components/Layout/HStack";
import Link from "next/link";

//this is my hero page

const Hero = () => {
  return (
    <div className='relative hero-img min-h-fit'>
      {/*overlay */}
      <div className='relative  bg-gradient-to-b from-primary to-transparent   h-screen z-0 ' />
      {/*this is vertical stack where setted up logo sign and a button like call
      to action */}
      {
        <VStack style='absolute top-0 right-0 items-center justify-start min-h-screen  pt-6 z-20 w-full space-y-12 '>
          <Image
            alt=''
            src='/logo2.svg'
            width={100}
            height={100}
            className='w-64  px-0 '
          ></Image>
          <Image
            className='md:hidden w-full px-[5%]'
            alt=''
            src='/titolo_madonna.svg'
            width={100}
            height={100}
          ></Image>
          <Image
            className='max-md:hidden w-full px-[20%]'
            alt=''
            src='/titolo_madonna.svg'
            height={100}
            width={1}
          ></Image>
          <Link href='#scopri' scroll={false}>
            <Button style='bg-secondary w-36 h-16 active:bg-secondary px-6 py-4'>
              <p className='font-miofont font-bold text-2xl'>Scopri</p>
            </Button>
          </Link>
        </VStack>
      }
    </div>
  );
};

export default Hero;
