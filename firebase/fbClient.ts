import getConfig from "next/config";
import { initializeApp, getApps } from "firebase/app";
import { browserLocalPersistence, getAuth, connectAuthEmulator } from "firebase/auth";
import { getDatabase, connectDatabaseEmulator } from "firebase/database";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";
import { getStorage, connectStorageEmulator } from "firebase/storage";

if (typeof window !== "undefined" && !getApps().length) {
  const { publicRuntimeConfig } = getConfig();

  initializeApp(publicRuntimeConfig.firebaseApp);

  if (process.env.NODE_ENV === "development") {
    connectAuthEmulator(
      getAuth(),
      `http://localhost:${publicRuntimeConfig.firebaseEmulators.auth.port}`
    );

    connectDatabaseEmulator(
      getDatabase(),
      "localhost",
      publicRuntimeConfig.firebaseEmulators.database.port
    );

    connectFirestoreEmulator(
      getFirestore(),
      "localhost",
      publicRuntimeConfig.firebaseEmulators.firestore.port
    );

    connectStorageEmulator(
      getStorage(),
      "localhost",
      publicRuntimeConfig.firebaseEmulators.storage.port
    );
  }

  getAuth().setPersistence(browserLocalPersistence);
}


/**
 * 
 * const firebaseConfig = {
  apiKey: "AIzaSyCAQo5vjggG29DeWVB3M8PpxiIpevtKyls",
  authDomain: "tndfc-app.firebaseapp.com",
  projectId: "tndfc-app",
  storageBucket: "tndfc-app.appspot.com",
  messagingSenderId: "461564452227",
  appId: "1:461564452227:web:92adb403e007de51de6ab6",
  measurementId: "G-EEJVZK173R"
};

 */