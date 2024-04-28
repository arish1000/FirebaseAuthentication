import {  createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import useFirebase from "../../utils/hooks/useFirebase";
import { addDoc, deleteDoc, doc, getDoc, getDocs, updateDoc } from "firebase/firestore";

const login = (params: any) => {
    const {auth, email, password} = params;
    return signInWithEmailAndPassword(auth, email, password);
}

const signup = (params: any) => {
    const {auth, email, password} = params;
    return createUserWithEmailAndPassword(auth, email, password);
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

const deleteProduct = (productRef: any) => {
    return deleteDoc(productRef);
}

export const firebaserServices = {
 login,
 signup,
 getAllProducts,
 addProduct,
 getProduct,
 updateProduct,
 deleteProduct
}