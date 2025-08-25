import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { PlusCircle } from "lucide-react";
import { Button } from "../ui/button";

export const AddDigimonCard = () => (
  <Card className="h-[200px] w-[150px] cursor-pointer transition-all hover:scale-105">
    <CardHeader>
      <CardTitle>Add Digimon</CardTitle>
    </CardHeader>
    <CardContent className="flex h-full items-center justify-center">
      <PlusCircle size={48} color="gray" />
    </CardContent>
  </Card>
);
