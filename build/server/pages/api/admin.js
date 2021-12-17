"use strict";
(() => {
var exports = {};
exports.id = 367;
exports.ids = [367];
exports.modules = {

/***/ 4992:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Y": () => (/* binding */ authenticate)
/* harmony export */ });
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9722);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);

const authenticate = fn => async (req, res) => {
  (0,jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__.verify)(req.headers.authorization, "158AC701-C10C-4603-B693-F255A112F6DC", async function (err, decoded) {
    if (!err && decoded) {
      return await fn(req, res);
    }

    res.status(404).json({
      status: "NOT_AUTHORIZED"
    });
  });
};

/***/ }),

/***/ 9549:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _firebase_fbAdmin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(834);
/* harmony import */ var _middleware_apiAuthenticate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4992);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_middleware_apiAuthenticate__WEBPACK_IMPORTED_MODULE_1__/* .authenticate */ .Y)(async function handler(req, res) {
  if (req.method === 'GET') {
    let {
      userId
    } = req.query;
    const entries = await _firebase_fbAdmin__WEBPACK_IMPORTED_MODULE_0__/* .default.collection */ .Z.collection('application').get();
    const entriesData = entries.docs.map(entry => _objectSpread({
      id: entry.id
    }, entry.data()));
    res.status(200).json({
      status: "SUCCESS",
      data: entriesData
    });
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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [396], () => (__webpack_exec__(9549)));
module.exports = __webpack_exports__;

})();