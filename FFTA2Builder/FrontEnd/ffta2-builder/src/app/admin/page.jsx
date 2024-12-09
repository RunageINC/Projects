"use client";

import { RaceForm } from "@/components/templates/RaceForm";

const Admin = () => {
  const handleSomething = () => {};

  return (
    <div className="pl-5 h-[100%]">
      <article className="prose prose-l prose-stone">
        <h1>Register Race</h1>
      </article>
      <div>
        <RaceForm />
      </div>
      <h1>Register Character</h1>
      <h1>Register Equipment</h1>
      <h1>Register Skill</h1>
    </div>
  );
};

export default Admin;
