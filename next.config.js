/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env: {
    MONGO_URI: "mongodb://localhost:27017/tndfctrust",
  },
  i18n: {
    locales: ["en-US"],
    defaultLocale: "en-US",
  },

  publicRuntimeConfig: {
    firebaseApp: {
      apiKey: "AIzaSyCAQo5vjggG29DeWVB3M8PpxiIpevtKyls",
      authDomain: "tndfc-app.firebaseapp.com",
      databaseURL: `https://ndfc-9e250.firebaseio.com`,
      projectId: "tndfc-app",
      storageBucket: "tndfc-app.appspot.com",
      MessagingSenderId: "461564452227",
      appId: "1:461564452227:web:92adb403e007de51de6ab6",
    },
    firebaseEmulators: require("./firebase.json").emulators,
  }
};

