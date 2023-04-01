import React from "react";
import Image from "next/image";
import Button from "../Bricks/Button/Button";
import VStack from "../Layout/VStack";
import HStack from "../Layout/HStack";

const Hero = () => {
  return (
    <div className=' bg-cover custom-img  h-screen bg-center  bg-fixed  '>
      <div className=' h-screen bg-secondary  opacity-40' />
      <VStack></VStack>
    </div>
  );
};

export default Hero;
