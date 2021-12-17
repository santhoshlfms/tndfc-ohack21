"use strict";
exports.id = 429;
exports.ids = [429];
exports.modules = {

/***/ 6429:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Reports)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_date_range__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(744);
/* harmony import */ var react_date_range__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_date_range__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);


 // main style file

 // theme css file



function Reports(props) {
  const [showCalendar, setShowCalendar] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(false);
  const [status, setStatus] = react__WEBPACK_IMPORTED_MODULE_0___default().useState([]);
  const options = [{
    id: 1,
    value: "APPROVED"
  }, {
    id: 2,
    value: "DECLINED"
  }, {
    id: 3,
    value: "NEW"
  }, {
    id: 4,
    value: "MORE_INFO"
  }];

  const handleSelect = item => {
    let temp = status;
    let i = item.value;
    temp.indexOf(i) === -1 ? temp.push(i) : temp.splice(temp.indexOf(i), 1);
    setStatus(temp);
    props.filterStatus(status);
  };

  const selectionRange = {
    startDate: new Date(),
    endDate: new Date(),
    key: "selection"
  };

  const handleCalendarShowHide = () => {
    setShowCalendar(!showCalendar);
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    children: ["Reports", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
      className: "form-inline",
      children: options.map((item, i) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "custom-control custom-checkbox",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("input", {
          className: "custom-control-input custom-control-input-success custom-control-input-outline ml-2",
          type: "checkbox",
          id: `customCheckbox${item.id}`,
          value: item.id,
          onChange: () => {
            handleSelect(item);
          }
        }, item.id), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("label", {
          htmlFor: `customCheckbox${item.id}`,
          className: "custom-control-label mr-2  ",
          children: [item.value, " "]
        })]
      }, i))
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
      className: "row",
      children: showCalendar ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(react_date_range__WEBPACK_IMPORTED_MODULE_1__.DateRangePicker, {
        ranges: [selectionRange],
        onChange: handleSelect
      }) : null
    })]
  });
}

/***/ })

};
;