import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyASfKkaAt_TjCk9Ih0lz4U0D7SaHYeMW3c",
  authDomain: "beycoin-6f133.firebaseapp.com",
  projectId: "beycoin-6f133",
  storageBucket: "beycoin-6f133.appspot.com",
  messagingSenderId: "329237793098",
  appId: "1:329237793098:web:c5a7c04a57f22e010999b3",
  measurementId: "G-HP0G0EEJ0Z",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
