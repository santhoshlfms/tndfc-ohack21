/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  distDir: 'build',
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
      apiKey: "AIzaSyA8gem19RNVjjfKIK1t6U5x1mf7N8KLJNM",
      authDomain: "tdfct-7491d.firebaseapp.com",
      databaseURL: "https://tdfct-7491d-default-rtdb.firebaseio.com",
      projectId: "tdfct-7491d",
      storageBucket: "tdfct-7491d.appspot.com",
      messagingSenderId: "913117926204",
      appId: "1:913117926204:web:24a021bb1f029d56e0c439"
    },
    firebaseEmulators: require("./firebase.json").emulators,
  }
};

