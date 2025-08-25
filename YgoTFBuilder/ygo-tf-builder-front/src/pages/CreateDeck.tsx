import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  CameraIcon,
  ChevronsUpDown,
  Pen,
  SaveIcon,
  Trash,
  WalletCards,
} from "lucide-react";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { DeckCard } from "@/components/deck-card";
import { AllCardsList } from "@/components/all-card-list";
import { usePlayerDecks } from "@/components/context/usePlayer";
import { Checkbox } from "@/components/ui/checkbox";

const formSchema = z.object({
  name: z.string().min(1, {
    message: "Deck must have a name",
  }),
  gameAppearance: z
    .array(z.string())
    .refine((value) => value.some((item) => item), {
      message: "You have to select at least one game.",
    }),
  description: z.string(),
  playtip: z.string(),
  bestPartners: z.string(),
});

type FormType = z.infer<typeof formSchema>;

export function CreateDeckPage() {
  const [editMode, setEditMode] = useState<"main" | "extra" | "side" | "none">(
    "none"
  );
  const [mainDeck, setMainDeck] = useState<Card[]>([]);
  const [extraDeck, setExtraDeck] = useState<Card[]>([]);
  const [sideDeck, setSideDeck] = useState<Card[]>([]);
  const [coverCard, setCoverCard] = useState<string>("");

  const { saveDeck } = usePlayerDecks();

  const form = useForm<FormType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      gameAppearance: [],
      description: "",
      playtip: "",
      bestPartners: "",
    },
  });

  const onSubmit = async (values: FormType) => {
    const mainDeckIds = mainDeck.map((card) => card.id);
    const extraDeckIds = extraDeck.map((card) => card.id);
    const sideDeckIds = sideDeck.map((card) => card.id);

    const request = {
      ...values,
      gameAppearance: values.gameAppearance.join(";"),
      coverCard,
      mainDeck: mainDeckIds,
      extraDeck: extraDeckIds,
      bestPartners: values.bestPartners.split(";"),
      sideDeck: sideDeckIds,
    };

    await saveDeck(request);
  };

  const addCard = (card: Card) => {
    switch (editMode) {
      case "main":
        setMainDeck((prev) => [...prev, card]);
        break;
      case "extra":
        setExtraDeck((prev) => [...prev, card]);
        break;
      case "side":
        setSideDeck((prev) => [...prev, card]);
        break;
      default:
        return;
    }
  };

  const removeCard = (card: Card) => {
    switch (editMode) {
      case "main":
        {
          const filtered = mainDeck.filter((item) => item.id !== card.id);

          setMainDeck(() => [...filtered]);
        }
        break;
      case "extra":
        {
          const filtered = extraDeck.filter((item) => item.id !== card.id);

          setExtraDeck(() => [...filtered]);
        }
        break;
      case "side":
        {
          const filtered = sideDeck.filter((item) => item.id !== card.id);

          setSideDeck(() => [...filtered]);
        }
        break;
      default:
        return;
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="flex justify-end gap-3">
          <Button
            className="text-white"
            type="submit"
            onClick={() => console.log("clicked")}
          >
            <SaveIcon />
            Save
          </Button>
          <Button variant="destructive" type="button">
            <Trash />
            Delete
          </Button>
        </div>
        <div className="flex flex-col gap-3 m-3 w-[80dvw]">
          <div className="flex gap-3">
            <div className="h-[240px] w-[200px] border-gray-300 border-1 flex items-center justify-center border-dashed">
              {!coverCard && (
                <Button variant="secondary">
                  <CameraIcon />
                  Add cover card
                </Button>
              )}
            </div>

            <div className="flex flex-col gap-3 w-full">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Deck name</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="Insert a name"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="gameAppearance"
                render={() => (
                  <FormItem>
                    <FormLabel className="text-base">
                      Game Appearances
                    </FormLabel>
                    <FormDescription>
                      Select which games can this deck be used
                    </FormDescription>
                    <div className="flex gap-5 items-start">
                      <div className="flex flex-col gap-2">
                        <FormField
                          control={form.control}
                          name="gameAppearance"
                          render={({ field }) => {
                            return (
                              <FormItem className="flex flex-row items-center gap-2">
                                <FormControl>
                                  <Checkbox
                                    checked={field.value?.includes(
                                      "Yu-Gi-Oh! Tag Force 1"
                                    )}
                                    onCheckedChange={(checked) => {
                                      return checked
                                        ? field.onChange([
                                            ...field.value,
                                            "Yu-Gi-Oh! Tag Force 1",
                                          ])
                                        : field.onChange(
                                            field.value?.filter(
                                              (value) =>
                                                value !==
                                                "Yu-Gi-Oh! Tag Force 1"
                                            )
                                          );
                                    }}
                                  />
                                </FormControl>
                                <FormLabel className="text-sm font-normal">
                                  Yu-Gi-Oh! Tag Force 1
                                </FormLabel>
                              </FormItem>
                            );
                          }}
                        />
                        <FormField
                          control={form.control}
                          name="gameAppearance"
                          render={({ field }) => {
                            return (
                              <FormItem className="flex flex-row items-center gap-2">
                                <FormControl>
                                  <Checkbox
                                    checked={field.value?.includes(
                                      "Yu-Gi-Oh! Tag Force 2"
                                    )}
                                    onCheckedChange={(checked) => {
                                      return checked
                                        ? field.onChange([
                                            ...field.value,
                                            "Yu-Gi-Oh! Tag Force 2",
                                          ])
                                        : field.onChange(
                                            field.value?.filter(
                                              (value) =>
                                                value !==
                                                "Yu-Gi-Oh! Tag Force 2"
                                            )
                                          );
                                    }}
                                  />
                                </FormControl>
                                <FormLabel className="text-sm font-normal">
                                  Yu-Gi-Oh! Tag Force 2
                                </FormLabel>
                              </FormItem>
                            );
                          }}
                        />
                        <FormField
                          control={form.control}
                          name="gameAppearance"
                          render={({ field }) => {
                            return (
                              <FormItem className="flex flex-row items-center gap-2">
                                <FormControl>
                                  <Checkbox
                                    checked={field.value?.includes(
                                      "Yu-Gi-Oh! Tag Force 3"
                                    )}
                                    onCheckedChange={(checked) => {
                                      return checked
                                        ? field.onChange([
                                            ...field.value,
                                            "Yu-Gi-Oh! Tag Force 3",
                                          ])
                                        : field.onChange(
                                            field.value?.filter(
                                              (value) =>
                                                value !==
                                                "Yu-Gi-Oh! Tag Force 3"
                                            )
                                          );
                                    }}
                                  />
                                </FormControl>
                                <FormLabel className="text-sm font-normal">
                                  Yu-Gi-Oh! Tag Force 3
                                </FormLabel>
                              </FormItem>
                            );
                          }}
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <FormField
                          control={form.control}
                          name="gameAppearance"
                          render={({ field }) => {
                            return (
                              <FormItem className="flex flex-row items-center gap-2">
                                <FormControl>
                                  <Checkbox
                                    checked={field.value?.includes(
                                      "Yu-Gi-Oh! Tag Force 4"
                                    )}
                                    onCheckedChange={(checked) => {
                                      return checked
                                        ? field.onChange([
                                            ...field.value,
                                            "Yu-Gi-Oh! Tag Force 4",
                                          ])
                                        : field.onChange(
                                            field.value?.filter(
                                              (value) =>
                                                value !==
                                                "Yu-Gi-Oh! Tag Force 4"
                                            )
                                          );
                                    }}
                                  />
                                </FormControl>
                                <FormLabel className="text-sm font-normal">
                                  Yu-Gi-Oh! Tag Force 4
                                </FormLabel>
                              </FormItem>
                            );
                          }}
                        />
                        <FormField
                          control={form.control}
                          name="gameAppearance"
                          render={({ field }) => {
                            return (
                              <FormItem className="flex flex-row items-center gap-2">
                                <FormControl>
                                  <Checkbox
                                    checked={field.value?.includes(
                                      "Yu-Gi-Oh! Tag Force 5"
                                    )}
                                    onCheckedChange={(checked) => {
                                      return checked
                                        ? field.onChange([
                                            ...field.value,
                                            "Yu-Gi-Oh! Tag Force 5",
                                          ])
                                        : field.onChange(
                                            field.value?.filter(
                                              (value) =>
                                                value !==
                                                "Yu-Gi-Oh! Tag Force 5"
                                            )
                                          );
                                    }}
                                  />
                                </FormControl>
                                <FormLabel className="text-sm font-normal">
                                  Yu-Gi-Oh! Tag Force 5
                                </FormLabel>
                              </FormItem>
                            );
                          }}
                        />
                        <FormField
                          control={form.control}
                          name="gameAppearance"
                          render={({ field }) => {
                            return (
                              <FormItem className="flex flex-row items-center gap-2">
                                <FormControl>
                                  <Checkbox
                                    checked={field.value?.includes(
                                      "Yu-Gi-Oh! Tag Force 6"
                                    )}
                                    onCheckedChange={(checked) => {
                                      return checked
                                        ? field.onChange([
                                            ...field.value,
                                            "Yu-Gi-Oh! Tag Force 6",
                                          ])
                                        : field.onChange(
                                            field.value?.filter(
                                              (value) =>
                                                value !==
                                                "Yu-Gi-Oh! Tag Force 6"
                                            )
                                          );
                                    }}
                                  />
                                </FormControl>
                                <FormLabel className="text-sm font-normal">
                                  Yu-Gi-Oh! Tag Force 6
                                </FormLabel>
                              </FormItem>
                            );
                          }}
                        />
                      </div>
                      <FormField
                        control={form.control}
                        name="gameAppearance"
                        render={({ field }) => {
                          return (
                            <FormItem className="flex flex-row items-center gap-2">
                              <FormControl>
                                <Checkbox
                                  checked={field.value?.includes(
                                    "Yu-Gi-Oh! Tag Force Arc-V Special"
                                  )}
                                  onCheckedChange={(checked) => {
                                    return checked
                                      ? field.onChange([
                                          ...field.value,
                                          "Yu-Gi-Oh! Tag Force Arc-V Special",
                                        ])
                                      : field.onChange(
                                          field.value?.filter(
                                            (value) =>
                                              value !==
                                              "Yu-Gi-Oh! Tag Force Arc-V Special"
                                          )
                                        );
                                  }}
                                />
                              </FormControl>
                              <FormLabel className="text-sm font-normal">
                                Yu-Gi-Oh! Tag Force Arc-V Special
                              </FormLabel>
                            </FormItem>
                          );
                        }}
                      />
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description (optional)</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Insert a description" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="playtip"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Playtips (optional)</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Insert tips for playing this deck"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="bestPartners"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Best played with (Tag) (optional)</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="Insert partners that synergizes well"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <div className="flex gap-2 mt-5">
            <div className="flex flex-col gap-5 w-[80dvw]">
              <Collapsible>
                <div className="flex items-center gap-2">
                  <h1 className="text-xl font-semibold flex gap-3">
                    Main Deck: <WalletCards color="brown" />{" "}
                    <span>{mainDeck.length} cards</span>
                  </h1>
                  <CollapsibleTrigger asChild>
                    <Button variant="ghost">
                      <ChevronsUpDown />
                    </Button>
                  </CollapsibleTrigger>
                  {editMode !== "main" && (
                    <Button
                      className="text-white"
                      type="button"
                      onClick={() => setEditMode("main")}
                    >
                      <Pen />
                      Edit
                    </Button>
                  )}
                </div>
                <CollapsibleContent className="flex gap-1 flex-wrap">
                  {mainDeck.map((card, index) => (
                    <DeckCard
                      key={`${card.id}-${index}`}
                      card={card}
                      onCardAction={removeCard}
                    />
                  ))}
                </CollapsibleContent>
              </Collapsible>
              <Collapsible>
                <div className="flex items-center gap-2">
                  <h1 className="text-xl font-semibold flex gap-3">
                    Extra Deck: <WalletCards color="brown" />{" "}
                    <span>{extraDeck.length} cards</span>
                  </h1>
                  <CollapsibleTrigger asChild>
                    <Button variant="ghost">
                      <ChevronsUpDown />
                    </Button>
                  </CollapsibleTrigger>
                  {editMode !== "extra" && (
                    <Button
                      className="text-white"
                      type="button"
                      onClick={() => setEditMode("extra")}
                    >
                      <Pen />
                      Edit
                    </Button>
                  )}
                </div>
                <CollapsibleContent className="flex gap-1 flex-wrap">
                  {extraDeck.map((card, index) => (
                    <DeckCard
                      key={`${card.id}-${index}`}
                      card={card}
                      onCardAction={removeCard}
                    />
                  ))}
                </CollapsibleContent>
              </Collapsible>
              <Collapsible>
                <div className="flex items-center gap-2">
                  <h1 className="text-xl font-semibold flex gap-3">
                    Side Deck: <WalletCards color="brown" />{" "}
                    <span>{sideDeck.length} cards</span>
                  </h1>
                  <CollapsibleTrigger asChild>
                    <Button variant="ghost">
                      <ChevronsUpDown />
                    </Button>
                  </CollapsibleTrigger>
                  {editMode !== "side" && (
                    <Button
                      className="text-white"
                      type="button"
                      onClick={() => setEditMode("side")}
                    >
                      <Pen />
                      Edit
                    </Button>
                  )}
                </div>
                <CollapsibleContent className="flex gap-1 flex-wrap">
                  {sideDeck.map((card, index) => (
                    <DeckCard
                      key={`${card.id}-${index}`}
                      card={card}
                      onCardAction={removeCard}
                    />
                  ))}
                </CollapsibleContent>
              </Collapsible>
            </div>
            <div>
              <AllCardsList onAddCard={addCard} />
            </div>
          </div>
        </div>
      </form>
    </Form>
  );
}
