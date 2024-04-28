import { initializeApp } from "firebase/app";

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
import { getStorage } from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyABAPeYy2xq2zxBpfP-VidmcGhJuKZBfaQ",
  authDomain: "lifeofkaihackdavis2024.firebaseapp.com",
  projectId: "lifeofkaihackdavis2024",
  storageBucket: "lifeofkaihackdavis2024.appspot.com",
  messagingSenderId: "424632073739",
  appId: "1:424632073739:web:2206266b329fff2840110e",
};

const app = initializeApp(firebaseConfig);
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
export const storage = getStorage(app);
