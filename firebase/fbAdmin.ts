const admin = require("firebase-admin");
import getConfig from "next/config";
//import ServiceAccount from "../service-account.json";


if (!admin.apps.length) {
  const { publicRuntimeConfig } = getConfig();

  if (process.env.NODE_ENV === "development") {
    process.env.FIREBASE_AUTH_EMULATOR_HOST = `localhost:${publicRuntimeConfig.firebaseEmulators.auth.port}`;
    process.env.FIREBASE_DATABASE_EMULATOR_HOST = `localhost:${publicRuntimeConfig.firebaseEmulators.database.port}`;
    process.env.FIRESTORE_EMULATOR_HOST = `localhost:${publicRuntimeConfig.firebaseEmulators.firestore.port}`;
    process.env.FIREBASE_STORAGE_EMULATOR_HOST = `localhost:${publicRuntimeConfig.firebaseEmulators.storage.port}`;
  }

  admin.initializeApp({
    projectId: "tndfc-app",
    credential: admin.credential.applicationDefault(),
    //credential: FirebaseAdmin.credential.cert(ServiceAccount),
  });
}
let fbAdmin = admin.firestore()

export default fbAdmin;