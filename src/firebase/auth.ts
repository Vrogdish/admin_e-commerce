import { auth } from "@/config/firebase";
import { FirebaseError } from "firebase/app";
import {  signInWithEmailAndPassword, signOut } from "firebase/auth";



export const logIn = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    return { data: userCredential };
  } catch (error) {
    const firebaseError = error as FirebaseError;
    return {
      error: { message: firebaseError.message, code: firebaseError.code },
    };
  }
};


export const logOut = () => {
  signOut(auth)
    .then(() => {console.log("bye");})
    .catch((error : any) => {console.log(error)});

};