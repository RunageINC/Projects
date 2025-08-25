import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";

export const AddCharacter = () => (
  <div className="border-gray-400 border-1 rounded-sm w-[200px] h-[200px] flex items-center justify-center">
    <Button variant="secondary" className="cursor-pointer">
      <PlusCircle />
      Add
    </Button>
  </div>
);
