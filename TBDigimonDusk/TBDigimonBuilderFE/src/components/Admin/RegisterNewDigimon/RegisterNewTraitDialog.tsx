import { registerTrait } from "@/api/traits/register-new-trait";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { PlusCircle, Save } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const traitSchema = z.object({
  name: z.string(),
  description: z.string(),
});

type TraitFormSchema = z.infer<typeof traitSchema>;

export const RegisterNewTraitDialog = ({
  className,
}: {
  className: string;
}) => {
  const { mutateAsync: registerTraitFn } = useMutation({
    mutationFn: registerTrait,
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
    <Dialog>
      <DialogTrigger>
        <Button variant="ghost" className={className}>
          <PlusCircle />
          Register New Trait
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Register a new trait to be used</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleRegisterTrait)}
            className="flex w-full flex-col gap-5"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
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
                <FormItem>
                  <FormLabel>Trait Description</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
          </form>
          <Button type="submit" className="bg-green-500 hover:bg-green-800">
            <Save /> Save
          </Button>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
