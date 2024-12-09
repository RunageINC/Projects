import React, { useState } from "react";

import { JobTableCard } from "@/components/atoms/JobTableCard";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";

const jobMockedList = [
  { id: 1, name: "Geomancer" },
  { id: 2, name: "Black Mage" },
  { id: 3, name: "Flintlock" },
  { id: 4, name: "Moogle Knight" },
  { id: 5, name: "Dragoon" },
  { id: 6, name: "Gladiator" },
];

export const JobTable = () => {
  const [content, setContent] = useState(jobMockedList);

  const handleFilterChange = (event) => {
    const filterValue = event.target.value.toLowerCase();

    if (filterValue === "") {
      setContent(jobMockedList);
      return;
    }

    const filteredJobs = jobMockedList.filter((job) =>
      job.name.toLowerCase().includes(filterValue)
    );
    setContent(filteredJobs);
  };

  return (
    <div className="flex flex-col gap-3">
      <Input
        name="filter"
        placeholder="Type the job name to filter"
        onChange={handleFilterChange}
      />
      <div className="grid grid-cols-4 gap-5">
        {content.map((job) => (
          <JobTableCard key={job.id} name={job.name} />
        ))}
      </div>
    </div>
  );
};
