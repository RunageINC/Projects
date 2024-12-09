import * as React from "react";

import { Card, CardContent, CardFooter } from "@/components/ui/card";

import Image from "next/image";
import { CameraIcon } from "lucide-react";

const HTTPSERVER = "http://localhost:3010";

const mockedImage = "numou-ffta2.webp";

export const JobImageSmallCard = ({ image, name }) => {
  return (
    <Card className="w-[200px]">
      <CardContent className="flex justify-center p-3">
        <Image
          src={`${HTTPSERVER}/image?name=${mockedImage}`}
          width={50}
          height={30}
          alt={`Job image for ${name}`}
          style={{
            width: "auto",
            height: "50px",
          }}
        />
      </CardContent>
      <CardFooter className="justify-center">
        <p>{name}</p>
      </CardFooter>
    </Card>
  );
};
