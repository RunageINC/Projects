"use client";

import React, { useState, useEffect } from "react";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import Image from "next/image";
import Link from "next/link";

import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

import { URL, IMAGE_URL } from "@/constants/backendConstants";

async function getAllRaces() {
  const response = await fetch(`${URL}/races`, {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  });

  return response.json();
}

const Races = () => {
  const [races, setRaces] = useState();

  useEffect(() => {
    const getRacesFromServer = async () => {
      const data = await getAllRaces();
      setRaces(data);
    };

    getRacesFromServer();
  }, []);

  return (
    <div className="p-5">
      <h1>Races List</h1>
      <Table className="mt-5">
        <TableCaption>Races list for Tactics</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Id</TableHead>
            <TableHead className="w-[100px]">Name</TableHead>
            <TableHead>Image</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Flying Unit?</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {races &&
            races.map((race) => (
              <TableRow key={race.id}>
                <TableCell>{race.id}</TableCell>
                <TableCell>{race.name}</TableCell>
                <TableCell>
                  <Image
                    src={`${IMAGE_URL}?name=${race.imageUrl}`}
                    width={50}
                    height={80}
                    alt={`Race image for ${race.name}`}
                    style={{
                      width: "auto",
                      height: "80px",
                    }}
                  />
                </TableCell>
                <TableCell>
                  <i>"{race.description}"</i>
                </TableCell>
                <TableCell>
                  <Switch id="wrapper" checked={race.isFlying} disabled />
                </TableCell>
                <TableCell>
                  <Link href={`/races/${race.id}`}>
                    <Button>
                      <Search />
                      View
                    </Button>
                  </Link>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Races;
