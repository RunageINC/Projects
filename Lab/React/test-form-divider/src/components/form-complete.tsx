import z from "zod";
import { FormProvider, useForm } from "react-hook-form";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { toast } from "sonner";
import { AddressForm } from "./form-address";

const woAddress = z.object({
  name: z.string(),
  email: z.string(),
  hasAddress: z.literal(false),
});

const wAddress = z.object({
  name: z.string(),
  email: z.string(),
  hasAddress: z.literal(true),
  city: z.string(),
  zipcode: z.string(),
});

const formSchema = z.discriminatedUnion("hasAddress", [woAddress, wAddress]);

type FormType = z.infer<typeof formSchema>;

export const FormComplete = () => {
  const form = useForm<FormType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      hasAddress: false,
    },
  });

  const hasAddressWatch = form.watch("hasAddress");

  const onSubmit = (values: FormType) => {
    toast("You submitted the following values", {
      description: (
        <pre className="mt-2 w-[320px] rounded-md bg-neutral-950 p-4">
          <code className="text-white">{JSON.stringify(values, null, 2)}</code>
        </pre>
      ),
    });
  };

  return (
    <FormProvider {...form}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="shadcn" {...field} />
                </FormControl>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="shadcn" {...field} />
                </FormControl>
                <FormDescription>
                  This is your public display email.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="hasAddress"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Has Address?</FormLabel>
                <FormControl>
                  <Switch
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {hasAddressWatch && <AddressForm />}
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </FormProvider>
  );
};
