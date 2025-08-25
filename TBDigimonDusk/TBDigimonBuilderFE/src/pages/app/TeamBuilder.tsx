import { AddDigimonCard } from "@/components/TeamBuilder/AddDigimonCard";
import { useState } from "react";

export function TeamBuilder() {
  const [teamSetup, setTeamSetup] = useState([]);
  const [bankSetup, setBankSetup] = useState([]);

  return (
    <div>
      <h1>Choose your digimon to add</h1>

      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-center gap-3">
          {teamSetup.map((team) => (
            <>{team}</>
          ))}
          {teamSetup.length < 3 && <AddDigimonCard />}
        </div>
        <div className="flex items-center justify-center gap-3">
          {bankSetup.map((team) => (
            <>{team}</>
          ))}
          {teamSetup.length < 3 && <AddDigimonCard />}
        </div>
      </div>
    </div>
  );
}
