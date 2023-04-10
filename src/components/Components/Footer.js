import React from "react";
import VStack from "../Layout/VStack";
import HStack from "../Layout/HStack";
import Image from "next/image";

const Footer = () => {
  return (
    <HStack style='justify-around bg-black w-full py-5'>
      <VStack style='space-y-3'>
        <Image src='./logo2.svg' width={100} height={100} alt=''></Image>
        <Image
          src='./titolo_madonna.svg'
          width={100}
          height={100}
          alt=''
        ></Image>
      </VStack>

      <VStack style='justify-center space-y-3'>
        <p className='text-white font-miofont font-light'>
          Pavia, Via dei liguri,28
        </p>
        <p className='text-white font-miofont font-light'>0382 302833</p>
      </VStack>
    </HStack>
  );
};

export default Footer;
