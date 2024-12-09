"use client";

import React, { useState } from "react";

import { RaceImageCard } from "@/components/atoms/RaceImageCard";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SelectWrapper } from "@/components/atoms/SelectWrapper";
import { Button } from "@/components/ui/button";
import { PlusCircleIcon } from "lucide-react";
import { SwitchWrapper } from "@/components/atoms/SwitchWrapper";
import { JobListing } from "@/components/organisms/JobListing";

const mockedJobs = [
  { id: 1, name: "Geomancer" },
  { id: 2, name: "Black Mage" },
  { id: 3, name: "Flintlock" },
  { id: 4, name: "Moogle Knight" },
  { id: 5, name: "Dragoon" },
  { id: 6, name: "Gladiator" },
];

export const RaceForm = () => {
  const [raceRegistrationData, setRaceRegistrationData] = useState({
    name: "",
    possibleJobs: [],
    location: "",
    gameAppearances: [],
    isFlyingUnit: false,
    imageUrl: "",
  });

  const handleSubmitForm = (event) => {
    event.preventDefault();
    console.log(raceRegistrationData);
  };

  const onChangeName = () => {
    const { name: raceName } = raceRegistrationData;

    if (raceName === "") {
      setRaceRegistrationData((prev) => ({
        ...prev,
        imageUrl: "",
      }));

      return;
    }

    const imageUrlFormation = `${raceName
      .replaceAll(" ", "")
      .toLowerCase()}-ffta2.webp`;

    setRaceRegistrationData((prev) => ({
      ...prev,
      imageUrl: imageUrlFormation,
    }));
  };

  return (
    <form onSubmit={handleSubmitForm} className="p-4 flex flex-col gap-5">
      <div className="flex gap-10">
        <RaceImageCard imageUrl={raceRegistrationData.imageUrl} />
        <div className="flex flex-col gap-5">
          <div>
            <Label htmlFor="name">Name</Label>
            <Input
              type="text"
              id="name"
              name="name"
              required
              onChange={() =>
                setRaceRegistrationData((prev) => ({
                  ...prev,
                  name: event.target.value,
                }))
              }
              onBlur={onChangeName}
            />
          </div>
          <div>
            <Label htmlFor="possibleJobs">Possible Jobs</Label>
            <JobListing selectedJobs={mockedJobs} />
          </div>
          <div>
            <Label htmlFor="location">Game Appearances</Label>
            <div className="flex gap-5">
              <SelectWrapper options={["Zedlei", "Targ Woods", "Camoa"]} />
              <Button>
                <PlusCircleIcon />
                Add
              </Button>
            </div>
          </div>
          <div>
            <SwitchWrapper
              label="Flying Unit?"
              switchValue={raceRegistrationData.isFlyingUnit}
              onSwitch={() =>
                setRaceRegistrationData((prev) => ({
                  ...prev,
                  isFlyingUnit: !prev.isFlyingUnit,
                }))
              }
            />
          </div>
        </div>
      </div>
      <Button type="submit">Submit</Button>
    </form>
  );
};
