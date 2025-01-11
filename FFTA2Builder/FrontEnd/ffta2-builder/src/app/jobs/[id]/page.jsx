"use client";

import React, { useState, useEffect } from "react";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Image from "next/image";

import { URL, IMAGE_URL } from "@/constants/backendConstants";

import "./index.css";
import { BookAIcon, Lock } from "lucide-react";
import { StatusArea } from "@/components/organisms/StatusArea";

import { AbilityTypeCard } from "@/components/organisms/AbilityTypeCard";

async function getJobById(id) {
  const response = await fetch(`${URL}/jobs/${id}`, {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  });

  return response.json();
}

const JobDetail = ({ params }) => {
  const [job, setJob] = useState();

  useEffect(() => {
    const getJobFromServer = async () => {
      const id = (await params).id;
      const data = await getJobById(id);
      setJob(data);
    };

    getJobFromServer();
  }, []);

  return (
    job && (
      <div className="flex flex-col p-10 w-[80vw]">
        <div className="job-header">
          <h1>{job.name} - Details</h1>
        </div>
        <div className="flex gap-10">
          <div className="flex flex-col">
            <Card className="w-[250px] h-[250px]">
              <CardContent className="flex justify-center p-3 h-[100%]">
                <Image
                  src={`${IMAGE_URL}?name=${job.imageUrl}`}
                  width={350}
                  height={200}
                  alt={`Job image for ${job.name}`}
                  style={{
                    width: "auto",
                    height: "200px",
                  }}
                />
              </CardContent>
            </Card>
            <div className="p-3">
              <h1>Used by: </h1>
              <Card className="mt-5 w-[150px] h-[100px]">
                <CardContent className="flex justify-center p-3 h-[100%]">
                  <Image
                    src={`${IMAGE_URL}?name=${job.foundInRace.imageUrl}`}
                    width={150}
                    height={80}
                    alt={`Job image for ${job.name}`}
                    style={{
                      width: "auto",
                      height: "80px",
                    }}
                  />
                </CardContent>
                <CardFooter className="mt-5 justify-center">
                  <p>{job.foundInRace.name}</p>
                </CardFooter>
              </Card>
              <StatusArea job={job} />
            </div>
            <div className="p-3"></div>
          </div>
          <div className="flex flex-col gap-10">
            <div>
              <div className="description-container">{job.description}</div>
            </div>
            <div className="flex gap-3">
              <Card className="w-[350px]">
                <CardHeader className="requirements-title card-text">
                  <BookAIcon /> Requirements for using
                </CardHeader>
                <CardContent className="card-text">
                  {job.usageRequirements}
                </CardContent>
              </Card>
              <Card className="w-[350px]">
                <CardHeader className="requirements-title card-text">
                  <Lock /> How to Unlock
                </CardHeader>
                <CardContent className="card-text">
                  {job.unlockRequirements}
                </CardContent>
              </Card>
            </div>
            <div className="ability-container">
              <h1>Abilities</h1>
              <div className="flex flex-col gap-5">
                {job.usableAbilities.map((ability) => (
                  <AbilityTypeCard key={ability.id} ability={ability} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default JobDetail;
