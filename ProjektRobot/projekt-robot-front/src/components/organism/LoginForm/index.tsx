"use client";

import { AccountForm } from "@/components/molecules/AccountForm";

import { login } from "@/api/account";
import { toast } from "sonner";

export const LoginForm = () => {
  const handleLogin = (values: UserRegisterOrLogin) => {
    login(values).then((res) => {
      if (res.status === 404) {
        toast.error("User account not found");
      } else if (res.status === 400) {
        toast.error("Invalid credentials");
      } else {
        toast.success("Login successful");
      }
    });
  };

  return (
    <div className="mt-[20px]">
      <AccountForm action="Login" onSubmitAction={handleLogin} />
    </div>
  );
};
