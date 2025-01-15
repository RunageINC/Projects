import Image from "next/image";

import { images } from "@/app/assets/indexes";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RegisterForm } from "@/components/organism/RegisterForm";
import { LoginForm } from "@/components/organism/LoginForm";
import { Separator } from "@/components/ui/separator";

export const HomeFormTemplate = () => {
  const onHandleSomething = () => {};

  return (
    <Card className="flex flex-col w-[800px] items-center">
      <CardHeader>
        <Image
          src={images.intro.url}
          alt={images.intro.alt}
          width={images.intro.width}
          height={images.intro.height}
        />
        <CardTitle className="text-center">Mega Man RPG</CardTitle>
      </CardHeader>
      <CardContent className="flex gap-[50px] m-5 justify-center items-center">
        <LoginForm />
        <Separator orientation="vertical" color="white" />
        <div>
          <p className="text-sm text-muted-foreground">
            Don&apos;t have an account yet? Register yourself
          </p>
          <RegisterForm />
        </div>
      </CardContent>
    </Card>
  );
};
