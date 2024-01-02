"use client"

import Button from "@/components/Button";
import Card from "@/components/Card";
import { getProducts } from "@/firebase/datas";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import ProductTable from "@/components/ProductTable";
import { useProductsStorage } from "@/store/dataStorage";

export default  function page() {
  // const products = await getProducts();

  

  return (
    <main>
      <h1 className="text-center text-2xl py-6">Gestion des stocks</h1>

      <div>
        <Link href={"/products/add"}>
          <Button
            type="button"
            className="m-10 flex items-center gap-6 px-10 py-4"
          >
            <Image
              src={"/icons/add.png"}
              alt="ajouter"
              width={30}
              height={30}
            />
            Ajouter un nouveau produit
          </Button>
        </Link>

        <Card
          title="Liste des produits disponible à la vente :"
          className="my-20"
        >
         
            <ProductTable  />
      
        </Card>
      </div>
    </main>
  );
}
