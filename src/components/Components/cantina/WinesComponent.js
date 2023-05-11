import React from "react";
import HStack from "@/components/Layout/HStack";
import Button from "@/components/Bricks/Button";
import VStack from "@/components/Layout/VStack";
import Heading from "@/components/Bricks/Heading";
import { IoChevronDownOutline } from "react-icons/io5";
import { useState, useRef } from "react";
import { vini } from "@/vini.js";

const WinesComponent = () => {
  const [localita, setLocalita] = useState(0);
  const [cat, setCat] = useState(0);
  let listaregioni =
    localita == 1
      ? vini[localita]["categorie"][cat]["items"].map((reg) => reg.region)
      : [];
  listaregioni = [...new Set(listaregioni)];
  console.log(listaregioni);
  const [regione, setRegione] = useState(0);
  console.log(regione);

  return (
    <VStack style='relative min-h-fit  items-center my-10 space-y-11'>
      <Heading as='h3' size='4xl'>
        La nostra selezione di vini
      </Heading>
      {/*here user can choose items section of menu, set is controlling state of button group */}
      <ButtonGroup set={setLocalita}> </ButtonGroup>
      <HStack style='justify-center w-3/4 items-center space-x-3 '>
        <select
          className='bg-secondary'
          onChange={(e) => {
            const name = e.target.value;

            setCat(vini[localita]["categorie"].findIndex((i) => i.id === name));
          }}
        >
          {vini[localita]["categorie"].map((category) => {
            return (
              <option key={category["id"]} value={category["id"]}>
                {category["title"]}
              </option>
            );
          })}
        </select>

        {localita == 1 ? (
          <select
            className='bg-secondary'
            onChange={(e) => {
              setRegione(e.target.value);
            }}
          >
            <option selected disabled hidden>
              Scegli Regione
            </option>
            {listaregioni.map((regione) => {
              return (
                <option key={regione} value={regione}>
                  {regione}
                </option>
              );
            })}
          </select>
        ) : (
          <></>
        )}
      </HStack>
      {/*this vstack is fetching and showing datas from json and section is controlled by buttongroup of above  */}
      <VStack style='min-w-full  items-center space-y-10'>
        {localita == 0
          ? vini[localita]["categorie"][cat]["items"].map((vini) => {
              return (
                <Vino
                  key={vini.id}
                  item={vini["name"]}
                  prezzo={vini["price"]}
                  description={vini["description"]}
                  vol={vini["vol"]}
                ></Vino>
              );
            })
          : vini[localita]["categorie"][cat]["items"].map((vini) => {
              if (vini.region == regione) {
                return (
                  <Vino
                    key={vini.id}
                    item={vini["name"]}
                    prezzo={vini["price"]}
                    description={vini["description"]}
                    vol={vini["vol"]}
                  ></Vino>
                );
              }
            })}
      </VStack>
    </VStack>
  );
};

const ButtonGroup = ({ set }) => {
  const [btnactive, setBtnactive] = useState("oltrepò");

  return (
    <HStack style='justify-center space-x-5  mt-10 flex-wrap'>
      <MenuButton
        sezione='Oltrepò'
        set={set}
        setBtn={setBtnactive}
        active={btnactive}
        pos={0}
      />
      <MenuButton
        sezione='Italia'
        set={set}
        setBtn={setBtnactive}
        active={btnactive}
        pos={1}
      />
      <MenuButton
        sezione='Francia'
        set={set}
        setBtn={setBtnactive}
        active={btnactive}
        pos={2}
      />
    </HStack>
  );
};

{
  /*every button in button group have a state controlled by button group, if its state is active color change from gray to black */
}
const MenuButton = ({ sezione, set, setBtn, active, pos }) => {
  const color =
    active == sezione.toLowerCase() ? "text-black" : "text-gray-500";
  const stile = "relative font-miofont font-normal text-xl " + color;

  return (
    <Button
      style={stile}
      onClick={() => {
        set(pos);
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
const Vino = ({ item, prezzo, description, vol }) => {
  return (
    <HStack style='justify-between space-x-5  lg:w-1/2 max-lg:w-3/4 mx-10'>
      <VStack>
        <p className='text-start font-semibold'>{item}</p>
        <p className='text-start  text-xs   font-normal'>{description}</p>
        <p className='text-start  text-xs   font-thin'>{vol}</p>
      </VStack>
      <p>{prezzo + "€"}</p>
    </HStack>
  );
};

export default WinesComponent;
