import { GiAngelOutfit } from "react-icons/gi";
import { GiDevilMask } from "react-icons/gi";
import { GiSpikedDragonHead } from "react-icons/gi";
import { GiBearHead } from "react-icons/gi";
import { SiFalcon } from "react-icons/si";
import { GiBigGear } from "react-icons/gi";
import { GiCirclingFish } from "react-icons/gi";
import { GiPlantRoots } from "react-icons/gi";
import { useState } from "react";

export const SpeciesButtonGroup = (props) => {
  const styles =
    "cursor-pointer hover:opacity-80 flex flex-col justify-center items-center rounded-full border-2 border-blue-900 bg-blue-800 p-5 text-5xl text-cyan-200";
  const [selected, setSelected] = useState<string>("");

  const stylesSelected =
    "cursor-pointer hover:opacity-80 flex flex-col justify-center items-center rounded-full border-2 border-blue-900 bg-blue-500 p-5 text-5xl text-cyan-200";

  return (
    <div className="grid grid-cols-4 gap-5">
      <div
        className={"Holy" === selected ? stylesSelected : styles}
        onClick={() => setSelected("Holy")}
      >
        <GiAngelOutfit />
        <span
          className="text-center text-xs"
          style={{ fontVariant: "small-caps" }}
        >
          Holy
        </span>
      </div>
      <div
        className={"Dark" === selected ? stylesSelected : styles}
        onClick={() => setSelected("Dark")}
      >
        <GiDevilMask />
        <span
          className="text-center text-xs"
          style={{ fontVariant: "small-caps" }}
        >
          Dark
        </span>
      </div>
      <div
        className={"Dragon" === selected ? stylesSelected : styles}
        onClick={() => setSelected("Dragon")}
      >
        <GiSpikedDragonHead />
        <span
          className="text-center text-xs"
          style={{ fontVariant: "small-caps" }}
        >
          Dragon
        </span>
      </div>
      <div
        className={"Beast" === selected ? stylesSelected : styles}
        onClick={() => setSelected("Beast")}
      >
        <GiBearHead />
        <span
          className="text-center text-xs"
          style={{ fontVariant: "small-caps" }}
        >
          Beast
        </span>
      </div>
      <div
        className={"Bird" === selected ? stylesSelected : styles}
        onClick={() => setSelected("Bird")}
      >
        <SiFalcon />
        <span
          className="text-center text-xs"
          style={{ fontVariant: "small-caps" }}
        >
          Bird
        </span>
      </div>
      <div
        className={"Machine" === selected ? stylesSelected : styles}
        onClick={() => setSelected("Machine")}
      >
        <GiBigGear />
        <span
          className="text-center text-xs"
          style={{ fontVariant: "small-caps" }}
        >
          Machine
        </span>
      </div>
      <div
        className={"Aquan" === selected ? stylesSelected : styles}
        onClick={() => setSelected("Aquan")}
      >
        <GiCirclingFish />
        <span
          className="text-center text-xs"
          style={{ fontVariant: "small-caps" }}
        >
          Aquan
        </span>
      </div>
      <div
        className={"InsectPlant" === selected ? stylesSelected : styles}
        onClick={() => setSelected("InsectPlant")}
      >
        <GiPlantRoots />
        <span
          className="text-center text-xs"
          style={{ fontVariant: "small-caps" }}
        >
          InsectPlant
        </span>
      </div>
    </div>
  );
};
