"use strict";
(() => {
var exports = {};
exports.id = 635;
exports.ids = [635];
exports.modules = {

/***/ 4992:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Y": () => (/* binding */ authenticate)
/* harmony export */ });
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9722);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);

const authenticate = fn => async (req, res) => {
  console.log(req.headers.authorization);
  (0,jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__.verify)(req.headers.authorization, "158AC701-C10C-4603-B693-F255A112F6DC", async function (err, decoded) {
    console.log(err);

    if (!err && decoded) {
      return await fn(req, res);
    }

    res.status(404).json({
      status: "NOT_AUTHORIZED"
    });
  });
};

/***/ }),

/***/ 5136:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _firebase_fbAdmin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(834);
/* harmony import */ var _middleware_apiAuthenticate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4992);
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_middleware_apiAuthenticate__WEBPACK_IMPORTED_MODULE_1__/* .authenticate */ .Y)(async function handler(req, res) {
  if (req.method === 'GET') {
    let {
      userId
    } = req.query;

    if (userId != undefined) {
      const applicationRef = _firebase_fbAdmin__WEBPACK_IMPORTED_MODULE_0__/* .default.collection */ .Z.collection('application');
      await applicationRef.doc(userId).get().then(docRef => {
        let userDoc = docRef.data();

        if (userDoc) {
          res.status(200).json({
            status: 'success',
            data: userDoc
          });
        } else {
          res.status(200).json({
            status: 'NO_DATA_FOUND',
            data: {}
          });
        }
      }).catch(error => {
        console.log("Error fetching document");
      });
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
}));

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
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [396], () => (__webpack_exec__(5136)));
module.exports = __webpack_exports__;

})();