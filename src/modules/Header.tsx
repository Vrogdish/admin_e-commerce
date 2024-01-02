"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import useAuthState from "@/hooks/use-auth-state";
import { logOut } from "@/firebase/auth";

export default function Header() {
  const [isLogged, setIslogged] = useState(false);

  const { authUser, authLoading } = useAuthState();

  useEffect(() => {
    if (authUser && !authLoading) {
      setIslogged(true);
    }else {
      setIslogged(false)
    }
  }, [authLoading, authUser]);

  return (
    <header className="flex py-10 px-20 text-right justify-end">
      {isLogged ? (
        <div className="flex items-center gap-2">
          <p className="mr-10">Bienvenue user</p>
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => logOut()}
          >
            <Image
              src={"/icons/logout.png"}
              alt="logout"
              width={20}
              height={20}
            />
            <span className="cursor-pointer">Logout</span>
          </div>
        </div>
      ) : (
        <div className="flex items-center gap-2">
          <Image src={"/icons/user.png"} alt="login" width={20} height={20} />
          Login
        </div >
      )}
    </header>
  );
}
