"use strict";
(() => {
var exports = {};
exports.id = 892;
exports.ids = [892,396];
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

/***/ }),

/***/ 1079:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _firebase_fbAdmin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(834);
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

async function handler(req, res) {
  if (req.method === 'POST') {
    let {
      disable,
      uid
    } = req.body; //console.log(uid)

    let users = [];
    await _firebase_fbAdmin__WEBPACK_IMPORTED_MODULE_0__/* .default.auth */ .Z.auth().updateUser(uid, {
      disabled: disable
    }).then(userRecord => {
      let users = userRecord; //console.log('Successfully updated user', userRecord.toJSON());
    }).catch(error => {
      console.log('Error listing users:', error);
    });
    res.status(200).json({
      status: "SUCCESS",
      data: users
    });
  } else {
    res.status(405).json({
      status: 'METHOD_NOT_SUPPORTED'
    });
  }
}

/***/ }),

/***/ 4054:
/***/ ((module) => {

module.exports = require("firebase-admin");

/***/ }),

/***/ 8951:
/***/ ((module) => {

module.exports = require("next/config");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(1079));
module.exports = __webpack_exports__;

})();