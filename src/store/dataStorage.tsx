import { getProducts } from "@/firebase/datas";
import { Product } from "@/types/product";
import { create } from "zustand";

interface ProductsState {
  products: Product[] | null;
  addProduct: (product: Product) => void;
  removeProduct: (id: string) => void;
  loadProducts: () => void;
}

export const useProductsStorage = create<ProductsState>((set) => ({
  products: null,
  addProduct: (product) => {},
  removeProduct: (id) => set({}),
  loadProducts: async () => {
    const products = await getProducts()
    products.data && set({products : products.data})
  } ,
}));
