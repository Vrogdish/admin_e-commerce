"use client";
import useAuthState from "@/hooks/use-auth-state";
import React, { ReactNode, useEffect, useState } from "react";
import LoginForm from "./LoginForm";
import Spinner from "./Spinner";

interface Props {
  children: ReactNode;
}

export default function Session({ children }: Props) {
  // const [isLoggin, setIsLoggin] = useState(false);
  // const [isLoading, setIsLoading] = useState(true);

  const { authUser, authLoading } = useAuthState();

  // useEffect(() => {
  //   authLoading ? setIsLoading(true) : setIsLoading(false);
  //   authUser ? setIsLoggin(true) : setIsLoggin(false);
  // }, [authLoading, authUser]);

  if (!authLoading) {
    if (authUser) {
      return <>{children}</>;
    } else {
      return (
        <main>
          <h1 className="text-2xl text-center py-6">Login</h1>
          <LoginForm />
        </main>
      );
    }
  } else {
    return (
      <main>
        <Spinner />
      </main>
    );
  }
}
