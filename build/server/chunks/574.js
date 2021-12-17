"use strict";
exports.id = 574;
exports.ids = [574];
exports.modules = {

/***/ 4653:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "G": () => (/* binding */ validate)
/* harmony export */ });
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9440);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_0__);

function validate(schema, handler) {
  return async (req, res) => {
    let API_METHOD = req !== null && req !== void 0 && req.method ? req.method : "";

    if (['POST', 'PUT'].includes(API_METHOD)) {
      try {
        const newSchema = req.method === 'POST' ? schema.concat((0,yup__WEBPACK_IMPORTED_MODULE_0__.object)({
          status: (0,yup__WEBPACK_IMPORTED_MODULE_0__.string)().required().default('NEW')
        })) : schema.concat((0,yup__WEBPACK_IMPORTED_MODULE_0__.object)({
          mobileNo: (0,yup__WEBPACK_IMPORTED_MODULE_0__.string)().required().min(10).max(10)
        }));
        req.body = await newSchema.validate(req.body, {
          abortEarly: false,
          stripUnknown: true
        });
      } catch (error) {
        return res.status(400).json(error);
      }
    }

    await handler(req, res);
  };
}

/***/ }),

/***/ 553:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* binding */ userSchema)
/* harmony export */ });
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9440);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_0__);


var moment = __webpack_require__(2470);

const userSchema = (0,yup__WEBPACK_IMPORTED_MODULE_0__.object)({
  mobileNo: (0,yup__WEBPACK_IMPORTED_MODULE_0__.string)().required().min(10),
  status: (0,yup__WEBPACK_IMPORTED_MODULE_0__.mixed)().oneOf(["NEW", "APPROVED", "DECLINED", "MORE_INFO"]),
  name: (0,yup__WEBPACK_IMPORTED_MODULE_0__.string)().required().min(3),
  email: (0,yup__WEBPACK_IMPORTED_MODULE_0__.string)().optional(),
  fatherName: (0,yup__WEBPACK_IMPORTED_MODULE_0__.string)().min(3),
  motherName: (0,yup__WEBPACK_IMPORTED_MODULE_0__.string)().min(3),
  guardianName: (0,yup__WEBPACK_IMPORTED_MODULE_0__.string)().optional().min(3),
  wifeName: (0,yup__WEBPACK_IMPORTED_MODULE_0__.string)().optional().min(3),
  husbandName: (0,yup__WEBPACK_IMPORTED_MODULE_0__.string)().optional().min(3),
  applications: (0,yup__WEBPACK_IMPORTED_MODULE_0__.string)(),
  relationshipWithGuardian: (0,yup__WEBPACK_IMPORTED_MODULE_0__.string)().optional(),
  address: (0,yup__WEBPACK_IMPORTED_MODULE_0__.object)({
    line1: (0,yup__WEBPACK_IMPORTED_MODULE_0__.string)().optional(),
    line2: (0,yup__WEBPACK_IMPORTED_MODULE_0__.string)().optional(),
    line3: (0,yup__WEBPACK_IMPORTED_MODULE_0__.string)().optional(),
    city: (0,yup__WEBPACK_IMPORTED_MODULE_0__.string)().optional(),
    district: (0,yup__WEBPACK_IMPORTED_MODULE_0__.string)().optional(),
    state: (0,yup__WEBPACK_IMPORTED_MODULE_0__.string)().optional(),
    country: (0,yup__WEBPACK_IMPORTED_MODULE_0__.string)().optional(),
    pinCode: (0,yup__WEBPACK_IMPORTED_MODULE_0__.string)().optional()
  }).default(undefined),
  aadharNo: (0,yup__WEBPACK_IMPORTED_MODULE_0__.string)().optional(),
  panNo: (0,yup__WEBPACK_IMPORTED_MODULE_0__.string)().optional(),
  voterId: (0,yup__WEBPACK_IMPORTED_MODULE_0__.string)().optional(),
  disabledGovernmentId: (0,yup__WEBPACK_IMPORTED_MODULE_0__.string)().optional(),
  rationCard: (0,yup__WEBPACK_IMPORTED_MODULE_0__.string)().optional(),
  sex: (0,yup__WEBPACK_IMPORTED_MODULE_0__.string)().optional(),
  education: (0,yup__WEBPACK_IMPORTED_MODULE_0__.string)().optional(),
  bloodGroup: (0,yup__WEBPACK_IMPORTED_MODULE_0__.string)().optional(),
  dob: (0,yup__WEBPACK_IMPORTED_MODULE_0__.string)().optional(),
  disability: (0,yup__WEBPACK_IMPORTED_MODULE_0__.string)().optional(),
  natureOfDisability: (0,yup__WEBPACK_IMPORTED_MODULE_0__.string)().optional(),
  documents: (0,yup__WEBPACK_IMPORTED_MODULE_0__.string)().optional(),
  jobApplication: (0,yup__WEBPACK_IMPORTED_MODULE_0__.object)({
    status: (0,yup__WEBPACK_IMPORTED_MODULE_0__.string)().optional(),
    applicationType: (0,yup__WEBPACK_IMPORTED_MODULE_0__.string)().required(),
    date: (0,yup__WEBPACK_IMPORTED_MODULE_0__.string)().required(),
    jobType: (0,yup__WEBPACK_IMPORTED_MODULE_0__.string)().optional(),
    experience: (0,yup__WEBPACK_IMPORTED_MODULE_0__.boolean)().optional(),
    trainingNeeded: (0,yup__WEBPACK_IMPORTED_MODULE_0__.boolean)().optional(),
    trainingDetails: (0,yup__WEBPACK_IMPORTED_MODULE_0__.string)().optional(),
    expectedSalary: (0,yup__WEBPACK_IMPORTED_MODULE_0__.string)().optional(),
    nightShits: (0,yup__WEBPACK_IMPORTED_MODULE_0__.boolean)().optional(),
    relocate: (0,yup__WEBPACK_IMPORTED_MODULE_0__.boolean)().optional(),
    otherInfo: (0,yup__WEBPACK_IMPORTED_MODULE_0__.string)().optional(),
    supportingDocuments: (0,yup__WEBPACK_IMPORTED_MODULE_0__.array)().optional()
  }).default(undefined)
});

/***/ })

};
;