import React from "react";
import HStack from "@/components/Layout/HStack";
import Button from "@/components/Bricks/Button";
import VStack from "@/components/Layout/VStack";
import Heading from "@/components/Bricks/Heading";
import { useState } from "react";
import { menu2023_obj } from "@/menu2023_obj";

const Menu2023 = () => {
  const [sezione, setSezione] = useState("antipasti");
  return (
    <VStack style='relative min-h-fit  items-center my-10 space-y-11'>
      <Heading as='h3' size='4xl'>
        Il nostro menu 2023
      </Heading>
      {/*here user can choose items section of menu, set is controlling state of button group */}
      <ButtonGroup set={setSezione}> </ButtonGroup>
      {/*this vstack is fetching and showing datas from json and section is controlled by buttongropu of above  */}
      <VStack style='min-w-full  items-center space-y-10'>
        {menu2023_obj[sezione].map((piatti) => {
          return <Portata key={piatti.id} {...piatti}></Portata>;
        })}
      </VStack>
    </VStack>
  );
};

const ButtonGroup = ({ set }) => {
  const [btnactive, setBtnactive] = useState("antipasti");

  return (
    <HStack style='justify-center space-x-5  mt-10 flex-wrap'>
      <MenuButton
        sezione='Antipasti'
        set={set}
        setBtn={setBtnactive}
        active={btnactive}
      />
      <MenuButton
        sezione='Primi'
        set={set}
        setBtn={setBtnactive}
        active={btnactive}
      />
      <MenuButton
        sezione='Secondi'
        set={set}
        setBtn={setBtnactive}
        active={btnactive}
      />
      <MenuButton
        sezione='Dolci'
        set={set}
        setBtn={setBtnactive}
        active={btnactive}
      />
    </HStack>
  );
};

{
  /*every button in button group have a state controlled by button group, if its state is active color change from gray to black */
}
const MenuButton = ({ sezione, set, setBtn, active }) => {
  const color =
    active == sezione.toLowerCase() ? "text-black" : "text-gray-500";
  const stile = "relative font-miofont font-normal text-xl " + color;

  return (
    <Button
      style={stile}
      onClick={() => {
        set(sezione.toLowerCase());
        setBtn(sezione.toLowerCase());
      }}
    >
      {sezione}
    </Button>
  );
};

{
  /*portata is components of every single item with its name and price*/
}
const Portata = ({ item, prezzo }) => {
  return (
    <HStack style='justify-between space-x-5  lg:w-1/2 max-lg:w-3/4 mx-10'>
      <p className='text-start'>{item}</p>
      <p>{prezzo}</p>
    </HStack>
  );
};

export default Menu2023;
