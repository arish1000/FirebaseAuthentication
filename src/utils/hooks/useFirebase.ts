import { initializeApp } from 'firebase/app';
import { firebaseConfig  } from '../helpers';
import { getAuth } from "firebase/auth";
import { useState } from 'react';

const useFirebase = () => {
  const [firebaseApp, setFirebaseApp] = useState<any>(null);
  const [auth, setAuth] = useState<any>(null);

  if(!firebaseApp){
    const app = initializeApp(firebaseConfig );
    setFirebaseApp(app);
    const auth = getAuth(app);
    setAuth(auth);
  }
  
  return { auth }
}

export default useFirebase;