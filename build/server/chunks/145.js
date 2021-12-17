"use strict";
exports.id = 145;
exports.ids = [145];
exports.modules = {

/***/ 4145:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ useAuth),
/* harmony export */   "Z": () => (/* binding */ AuthProvider)
/* harmony export */ });
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5942);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_auth__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _firebase_fbClient__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8833);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




const AuthContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({
  currentUser: undefined
});
const useAuth = () => {
  return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AuthContext);
}; // eslint-disable-next-line

function AuthProvider({
  children
}) {
  const {
    0: currentUser,
    1: setCurrentUser
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(undefined); // Update the currentUser when the ID token is changed.

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    return (0,firebase_auth__WEBPACK_IMPORTED_MODULE_0__.getAuth)().onIdTokenChanged(async user => {
      setCurrentUser(user);
    });
  }, []); // Force refresh the token every 10 minutes.

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    const handle = setInterval(async () => {
      const user = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_0__.getAuth)().currentUser;
      if (user) await user.getIdToken(true);
    }, 10 * 60 * 1000);
    return () => clearInterval(handle);
  }, []);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(AuthContext.Provider, {
    value: {
      currentUser
    },
    children: children
  });
}

/***/ })

};
;