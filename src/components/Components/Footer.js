import React from "react";
import VStack from "../Layout/VStack";
import HStack from "../Layout/HStack";
import Image from "next/image";
import Link from "next/link";
import Button from "../Bricks/Button";
import { IoCall, IoLogoInstagram } from "react-icons/io5";

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

      <VStack style='justify-center space-y-3 items-end'>
        <p className='text-white font-miofont font-light'>
          Pavia, Via dei liguri,28
        </p>
        <HStack style='space-x-2 items-center'>
          <Button icon={<IoCall color='white' size={20} />}></Button>
          <Link href='tel:+390382302833'>
            <p className='text-white font-miofont font-light'>0382 302833</p>
          </Link>
        </HStack>
        <HStack style='space-x-3'>
          <Button
            icon={
              <IoLogoInstagram
                color='white'
                size='26'
                onClick={() => {
                  open(
                    "https://instagram.com/osteriadellamadonnapavia?igshid=YmMyMTA2M2Y="
                  );
                }}
              ></IoLogoInstagram>
            }
          ></Button>
          <p className='text-white text-sm font-miofont font-thin'>
            osteriadellamadonnapavia
          </p>
        </HStack>
      </VStack>
    </HStack>
  );
};

export default Footer;
