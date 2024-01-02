import { db, storage } from "@/config/firebase";
import { InputsProduct, Product } from "@/types/product";
import {
  FirestoreError,
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  onSnapshot,
  query,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytes,
} from "firebase/storage";



export const getProducts = async () => {
  const products: Product[] = [];
  try {
    const q = query(collection(db, "products"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      products.push({
        name: doc.data().name,
        id: doc.id,
        description: doc.data().description,
        price: doc.data().price,
        imageUrl: doc.data().imageUrl,
        quantity: doc.data().quantity,
      });
    });
    return { data: products };
  } catch (error) {
    const firebaseError = error as FirestoreError;
    return { error: firebaseError.message };
  }
};

export const addProduct = async (product: InputsProduct) => {
  try {
    const docRef = await addDoc(collection(db, "products"), {
      name: product.name,
      description: product.description,
      price: product.price,
      quantity: product.quantity,
    });

    const fileRef = ref(storage, `products/${docRef.id}`);
    await uploadBytes(fileRef, product.imageFile[0]);
    const imageUrl = await getDownloadURL(fileRef);

    await updateDoc(docRef, { imageUrl: imageUrl });

    return { data: docRef.id };
  } catch (error) {
    const firebaseError = error as FirestoreError;
    console.log(error);
    return { error: firebaseError.message };
  }
};

export const removeProduct = async (id: string) => {
  try {
    const fileRef = ref(storage, `products/${id}`);
    getDownloadURL(fileRef).then(() => {
      deleteObject(fileRef).catch((error) => {console.log(error);});
    });
    await deleteDoc(doc(db, "products", id));

    return { data: id };
  } catch (error) {
    const firebaseError = error as FirestoreError;
    console.log(error);
    return { error: firebaseError.message };
  }
};
