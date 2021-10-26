/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env: {
    MONGO_URI: "mongodb://localhost:27017/tndfctrust",
    SIGNING_TOKEN: "158AC701-C10C-4603-B693-F255A112F6DC",
    USERS : [{ email: "santhoshlfms@gmail.com", password: "12345678", displayName: "Santhosh Nelson", emailVerified: true, disabled: false},
    { email: "muru@gmail.com", password: "12345678", displayName: "Muru S", emailVerified: true, disabled: false}]
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

