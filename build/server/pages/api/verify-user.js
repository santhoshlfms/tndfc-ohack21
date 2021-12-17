"use strict";
(() => {
var exports = {};
exports.id = 71;
exports.ids = [71];
exports.modules = {

/***/ 9466:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _firebase_fbAdmin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(834);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9722);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__);
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction


async function handler(req, res) {
  if (req.method === 'POST') {
    let {
      mobileNo
    } = req.body;
    let TOP_USERS = [{"email":"santhoshlfms@gmail.com","password":"12345678","displayName":"Santhosh Nelson","emailVerified":true,"disabled":false},{"email":"muru@gmail.com","password":"12345678","displayName":"Muru S","emailVerified":true,"disabled":false}] || 0;

    if (mobileNo != undefined) {
      const applicationRef = _firebase_fbAdmin__WEBPACK_IMPORTED_MODULE_0__/* .default.collection */ .Z.collection('application');
      await applicationRef.doc(mobileNo).get().then(docRef => {
        let userDoc = docRef.data();

        if (userDoc) {
          //let isAdmin = TOP_USERS.includes(mobileNo);
          // we need to create JWT here and for future calls we need to use the same token
          const claims = {
            userId: mobileNo
          }; //console.log(mobileNo, process.env.SIGNING_TOKEN)

          const jwt = (0,jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__.sign)(claims, "158AC701-C10C-4603-B693-F255A112F6DC", {
            expiresIn: '1h'
          });
          res.status(200).json({
            status: 'success',
            data: userDoc,
            accessToken: jwt
          });
        } else {
          res.status(200).json({
            status: 'NO_DATA_FOUND',
            data: {}
          });
        }
      }).catch(error => {});
    } else {
      res.status(200).json({
        status: 'NO_DATA_FOUND',
        data: {}
      });
    }
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

/***/ 9722:
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ 8951:
/***/ ((module) => {

module.exports = require("next/config");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [396], () => (__webpack_exec__(9466)));
module.exports = __webpack_exports__;

})();