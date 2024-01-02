"use client";

import { auth } from "@/config/firebase";
import { useProductsStorage } from "@/store/dataStorage";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

interface UserInterface {
  uid: string;
  email: string | null;
}

export default function useAuthState() {
  const [authUser, setAuthUser] = useState<UserInterface | null>(null);
  const [authLoading, setAuthLoading] = useState(true);
  const loadProducts = useProductsStorage((state) => state.loadProducts);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser({ uid: user.uid, email: user.email });
        setAuthLoading(false)
      } else {
        setAuthUser(null);
        setAuthLoading(false)
      }
    });
  }, [loadProducts]);

  return { authUser, authLoading };
}
