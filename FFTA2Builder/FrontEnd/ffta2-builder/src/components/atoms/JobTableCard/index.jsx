import { Toggle } from "@/components/ui/toggle";
import { JobImageSmallCard } from "../JobImageSmallCard";

export const JobTableCard = ({ name }) => {
  return (
    <Toggle className="p-2" style={{ height: "fit-content" }}>
      <JobImageSmallCard name={name} />
    </Toggle>
  );
};
