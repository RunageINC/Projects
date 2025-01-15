import { z } from "zod";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { useForm } from "react-hook-form";

const loginFormSchema = z.object({
  username: z
    .string()
    .nonempty()
    .min(6, {
      message: "Username must be at least 6 characters",
    })
    .max(50),
  password: z
    .string()
    .nonempty()
    .min(6, {
      message: "Password must be at least 6 characters",
    })
    .max(50),
});

export const AccountForm = ({
  action,
  onSubmitAction,
}: {
  action: string;
  onSubmitAction: (values: any) => void;
}) => {
  const loginForm = useForm<z.infer<typeof loginFormSchema>>({
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof loginFormSchema>) => {
    onSubmitAction(values);
    loginForm.reset();
  };

  return (
    <Form {...loginForm}>
      <form onSubmit={loginForm.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={loginForm.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="Insert your username" {...field} />
              </FormControl>
              <FormDescription>
                This is your username for the account
              </FormDescription>
            </FormItem>
          )}
        />
        <FormField
          control={loginForm.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input type="password" {...field} />
              </FormControl>
              <FormDescription>
                This is your password for the account
              </FormDescription>
            </FormItem>
          )}
        />
        <Button type="submit">{action}</Button>
      </form>
    </Form>
  );
};
