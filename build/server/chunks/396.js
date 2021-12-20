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
const firebaseconfig_namespaceObject = {};
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
} else {
  console.log("Admin else");
}

let fbAdmin = admin; //.firestore()

/* harmony default export */ const firebase_fbAdmin = (fbAdmin);

/***/ })

};
;