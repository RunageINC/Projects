import { z } from "zod";
import { getAllTraits } from "@/api/traits/get-traits";
import { registerTrait } from "@/api/traits/register-new-trait";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Save } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { queryClient } from "@/lib/react-query";

const traitSchema = z.object({
  name: z.string(),
  description: z.string(),
});

type TraitFormSchema = z.infer<typeof traitSchema>;

export function TraitsPage() {
  const { data: traitsResult = [] } = useQuery({
    queryKey: ["traits"],
    queryFn: getAllTraits,
    refetchInterval: Infinity,
    retry: false,
    staleTime: Infinity,
  });

  const { mutateAsync: registerTraitFn, isPending: registerIsLoading } =
    useMutation({
      mutationFn: async (data: TraitFormSchema) => {
        await registerTrait(data);
        return queryClient.invalidateQueries({
          queryKey: ["traits"],
          refetchType: "all",
        });
      },
    });

  const form = useForm<TraitFormSchema>({
    resolver: zodResolver(traitSchema),
  });

  const handleRegisterTrait = async (data: TraitFormSchema) => {
    try {
      console.log("registering");
      await registerTraitFn(data);

      toast.success("Trait registered successfully");
    } catch {
      toast.error("Something went wrong when registering trait");
    }
  };

  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-5">
      <h1 className="text-2xl font-semibold">Traits</h1>

      <div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleRegisterTrait)}
            className="grid w-full grid-cols-12 gap-5"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="col-span-3">
                  <FormLabel>Trait Name</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem className="col-span-7">
                  <FormLabel>Trait Description</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <Button
              type="submit"
              disabled={registerIsLoading}
              className="col-span-2 mt-5 bg-green-500 hover:bg-green-800"
            >
              <Save /> Save
            </Button>
          </form>
        </Form>
      </div>

      <Table>
        <TableCaption>List of traits registered</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>#</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Description</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {traitsResult &&
            traitsResult.length > 0 &&
            traitsResult.map((trait) => (
              <TableRow key={trait.id}>
                <TableCell>{trait.id}</TableCell>
                <TableCell>{trait.name}</TableCell>
                <TableCell>{trait.description}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </div>
  );
}
