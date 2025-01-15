"use client";

import { registerNewAccount, verifyAccountExists } from "@/api/account";
import { AccountForm } from "@/components/molecules/AccountForm";

import { toast } from "sonner";

export const RegisterForm = () => {
  const handleRegister = (values: UserRegisterOrLogin) => {
    verifyAccountExists(values.username).then((res) => {
      console.log(res);
      if (res.status === 200) {
        toast.warning("There's already an account with this username");
      } else if (res.status === 500) {
        toast.error("Something went wrong with the server :(");
      } else if (res.status === 404) {
        registerNewAccount(values).then((res) => {
          const { status } = res;

          if (status === 201) {
            toast.success("Account created successfully");
          } else if (status === 400) {
          } else if (status === 500) {
          }
        });
      }
    });
  };

  return <AccountForm action="Register" onSubmitAction={handleRegister} />;
};
