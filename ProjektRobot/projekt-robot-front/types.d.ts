interface UserProps {
  id: number;
  username: string;
  password: string;
}

type UserRegisterOrLogin = Pick<UserProps, "username" | "password">;
