"use client";

import React, { useState } from "react";
import Button from "./Button";
import { SubmitHandler, useForm } from "react-hook-form";
import { addProduct } from "@/firebase/datas";
import { InputsProduct, Product } from "@/types/product";
import { useRouter } from "next/navigation";

export default function AddForm() {
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit } = useForm<InputsProduct>();

  const router = useRouter();

  const onSubmit: SubmitHandler<InputsProduct> = async (data) => {
    setIsLoading(true);
    const res = await addProduct(data);

    if (res.data) {
      router.push("/products");
    } else {
      alert("erreur sur le serveur")
    }

    setIsLoading(false);
  };

  return (
    <form
      className="flex flex-col w-96 mx-auto"
      onSubmit={handleSubmit(onSubmit)}
    >
      <label htmlFor="name">Nom du produit :</label>
      <input type="text" id="name" {...register("name")} />

      <label htmlFor="description">Déscription :</label>
      <textarea id="description" {...register("description")} />

      <label htmlFor="price">Prix de vente : </label>
      <input type="number" id="price" {...register("price")} />

      <label htmlFor="quantity">Quantité :</label>
      <input type="number" id="quantity" {...register("quantity")} />

      <label htmlFor="imageUrl">Photo du produit</label>
      <input type="file" id="imageUrl" {...register("imageFile")} />

      {!isLoading ? (
        <Button type="submit" className="my-10">
          Valider
        </Button>
      ) : (
        <Button theme="disable" type="button" className="my-10">
          Envoie en cours ...
        </Button>
      )}
    </form>
  );
}
