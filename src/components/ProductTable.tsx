"use client";

import { removeProduct } from "@/firebase/datas";
import { useProductsStorage } from "@/store/dataStorage";
import { Product } from "@/types/product";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

interface Props {
  products: Product[];
}

export default function ProductTable() {
  const router = useRouter();

  const products = useProductsStorage((state)=>(state.products))
  const loadProducts = useProductsStorage((state) => state.loadProducts)
 

  const handleDelete = async (id: string) => {
    if (confirm("Etes-vous sur de vouloir supprimer ce produit ?")) {
      await removeProduct(id);
      loadProducts()
      router.refresh();
    }
  };

  useEffect(()=>{
    loadProducts()
  },[loadProducts])

  if (products && products.length > 0 ) {
  return (
    <table className=" my-10 w-full">
      <thead>
        <tr>
          <th>Nom du produit</th>
          <th>Prix de vente</th>
          <th>Quantité</th>
          <th>Editer</th>
          <th>Supprimer</th>
        </tr>
      </thead>
      <tbody>
        {products.map((elem, index) => (
          <tr key={index}>
            <td className=" w-1/2">{elem.name}</td>
            <td className="text-center">{elem.price} €</td>
            <td className="text-center">{elem.quantity}</td>
            <td className="text-center">edit</td>
            <td
              className="text-center cursor-pointer"
              onClick={() => handleDelete(elem.id)}
            >
              delete
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );} else {return (<p>Aucun Produits</p>)}
}
