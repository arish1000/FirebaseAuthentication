import { initializeApp } from 'firebase/app';
import { firebaseConfig  } from '../helpers';
import { getAuth } from "firebase/auth";
import { useState } from 'react';
import {getFirestore} from "firebase/firestore"


const firebaseApp = initializeApp(firebaseConfig );
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);

const useFirebase = () => {
  
  return { firebaseApp, auth, db }
}

export default useFirebase;