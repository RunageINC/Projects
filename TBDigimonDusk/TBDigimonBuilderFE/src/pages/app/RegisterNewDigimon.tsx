import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Camera, PlusCircle, Search } from "lucide-react";
import { useState } from "react";
import { imageLib } from "@/lib/image-locations";
import { toast } from "sonner";
import { SelectorWrapper } from "@/components/Admin/RegisterNewDigimon/TraitSelector";

import { getAllTraits } from "@/api/traits/get-traits";
import { useQuery } from "@tanstack/react-query";
import { Separator } from "@radix-ui/react-select";
import { SpeciesButtonGroup } from "@/components/Admin/RegisterNewDigimon/SpeciesButtonGroup";

const attributesSelector = [
  {
    id: 1,
    name: "Fire",
  },
  {
    id: 2,
    name: "Physical",
  },
];

const levelSelector = [
  { id: 1, name: "In-Training" },
  { id: 2, name: "Rookie" },
  { id: 3, name: "Champion" },
  { id: 4, name: "Ultimate" },
  { id: 5, name: "Mega" },
];

const attributesEnum = z.enum(["Fire", "Physical"]);
const levelEnum = z.enum([
  "In-Training",
  "Rookie",
  "Champion",
  "Ultimate",
  "Mega",
]);

const digimonSchema = z.object({
  digiNumber: z.number(),
  name: z.string().min(2).max(100),
  traits: z.array(z.number()),
  supportAbility: z.number(),
  strongAttribute: attributesEnum,
  weakAttribute: attributesEnum,
  attack: z.number(),
  defense: z.number(),
  spirit: z.number(),
  speed: z.number(),
  aptitude: z.number(),
  level: levelEnum,
  skills: z.array(z.number()),
});

type DigimonFormSchema = z.infer<typeof digimonSchema>;

export function RegisterNewDigimon() {
  const [imageUrl, setImageUrl] = useState<string | undefined>(undefined);
  const [imageUrlInput, setImageUrlInput] = useState<string>("");
  const { data: traitsResult = [] } = useQuery({
    queryKey: ["traits"],
    queryFn: getAllTraits,
    refetchInterval: Infinity,
    retry: false,
    staleTime: Infinity,
  });

  const form = useForm<DigimonFormSchema>({
    resolver: zodResolver(digimonSchema),
  });

  const handleDigimonSubmit = (values: DigimonFormSchema) => {
    console.log(values);
  };

  const handleImageSearch = () => {
    const digimonImage = imageLib[imageUrlInput];

    if (!digimonImage) {
      toast.error("Image does not exist.");
      return;
    }

    setImageUrl(imageLib[imageUrlInput]);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <h1 className="text-center text-2xl font-semibold">
        Register a new digimon
      </h1>
      <Separator className="h-[1px] w-full bg-zinc-200/60" />
      <div className="flex w-full justify-center gap-3">
        <div className="flex flex-col gap-3">
          {!imageUrl && (
            <div className="flex h-[210px] w-[210px] items-center justify-center border-1 border-dashed">
              <Camera size={32} color="gray" />
            </div>
          )}
          {imageUrl && <img src={imageUrl} />}
          <Input
            placeholder="Type the image name"
            onChange={(data) => setImageUrlInput(data.target.value)}
            value={imageUrlInput}
          />
          <Button onClick={handleImageSearch}>
            <Search size={12} />
            Search
          </Button>
        </div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleDigimonSubmit)}
            className="flex min-w-[500px] flex-col gap-3"
          >
            <div className="flex flex-col gap-5">
              <FormField
                control={form.control}
                name="digiNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>DigiNumber #</FormLabel>
                    <FormControl>
                      <Input {...field} type="number" min={1} max={999} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Digimon species name" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="level"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Level</FormLabel>
                    <FormControl>
                      <SelectorWrapper
                        {...field}
                        label="Select the level"
                        selectValues={levelSelector}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="level"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Species</FormLabel>
                    <FormControl>
                      <SpeciesButtonGroup {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <div className="flex flex-col gap-3">
                <FormField
                  control={form.control}
                  name="traits"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Traits</FormLabel>
                      <FormControl>
                        <SelectorWrapper
                          {...field}
                          label="Select a trait"
                          selectValues={traitsResult}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <Button variant="outline">
                  <PlusCircle size={24} color="green" />
                  Add Trait
                </Button>
              </div>
              <FormField
                control={form.control}
                name="supportAbility"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Supportive Ability</FormLabel>
                    <FormControl>
                      <SelectorWrapper
                        {...field}
                        label="Select a support ability"
                        selectValues={traitsResult}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="strongAttribute"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Strong Against</FormLabel>
                    <FormControl>
                      <SelectorWrapper
                        {...field}
                        label="Select the strong attribute"
                        selectValues={attributesSelector}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="weakAttribute"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Weak Against</FormLabel>
                    <FormControl>
                      <SelectorWrapper
                        {...field}
                        label="Select the weak attribute"
                        selectValues={attributesSelector}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-2 gap-2">
                <FormField
                  control={form.control}
                  name="attack"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Attack</FormLabel>
                      <FormControl>
                        <Input {...field} type="number" min={1} max={999} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="defense"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Defense</FormLabel>
                      <FormControl>
                        <Input {...field} type="number" min={1} max={999} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="spirit"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Spirit</FormLabel>
                      <FormControl>
                        <Input {...field} type="number" min={1} max={999} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="speed"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Speed</FormLabel>
                      <FormControl>
                        <Input {...field} type="number" min={1} max={999} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="aptitude"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Aptitude</FormLabel>
                      <FormControl>
                        <Input {...field} type="number" min={1} max={999} />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
              <Separator className="h-[1px] bg-zinc-200/60" />
              <div className="flex flex-col gap-3">
                <FormField
                  control={form.control}
                  name="skills"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Skill List</FormLabel>
                      <FormControl>
                        <SelectorWrapper
                          {...field}
                          label="Add skills"
                          selectValues={traitsResult}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <Button variant="outline">
                  <PlusCircle size={24} color="green" />
                  Add Skill
                </Button>
              </div>
              <Separator className="h-[1px] bg-zinc-200/60" />
            </div>
            <Button type="submit">Save</Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
