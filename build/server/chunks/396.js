"use strict";
exports.id = 396;
exports.ids = [396];
exports.modules = {

/***/ 834:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ firebase_fbAdmin)
});

// EXTERNAL MODULE: external "next/config"
var config_ = __webpack_require__(8951);
var config_default = /*#__PURE__*/__webpack_require__.n(config_);
;// CONCATENATED MODULE: ./firebaseconfig.json
const firebaseconfig_namespaceObject = JSON.parse('{"type":"service_account","project_id":"tdfct-7491d","private_key_id":"c06a196a79cdce1d9ce8fe7cf13675fbccca6735","private_key":"-----BEGIN PRIVATE KEY-----\\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQC2PlEUf7f7YZKJ\\ny3glL1bCgOuEKdPjcYqK2UNL/SgxO+r+uo2ciKLnQH0qCitHYWq5O5qJZQybBoLe\\nKhhgY9tFXpm1liWRaCU364FcbBrQ+gcxEY1AN1Uv+2byMQAXyuLNLRMwXNFR/dSY\\nPheSyFa0rzdPWnIlsy8GEwwrI2GBHHbtt0Jsbt/K23FnUrb8Cq9e1wf851BEpj2e\\nNnS8UgGdkWiq7jULflBTgpGpnu9B7Bvw0CC+DBdhSmpKUuuzWULBoVAWRw6njKzQ\\n8i9XWXJYjFLN1kocEZiYGgAygUIL1E3BhNfjmc+kRCyOuVTEdpShtMD2/e557p4R\\npF5gNzA9AgMBAAECggEAF06Z9Pquj243nPrSJ0NKH774H+Nvj1d+hepqUmYShVVp\\n5OD76miJGPUk7ML3LP5W9VCbn3W2an8nLn2It48dxF3oX5JPxKxikifC2AyVU2Oe\\nltZtT6ij8up+jHvazLAsWFwq55T/SjKhxUSvpByOBjagZrwk/BBR879s33l7Z1UC\\nnFDfQFgrNpXoXtcOGXUqMLS81dmM6D80HY4gP9mBpyZ7kjKeI2sqBbhNWedTRtSE\\nCE3bJIqFDWqZj6T/YuTg9Tu9S/Wph8LDF2zpiubiyR3nuhfBNLPaGLHGnx2cG9AW\\ntP1kv5VnxzLW6wmd9JzjGZomkfnzyE28v6TeGvOWmwKBgQDtWYCNj5CUMe/O8o1g\\nrkYv0b5YhMrIuY5s0F88u/nBGveefGcBT7miYW9Jja+hL2syF4dzJNpcTZAczH0e\\nJFn8yrvVslSAGkwFfG/El6AkPhpUQHSCpXuAmNe6LoqpAUR+QD0LyrQ675li1g2B\\nUSah2QqUjvQ2ithUyK0VoRwHSwKBgQDEkE3+a4oN/6o6JIUqy1LbVpQcO1Vc7Rad\\nBmZZ835PHtOOU4qBexFoDOnBc7YXcMhEZn1eAVuWdRh78NBxD59ynZTP2E3WFj8N\\n+x+3frrD9IUO6IoaSHqr/nf5ehVBsHfByeEShBGwmqAQS7i7FcMylubbqS+8uLBE\\n/06N8r/JlwKBgQDkgXGhWCFSe40ryRrRhJbv/Ndrs1Tj0LlNC4NVHohCIGta+tvU\\nSGQo7/NLdgwre1KRpFN0SHutt8LR5xFiDo9QMAKMpyZxOmAMPBQCyhOUMPH6QR+q\\nlBUF5qByj9JRCXZesgvTqXDA+OHMZNYVtQIjeaiVA9gcFqpVXeo9U6F/ZwKBgB0w\\nYKSbS5DwmlKwAaZtMwynOq9GkFKQUn9W5/QLmIIfTcMg3LyFjfwpjrzPdgbdFKAz\\nqAJBqVwaX1xoUku3yjG2/NYwhL555zsoQ3l4NDvNH8Uq+vcUNEM+Moq1elqa3e3F\\nEMszGX1kOMiytefyP15P0lBkO1aHBoX4c63YkmpZAoGBAN60H1FIktdPU5JY0AM2\\nRpaKDsxZYQ/TmHPTA7M5ZAzq0+bZXZ11YGDeYYib9zhV/sWSin94NQQ3uZlY2LL0\\nPt/2NOpGk6LqpmEovd1rFe6wZEBA+uHMvDmfVdzjdSI0njI3w/balezCNtOyuuKT\\n09pspL2eVgm6zR04Ci5hEZ2D\\n-----END PRIVATE KEY-----\\n","client_email":"firebase-adminsdk-283vc@tdfct-7491d.iam.gserviceaccount.com","client_id":"108068495692148190150","auth_uri":"https://accounts.google.com/o/oauth2/auth","token_uri":"https://oauth2.googleapis.com/token","auth_provider_x509_cert_url":"https://www.googleapis.com/oauth2/v1/certs","client_x509_cert_url":"https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-283vc%40tdfct-7491d.iam.gserviceaccount.com"}');
;// CONCATENATED MODULE: ./firebase/fbAdmin.ts
const admin = __webpack_require__(4054);




if (!admin.apps.length) {
  const {
    publicRuntimeConfig
  } = config_default()();

  if (false) {}

  admin.initializeApp({
    projectId: "tdfct-7491d",
    credential: admin.credential.cert(firebaseconfig_namespaceObject)
  });
} else {}

let fbAdmin = admin; //.firestore()

/* harmony default export */ const firebase_fbAdmin = (fbAdmin);

/***/ })

};
;