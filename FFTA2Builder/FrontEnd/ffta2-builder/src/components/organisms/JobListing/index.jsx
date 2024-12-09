import React, { useState } from "react";

import { ChevronsUpDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { JobImageSmallCard } from "@/components/atoms/JobImageSmallCard";
import { JobTable } from "@/components/molecules/JobTable";

export const JobListing = ({ selectedJobs, onAddJobs }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="w-[100%] space-y-2"
    >
      <div className="grid grid-cols-4 gap-4">
        {selectedJobs.map((job) => (
          <JobImageSmallCard key={job.id} name={job.name} />
        ))}
      </div>
      <div className="flex items-center justify-between space-x-4 px-4">
        <span>Add more Jobs</span>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="sm" className="w-9 p-0">
            <ChevronsUpDown className="h-4 w-4" />
            <span className="sr-only">Toggle</span>
          </Button>
        </CollapsibleTrigger>
      </div>
      <CollapsibleContent className="space-y-2">
        <div className="rounded-md border px-4 py-3">
          <JobTable />
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
};
