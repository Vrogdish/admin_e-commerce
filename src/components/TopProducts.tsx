import React from "react";
import Card from "./Card";
import { getProducts } from "@/firebase/datas";

export default async function TopProducts() {
  const products = await getProducts();
  products.data && products.data.sort((a, b) => a.quantity - b.quantity);

  return (
    <Card title="Stock les plus faibles" link="/products">
      {products.data ? (
        products.data.map((elem, index) => (
          <div
            key={index}
            className={`flex justify-between ${
              elem.quantity < 100 && "text-red-400"
            }`}
          >
            <p>{elem.name}</p>
            <p>{elem.quantity}</p>
          </div>
        ))
      ) : (
        <p>Aucun produits</p>
      )}
    </Card>
  );
}
