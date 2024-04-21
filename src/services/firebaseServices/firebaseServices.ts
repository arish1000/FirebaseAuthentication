import {  signInWithEmailAndPassword } from "firebase/auth";

const login = (params: any) => {
    const {auth, email, password} = params;
    return signInWithEmailAndPassword(auth, email, password);
}

export const firebaserServices = {
 login,
}