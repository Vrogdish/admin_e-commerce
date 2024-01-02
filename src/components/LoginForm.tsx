"use client";

import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Button from "./Button";
import { logIn } from "@/firebase/auth";
import { useRouter } from "next/navigation";

type Inputs = {
  email: string;
  password: string;
};

export default function LoginForm() {
  const { register, handleSubmit } = useForm<Inputs>();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const router = useRouter();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setLoading(true);
    const user = await logIn(data.email, data.password);
    if (user.error) {
      setError(true);
    } else if (user.data) {
      router.push("/");
    }
    setLoading(false);
  };
  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col w-96 m-auto py-10"
      >
        <label htmlFor="email">Adresse mail :</label>
        <input
          type="email"
          className="mb-10"
          {...register("email", { required: true })}
        />

        <label htmlFor="password">Mot de passe :</label>
        <input
          type="password"
          className="mb-20"
          {...register("password", { required: true })}
        />

        {loading ? (
          <Button theme="disable" type="button">
            Connexion en cours ...
          </Button>
        ) : (
          <Button type="submit">Se connecter</Button>
        )}
      </form>
      {error && (
        <p className="text-center text-red-500">
          Email ou mot de passe incorrect
        </p>
      )}
    </>
  );
}
