import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";

import Image from "next/image";
import { CameraIcon } from "lucide-react";

import "./styles.css";

const HTTPSERVER = "http://localhost:3010";

export const RaceImageCard = ({ imageUrl }) => {
  return (
    <Card className="w-[350px] h-[300px]">
      <CardContent className="flex justify-center p-3 h-[100%]">
        {imageUrl ? (
          <Image
            src={`${HTTPSERVER}/image?name=${imageUrl}`}
            width={350}
            height={200}
            alt={`Race image for ${imageUrl}`}
            style={{
              width: "auto",
              height: "200px",
            }}
          />
        ) : (
          <div className="load-race-photo">
            <span>Type a race name to add a photo</span>
            <CameraIcon />
          </div>
        )}
      </CardContent>
    </Card>
  );
};
