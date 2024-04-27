import {  signInWithEmailAndPassword } from "firebase/auth";
import useFirebase from "../../utils/hooks/useFirebase";
import { addDoc, getDoc, getDocs, updateDoc } from "firebase/firestore";

const login = (params: any) => {
    const {auth, email, password} = params;
    return signInWithEmailAndPassword(auth, email, password);
}

const getAllProducts = (productsCollection: any) => {
    return getDocs(productsCollection);
}

const addProduct = (collection : any,product_data : any) => {
    return addDoc(collection, product_data);
}

const getProduct = (productRef: any) => {
    return getDoc(productRef);
}

const updateProduct = (productRef: any, values: any) => {
    return updateDoc(productRef, values);
}

export const firebaserServices = {
 login,
 getAllProducts,
 addProduct,
 getProduct,
 updateProduct
}