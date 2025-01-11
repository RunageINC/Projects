"use client";

import React, { useState, useEffect } from "react";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

import { URL, IMAGE_URL } from "@/constants/backendConstants";

import "./index.css";
import { Switch } from "@/components/ui/switch";
import Link from "next/link";

async function getRaceById(id) {
  const response = await fetch(`${URL}/races/${id}`, {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  });

  return response.json();
}

const RaceDetail = ({ params }) => {
  const [race, setRace] = useState();

  useEffect(() => {
    const getRaceFromServer = async () => {
      const id = (await params).id;
      const data = await getRaceById(id);
      setRace(data);
    };

    getRaceFromServer();
  }, []);

  return (
    race && (
      <div className="flex flex-col p-10 w-[80vw]">
        <div className="race-header">
          <h1>{race.name} - Details</h1>
        </div>
        <div className="flex gap-10">
          <div className="flex flex-col">
            <Card className="w-[250px] h-[250px]">
              <CardContent className="flex justify-center p-3 h-[100%]">
                <Image
                  src={`${IMAGE_URL}?name=${race.imageUrl}`}
                  width={350}
                  height={200}
                  alt={`Race image for ${race.name}`}
                  style={{
                    width: "auto",
                    height: "200px",
                  }}
                />
              </CardContent>
            </Card>
            <div className="p-3">
              <p>
                <strong>Notable Humans</strong>
              </p>
              <ul className="mt-3">
                <li>Luso</li>
                <li>Player</li>
              </ul>
            </div>
            <div className="p-3">
              <span>
                Flying unit?{" "}
                <Switch
                  id="wrapper"
                  className="ml-3"
                  checked={race.isFlying}
                  disabled
                />
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-10">
            <div>
              <div className="description-container">{race.description}</div>
            </div>
            <div className="flex flex-col gap-10 possible-jobs">
              <span className="job-header">Jobs available</span>
              <div className="flex flex-wrap gap-5">
                {race.jobsResume.map((job) => (
                  <Link href={`/jobs/${job.id}`} key={job.id}>
                    <div className="job-card">
                      <Image
                        src={`${IMAGE_URL}?name=${job.spriteUrl}`}
                        width={40}
                        height={40}
                        alt={job.name}
                      />
                      <span className="job-title">{job.name}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default RaceDetail;
