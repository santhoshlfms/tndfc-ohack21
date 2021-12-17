"use strict";
(() => {
var exports = {};
exports.id = 811;
exports.ids = [811];
exports.modules = {

/***/ 1168:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _firebase_fbAdmin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(834);
/* harmony import */ var _schema_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(553);
/* harmony import */ var _middleware_validate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4653);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction




const handler = async (req, res) => {
  let {
    mobileNo
  } = req.body;
  const doc = await _firebase_fbAdmin__WEBPACK_IMPORTED_MODULE_0__/* .default.collection */ .Z.collection('application').doc(mobileNo).set(req.body, {}).then(() => {
    res.status(200).json(_objectSpread(_objectSpread({}, req.body), {}, {
      method: req.method
    }));
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_middleware_validate__WEBPACK_IMPORTED_MODULE_2__/* .validate */ .G)(_schema_user__WEBPACK_IMPORTED_MODULE_1__/* .userSchema */ .I, handler));

/***/ }),

/***/ 4054:
/***/ ((module) => {

module.exports = require("firebase-admin");

/***/ }),

/***/ 2470:
/***/ ((module) => {

module.exports = require("moment");

/***/ }),

/***/ 8951:
/***/ ((module) => {

module.exports = require("next/config");

/***/ }),

/***/ 9440:
/***/ ((module) => {

module.exports = require("yup");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [396,574], () => (__webpack_exec__(1168)));
module.exports = __webpack_exports__;

})();