"use strict";
exports.id = 531;
exports.ids = [531];
exports.modules = {

/***/ 5531:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ApplicationTable)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_data_table_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5739);
/* harmony import */ var react_data_table_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_data_table_component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_json_to_csv__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1825);
/* harmony import */ var react_json_to_csv__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_json_to_csv__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6731);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);







function ApplicationTable(props) {
  const {
    0: filteredApplications,
    1: setFilteredApplications
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const {
    data,
    pending
  } = props;
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
  const columns = [{
    name: "Mobile no",
    selector: row => row.mobileNo,
    sortable: true
  }, {
    name: "Name",
    selector: row => row.name,
    sortable: true
  }, {
    name: "Disability",
    selector: row => row.disability,
    sortable: true
  }, {
    name: "Education",
    selector: row => row.education
  }, {
    name: "Type",
    selector: row => findApplicationTag(row).toString()
  }, {
    name: "Status",
    selector: row => findApplicationStatus(row).toString()
  }, {
    name: "",
    cell: row => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("button", {
      onClick: () => viewApplication(row),
      children: "View "
    }),
    ignoreRowClick: true,
    button: true
  }];

  const findApplicationTag = row => {
    var temp = [];

    if ("jobApplication" in row) {
      temp.push("JOB");
    }

    return temp;
  };

  const findApplicationStatus = row => {
    var temp = [];

    if ("jobApplication" in row) {
      temp.push("JOB - " + row["jobApplication"]["status"]);
    }

    return temp;
  };

  const ExpandedComponent = ({
    data
  }) => {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("pre", {
      children: JSON.stringify(data, null, 2)
    });
  };

  const viewApplication = rowData => {
    var _router$query$next, _router$query;

    router.replace((_router$query$next = (_router$query = router.query) === null || _router$query === void 0 ? void 0 : _router$query.next) !== null && _router$query$next !== void 0 ? _router$query$next : `/dashboard/application/${rowData.mobileNo}`);
  };

  const tableData = {
    columns,
    data
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    className: "container",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("hr", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)((react_json_to_csv__WEBPACK_IMPORTED_MODULE_2___default()), {
      data: data,
      className: "btn btn-xs btn-warning",
      children: [" ", "Export Csv", " "]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx((react_data_table_component__WEBPACK_IMPORTED_MODULE_1___default()), {
      columns: columns,
      data: data,
      pagination: true,
      defaultSortAsc: false,
      progressPending: pending,
      expandableRows: true,
      expandableRowsComponent: ExpandedComponent,
      highlightOnHover: true,
      noHeader: true
    })]
  });
}

/***/ })

};
;