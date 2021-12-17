const admin = require("firebase-admin");
import getConfig from "next/config";
import ServiceAccount from "../firebaseconfig.json";


if (!admin.apps.length) {
  const { publicRuntimeConfig } = getConfig();

  if (process.env.NODE_ENV === "development") {
    process.env.FIREBASE_AUTH_EMULATOR_HOST = `localhost:${publicRuntimeConfig.firebaseEmulators.auth.port}`;
    process.env.FIREBASE_DATABASE_EMULATOR_HOST = `localhost:${publicRuntimeConfig.firebaseEmulators.database.port}`;
    process.env.FIRESTORE_EMULATOR_HOST = `localhost:${publicRuntimeConfig.firebaseEmulators.firestore.port}`;
    process.env.FIREBASE_STORAGE_EMULATOR_HOST = `localhost:${publicRuntimeConfig.firebaseEmulators.storage.port}`;
  }

  admin.initializeApp({
    projectId: "tdfct-7491d",
    credential: admin.credential.cert(ServiceAccount),
  });
}else {
  console.log("Admin else")
}
let fbAdmin = admin//.firestore()

export default fbAdmin;