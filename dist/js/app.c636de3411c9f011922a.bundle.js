"use strict";
(self["webpackChunktypescript_react_webpack_express"] = self["webpackChunktypescript_react_webpack_express"] || []).push([["app"],{

/***/ 8375:
/*!****************************!*\
  !*** ./src/client/App.tsx ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ 9711);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ 6974);
/* harmony import */ var _view_HelloWorld__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view/HelloWorld */ 1069);
/* harmony import */ var _view_Hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view/Hooks */ 3377);
/* harmony import */ var _view_ErrorHandle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view/ErrorHandle */ 2735);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ 5893);







var App = function App() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_view_HelloWorld__WEBPACK_IMPORTED_MODULE_0__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {
      to: "/hooks",
      style: {
        padding: '20px'
      },
      children: "hooks"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {
      to: "/eh",
      style: {
        padding: '20px'
      },
      children: "error handle"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {
      to: "/",
      style: {
        padding: '20px'
      },
      children: "home"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("hr", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Routes, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Route, {
        path: "/",
        element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h2", {
          children: "select component"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Route, {
        path: "/hooks",
        element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_view_Hooks__WEBPACK_IMPORTED_MODULE_1__["default"], {})
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Route, {
        path: "/eh",
        element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_view_ErrorHandle__WEBPACK_IMPORTED_MODULE_2__["default"], {})
      })]
    })]
  });
};

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ 3798:
/*!********************************************!*\
  !*** ./src/client/Error/ErrorBoundary.tsx ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ 5671);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ 3144);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ 136);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ 2963);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ 1120);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ 7294);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ 5893);






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }





var ErrorBoundary = /*#__PURE__*/function (_Component) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(ErrorBoundary, _Component);

  var _super = _createSuper(ErrorBoundary);

  function ErrorBoundary(props) {
    var _this;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ErrorBoundary);

    _this = _super.call(this, props);
    _this.state = {
      hasError: false,
      error: null
    };
    return _this;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ErrorBoundary, [{
    key: "componentDidCatch",
    value: function componentDidCatch(error) {
      this.setState({
        hasError: true,
        error: error
      });
      return {
        hasError: true,
        error: error
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          hasError = _this$state.hasError,
          error = _this$state.error;
      var children = this.props.children;

      if (hasError && "development" === 'production') {}

      if (hasError && "development" === ('development' || 0)) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h1", {
            children: "!!Error!! Something went wrong. This is fallback UI"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h3", {
            children: error.name
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h3", {
            children: error.message
          })]
        });
      }

      return children;
    }
  }], [{
    key: "getDerivedStateFromError",
    value: function getDerivedStateFromError(error) {
      // Update state so the next render will show the fallback UI.
      return {
        hasError: true,
        error: error
      };
    }
  }]);

  return ErrorBoundary;
}(react__WEBPACK_IMPORTED_MODULE_5__.Component);

/* harmony default export */ __webpack_exports__["default"] = (ErrorBoundary);

/***/ }),

/***/ 2093:
/*!*******************************************!*\
  !*** ./src/client/Error/ErrorContext.tsx ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 7294);

var ErrorContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({
  hasError: false,
  errorMessage: null,
  error: null,
  setContextError: function setContextError() {
    return {};
  },
  setCotextErrorDone: function setCotextErrorDone() {
    return {};
  }
});
/* harmony default export */ __webpack_exports__["default"] = (ErrorContext);

/***/ }),

/***/ 4949:
/*!********************************************!*\
  !*** ./src/client/Error/ErrorProvider.tsx ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ 3324);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ 7294);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ 5697);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ErrorContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ErrorContext */ 2093);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ 5893);






var ErrorProvider = function ErrorProvider(_ref) {
  var children = _ref.children;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      hasError = _useState2[0],
      setHasError = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),
      _useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
      errorMessage = _useState4[0],
      setErrorMessage = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),
      _useState6 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState5, 2),
      error = _useState6[0],
      setError = _useState6[1];

  var setContextError = function setContextError(ErrorMessage, Error) {
    setErrorMessage(ErrorMessage);
    setError(Error);
    setHasError(true);
  };

  var setCotextErrorDone = function setCotextErrorDone() {
    setErrorMessage(null);
    setError(null);
    setHasError(false);
  };

  var errorValue = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function () {
    return {
      hasError: hasError,
      errorMessage: errorMessage,
      error: error,
      setContextError: setContextError,
      setCotextErrorDone: setCotextErrorDone
    };
  }, [hasError, errorMessage, error]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_ErrorContext__WEBPACK_IMPORTED_MODULE_2__["default"].Provider, {
    value: errorValue,
    children: children
  });
};

ErrorProvider.defaultProps = {
  children: {}
};
ErrorProvider.propTypes = {
  children: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().node)
};
/* harmony default export */ __webpack_exports__["default"] = (ErrorProvider);

/***/ }),

/***/ 3376:
/*!***************************************!*\
  !*** ./src/client/Error/useError.tsx ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 7294);
/* harmony import */ var _ErrorContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ErrorContext */ 2093);



var useError = function useError() {
  var context = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_ErrorContext__WEBPACK_IMPORTED_MODULE_1__["default"]);
  var setContextError = context.setContextError;

  if (context === undefined) {
    throw new Error("useError must be used within a ErrorProvider");
  }

  var customErrorThrow = function customErrorThrow(error) {
    var axiosError = error;

    if (axiosError.response && axiosError.response.status === 400) {
      var data = axiosError.response.data;
      return {
        message: data.message
      };
    }

    if (error instanceof Error) {
      // error log
      console.error(error.name);
      console.error(error.message);
      setContextError(error.message, error);
      return {
        message: "".concat(error.name, "_").concat(error.message)
      };
    }

    return {
      message: 'uncaught error'
    };
  };

  return {
    context: context,
    customErrorThrow: customErrorThrow
  };
};

/* harmony default export */ __webpack_exports__["default"] = (useError);

/***/ }),

/***/ 1209:
/*!******************************!*\
  !*** ./src/client/index.tsx ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 7294);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ 3935);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ 9711);
/* harmony import */ var _Error_ErrorBoundary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Error/ErrorBoundary */ 3798);
/* harmony import */ var _Error_ErrorProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Error/ErrorProvider */ 4949);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./App */ 8375);
/* harmony import */ var _scss_index_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scss/index.scss */ 312);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ 5893);








react_dom__WEBPACK_IMPORTED_MODULE_1__.render( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Error_ErrorProvider__WEBPACK_IMPORTED_MODULE_3__["default"], {
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.BrowserRouter, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Error_ErrorBoundary__WEBPACK_IMPORTED_MODULE_2__["default"], {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_App__WEBPACK_IMPORTED_MODULE_4__["default"], {})
    })
  })
}), document.getElementById('app'));

/***/ }),

/***/ 2735:
/*!*****************************************!*\
  !*** ./src/client/view/ErrorHandle.tsx ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 5861);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ 3324);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ 7757);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ 7294);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ 9669);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Error_useError__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Error/useError */ 3376);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ 5893);





 // baseURL



var API = axios__WEBPACK_IMPORTED_MODULE_4___default().create({
  baseURL:  false ? 0 : 'http://localhost:5000/api'
});

var ErrorHandle = function ErrorHandle() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(''),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      text = _useState2[0],
      setText = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),
      _useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState3, 2),
      validError = _useState4[0],
      setValidError = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null),
      _useState6 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState5, 2),
      serverError = _useState6[0],
      setServerError = _useState6[1];

  var _useError = (0,_Error_useError__WEBPACK_IMPORTED_MODULE_5__["default"])(),
      customErrorThrow = _useError.customErrorThrow;

  var handleText = function handleText(e) {
    var val = e.target.value;
    setText(val);
    textValidation(val);
  };

  var textValidation = function textValidation(str) {
    if (!str) {
      setValidError(false);
      return;
    }

    var ratz = /[a-z]/;
    var rAtZ = /[A-Z]/;
    var r0t9 = /[0-9]/;

    if (ratz.test(str) && !rAtZ.test(str) && !r0t9.test(str)) {
      setValidError(false);
    } else {
      setValidError(true);
    }
  };

  var onClick = /*#__PURE__*/function () {
    var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
      var options, res;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              options = {
                url: '/eh',
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  Accept: 'application/json'
                },
                data: {
                  text: text
                }
              };
              _context.prev = 1;
              _context.next = 4;
              return API(options);

            case 4:
              setText('');
              setServerError(null);
              _context.next = 12;
              break;

            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](1);
              res = customErrorThrow(_context.t0);
              setServerError(res);

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 8]]);
    }));

    return function onClick() {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h3", {
        children: "error handle"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
        children: "\uFF0A\u5C0F\u6587\u5B57\u306E\u30A2\u30EB\u30D5\u30A1\u30D9\u30C3\u30C8\u4EE5\u5916\u3092\u5165\u308C\u308B\u3068\u30D5\u30ED\u30F3\u30C8\u5074\u3067\u30D0\u30EA\u30A8\u30FC\u30B7\u30E7\u30F3\u30A8\u30E9\u30FC\u3092\u30B9\u30ED\u30FC\u3059\u308B"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
        children: "\uFF0A\u8A31\u53EF\u3055\u308C\u305F\u6587\u5B57\u304C\u5C11\u306A\u304F\u3068\u3082\uFF11\u3064\u542B\u307E\u308C\u3066\u3044\u306A\u3044\u3068\u30B5\u30FC\u30D0\u30FC\u306B\u30EA\u30AF\u30A8\u30B9\u30C8\u3057\u3066\u3082\u30A8\u30E9\u30FC\u3092\u8FD4\u3059"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
        children: "@\u8A31\u53EF\u3059\u308B\u30A2\u30EB\u30D5\u30A1\u30D9\u30C3\u30C8\u306F\u3001r,e,a,c,t \u306E\uFF15\u3064"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("form", {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("input", {
        type: "text",
        style: {
          padding: '3px 0'
        },
        value: text,
        onChange: function onChange(event) {
          return handleText(event);
        }
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
        type: "button",
        onClick: onClick,
        children: "\u30EA\u30AF\u30A8\u30B9\u30C8"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
      style: validError ? {
        background: 'red'
      } : {
        background: 'none'
      },
      children: validError ? '**ERROR** 小文字のアルファベット以外が入力されました' : ''
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
      children: serverError && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h2", {
        style: {
          color: 'red'
        },
        children: serverError.message
      })
    })]
  });
};

/* harmony default export */ __webpack_exports__["default"] = (ErrorHandle);

/***/ }),

/***/ 1069:
/*!****************************************!*\
  !*** ./src/client/view/HelloWorld.tsx ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ 5893);


var HelloWorld = function HelloWorld() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h1", {
    children: "typescript react weback express v5/7!!"
  });
};

/* harmony default export */ __webpack_exports__["default"] = (HelloWorld);

/***/ }),

/***/ 3377:
/*!***********************************!*\
  !*** ./src/client/view/Hooks.tsx ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CountContext": function() { return /* binding */ CountContext; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 4942);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ 3324);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ 7294);
/* harmony import */ var _assets_youtube_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/youtube.png */ 5439);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ 5893);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }





var ActionType = {
  INCREMENT_COUNT: 'INCREMENT_COUNT',
  DECREMENT_COUNT: 'DECREMENT_COUNT'
};

var reducerFunc = function reducerFunc(state, action) {
  switch (action.type) {
    case ActionType.INCREMENT_COUNT:
      return {
        count: state.count + 1
      };
      break;

    case ActionType.DECREMENT_COUNT:
      return {
        count: state.count - 2
      };
      break;

    default:
      return state;
  }
};

var initialState = {
  count: 0
};
var CountContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_2__.createContext)({});

var Hooks = function Hooks() {
  var _useReducer = (0,react__WEBPACK_IMPORTED_MODULE_2__.useReducer)(reducerFunc, initialState),
      _useReducer2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useReducer, 2),
      state = _useReducer2[0],
      dispatch = _useReducer2[1];

  var increment = function increment() {
    dispatch({
      type: ActionType.INCREMENT_COUNT
    });
  };

  var decrement = function decrement() {
    dispatch({
      type: ActionType.DECREMENT_COUNT
    });
  };

  var btnStyle = {
    width: '60px',
    height: '30px',
    fontSize: '20px'
  };
  var value = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(function () {
    return {
      state: state,
      dispatch: dispatch
    };
  }, [state]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(CountContext.Provider, {
      value: value,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h1", {
        children: "hooks"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
        type: "button",
        style: _objectSpread(_objectSpread({}, btnStyle), {}, {
          marginLeft: '30px'
        }),
        onClick: increment,
        children: "+"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
        children: state.count
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
        type: "button",
        style: btnStyle,
        onClick: decrement,
        children: "-"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("hr", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("img", {
        src: _assets_youtube_png__WEBPACK_IMPORTED_MODULE_3__,
        alt: ""
      })]
    })
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Hooks);

/***/ }),

/***/ 312:
/*!************************************!*\
  !*** ./src/client/scss/index.scss ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 5439:
/*!***************************************!*\
  !*** ./src/client/assets/youtube.png ***!
  \***************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./image/youtube.509b552d440d102d0154.png";

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vender"], function() { return __webpack_exec__(1209); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvYXBwLmM2MzZkZTM0MTFjOWYwMTE5MjJhLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFFQSxJQUFNTSxHQUFjLEdBQUcsU0FBakJBLEdBQWlCO0FBQUEsc0JBQ3JCO0FBQUEsNEJBQ0UsdURBQUMsd0RBQUQsS0FERixlQUVFLHVEQUFDLGtEQUFEO0FBQU0sUUFBRSxFQUFDLFFBQVQ7QUFBa0IsV0FBSyxFQUFFO0FBQUVDLFFBQUFBLE9BQU8sRUFBRTtBQUFYLE9BQXpCO0FBQUE7QUFBQSxNQUZGLGVBS0UsdURBQUMsa0RBQUQ7QUFBTSxRQUFFLEVBQUMsS0FBVDtBQUFlLFdBQUssRUFBRTtBQUFFQSxRQUFBQSxPQUFPLEVBQUU7QUFBWCxPQUF0QjtBQUFBO0FBQUEsTUFMRixlQVFFLHVEQUFDLGtEQUFEO0FBQU0sUUFBRSxFQUFDLEdBQVQ7QUFBYSxXQUFLLEVBQUU7QUFBRUEsUUFBQUEsT0FBTyxFQUFFO0FBQVgsT0FBcEI7QUFBQTtBQUFBLE1BUkYsZUFXRSxnRUFYRixlQVlFLHdEQUFDLG9EQUFEO0FBQUEsOEJBQ0UsdURBQUMsbURBQUQ7QUFBTyxZQUFJLEVBQUMsR0FBWjtBQUFnQixlQUFPLGVBQUU7QUFBQTtBQUFBO0FBQXpCLFFBREYsZUFFRSx1REFBQyxtREFBRDtBQUFPLFlBQUksRUFBQyxRQUFaO0FBQXFCLGVBQU8sZUFBRSx1REFBQyxtREFBRDtBQUE5QixRQUZGLGVBR0UsdURBQUMsbURBQUQ7QUFBTyxZQUFJLEVBQUMsS0FBWjtBQUFrQixlQUFPLGVBQUUsdURBQUMseURBQUQ7QUFBM0IsUUFIRjtBQUFBLE1BWkY7QUFBQSxJQURxQjtBQUFBLENBQXZCOztBQXFCQSwrREFBZUQsR0FBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFCQTs7OztJQVdNSTs7Ozs7QUFDSix5QkFBWUMsS0FBWixFQUEwQjtBQUFBOztBQUFBOztBQUN4Qiw4QkFBTUEsS0FBTjtBQUNB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QUFFO0FBQTdCLFVBRlA7QUFHRSxlQUFPLEVBQUVOLFNBSFg7QUFBQTtBQUFBLFFBRkYsZUFTRTtBQUFBLGtCQUFJekYsS0FBSyxDQUFDcUY7QUFBVixRQVRGLGVBVUU7QUFBUSxZQUFJLEVBQUMsUUFBYjtBQUFzQixhQUFLLEVBQUVNLFFBQTdCO0FBQXVDLGVBQU8sRUFBRUQsU0FBaEQ7QUFBQTtBQUFBLFFBVkYsZUFhRSxnRUFiRixlQWNFO0FBQUssV0FBRyxFQUFFWixnREFBVjtBQUFtQixXQUFHLEVBQUM7QUFBdkIsUUFkRjtBQUFBO0FBREYsSUFERjtBQW9CRCxDQTdDRDs7QUErQ0EsK0RBQWV0RixLQUFmOzs7Ozs7Ozs7OztBQzNGQSIsInNvdXJjZXMiOlsid2VicGFjazovL3R5cGVzY3JpcHQtcmVhY3Qtd2VicGFjay1leHByZXNzLy4vc3JjL2NsaWVudC9BcHAudHN4Iiwid2VicGFjazovL3R5cGVzY3JpcHQtcmVhY3Qtd2VicGFjay1leHByZXNzLy4vc3JjL2NsaWVudC9FcnJvci9FcnJvckJvdW5kYXJ5LnRzeCIsIndlYnBhY2s6Ly90eXBlc2NyaXB0LXJlYWN0LXdlYnBhY2stZXhwcmVzcy8uL3NyYy9jbGllbnQvRXJyb3IvRXJyb3JDb250ZXh0LnRzeCIsIndlYnBhY2s6Ly90eXBlc2NyaXB0LXJlYWN0LXdlYnBhY2stZXhwcmVzcy8uL3NyYy9jbGllbnQvRXJyb3IvRXJyb3JQcm92aWRlci50c3giLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdC1yZWFjdC13ZWJwYWNrLWV4cHJlc3MvLi9zcmMvY2xpZW50L0Vycm9yL3VzZUVycm9yLnRzeCIsIndlYnBhY2s6Ly90eXBlc2NyaXB0LXJlYWN0LXdlYnBhY2stZXhwcmVzcy8uL3NyYy9jbGllbnQvaW5kZXgudHN4Iiwid2VicGFjazovL3R5cGVzY3JpcHQtcmVhY3Qtd2VicGFjay1leHByZXNzLy4vc3JjL2NsaWVudC92aWV3L0Vycm9ySGFuZGxlLnRzeCIsIndlYnBhY2s6Ly90eXBlc2NyaXB0LXJlYWN0LXdlYnBhY2stZXhwcmVzcy8uL3NyYy9jbGllbnQvdmlldy9IZWxsb1dvcmxkLnRzeCIsIndlYnBhY2s6Ly90eXBlc2NyaXB0LXJlYWN0LXdlYnBhY2stZXhwcmVzcy8uL3NyYy9jbGllbnQvdmlldy9Ib29rcy50c3giLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdC1yZWFjdC13ZWJwYWNrLWV4cHJlc3MvLi9zcmMvY2xpZW50L3Njc3MvaW5kZXguc2Nzcz9lN2JiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJvdXRlcywgUm91dGUsIExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xyXG5pbXBvcnQgSGVsbG9Xb3JsZCBmcm9tICcuL3ZpZXcvSGVsbG9Xb3JsZCdcclxuaW1wb3J0IEhvb2tzIGZyb20gJy4vdmlldy9Ib29rcydcclxuaW1wb3J0IEVycm9ySGFuZGxlIGZyb20gJy4vdmlldy9FcnJvckhhbmRsZSdcclxuXHJcbmNvbnN0IEFwcDogUmVhY3QuVkZDID0gKCkgPT4gKFxyXG4gIDxkaXY+XHJcbiAgICA8SGVsbG9Xb3JsZCAvPlxyXG4gICAgPExpbmsgdG89XCIvaG9va3NcIiBzdHlsZT17eyBwYWRkaW5nOiAnMjBweCcgfX0+XHJcbiAgICAgIGhvb2tzXHJcbiAgICA8L0xpbms+XHJcbiAgICA8TGluayB0bz1cIi9laFwiIHN0eWxlPXt7IHBhZGRpbmc6ICcyMHB4JyB9fT5cclxuICAgICAgZXJyb3IgaGFuZGxlXHJcbiAgICA8L0xpbms+XHJcbiAgICA8TGluayB0bz1cIi9cIiBzdHlsZT17eyBwYWRkaW5nOiAnMjBweCcgfX0+XHJcbiAgICAgIGhvbWVcclxuICAgIDwvTGluaz5cclxuICAgIDxociAvPlxyXG4gICAgPFJvdXRlcz5cclxuICAgICAgPFJvdXRlIHBhdGg9XCIvXCIgZWxlbWVudD17PGgyPnNlbGVjdCBjb21wb25lbnQ8L2gyPn0gLz5cclxuICAgICAgPFJvdXRlIHBhdGg9XCIvaG9va3NcIiBlbGVtZW50PXs8SG9va3MgLz59IC8+XHJcbiAgICAgIDxSb3V0ZSBwYXRoPVwiL2VoXCIgZWxlbWVudD17PEVycm9ySGFuZGxlIC8+fSAvPlxyXG4gICAgPC9Sb3V0ZXM+XHJcbiAgPC9kaXY+XHJcbilcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcFxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBSZWFjdE5vZGUgfSBmcm9tICdyZWFjdCdcclxuXHJcbnR5cGUgUHJvcHMgPSB7XHJcbiAgY2hpbGRyZW46IFJlYWN0Tm9kZVxyXG59XHJcblxyXG50eXBlIFN0YXRlID0ge1xyXG4gIGhhc0Vycm9yOiBib29sZWFuLFxyXG4gIGVycm9yOiBFcnJvciB8IG51bGxcclxufVxyXG5cclxuY2xhc3MgRXJyb3JCb3VuZGFyeSBleHRlbmRzIENvbXBvbmVudDxQcm9wcywgU3RhdGU+IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wczogUHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKVxyXG4gICAgdGhpcy5zdGF0ZSA9IHsgXHJcbiAgICAgIGhhc0Vycm9yOiBmYWxzZSxcclxuICAgICAgZXJyb3I6IG51bGxcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHN0YXRpYyBnZXREZXJpdmVkU3RhdGVGcm9tRXJyb3IoZXJyb3I6IEVycm9yKTogU3RhdGUge1xyXG4gICAgLy8gVXBkYXRlIHN0YXRlIHNvIHRoZSBuZXh0IHJlbmRlciB3aWxsIHNob3cgdGhlIGZhbGxiYWNrIFVJLlxyXG4gICAgcmV0dXJuIHsgXHJcbiAgICAgIGhhc0Vycm9yOiB0cnVlLFxyXG4gICAgICBlcnJvclxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkQ2F0Y2goZXJyb3I6IEVycm9yKTogU3RhdGUge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IFxyXG4gICAgICBoYXNFcnJvcjogdHJ1ZSxcclxuICAgICAgZXJyb3JcclxuICAgIH0pXHJcblxyXG4gICAgcmV0dXJuIHsgXHJcbiAgICAgIGhhc0Vycm9yOiB0cnVlLFxyXG4gICAgICBlcnJvclxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBoYXNFcnJvciwgZXJyb3IgfSA9IHRoaXMuc3RhdGVcclxuICAgIGNvbnN0IHsgY2hpbGRyZW4gfSA9IHRoaXMucHJvcHNcclxuXHJcbiAgICBpZiAoaGFzRXJyb3IgJiYgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xyXG4gICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcclxuICAgIH1cclxuXHJcbiAgICBpZiAoaGFzRXJyb3IgJiYgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICgnZGV2ZWxvcG1lbnQnIHx8IHVuZGVmaW5lZCkpIHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGgxPiEhRXJyb3IhISBTb21ldGhpbmcgd2VudCB3cm9uZy4gVGhpcyBpcyBmYWxsYmFjayBVSTwvaDE+XHJcbiAgICAgICAgICA8aDM+e2Vycm9yLm5hbWV9PC9oMz5cclxuICAgICAgICAgIDxoMz57ZXJyb3IubWVzc2FnZX08L2gzPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGNoaWxkcmVuXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFcnJvckJvdW5kYXJ5XHJcbiIsImltcG9ydCB7IGNyZWF0ZUNvbnRleHQgfSBmcm9tICdyZWFjdCdcclxuXHJcbnR5cGUgQ29udGV4dCA9IHtcclxuICBoYXNFcnJvcjogYm9vbGVhblxyXG4gIGVycm9yTWVzc2FnZTogc3RyaW5nIHwgbnVsbFxyXG4gIGVycm9yOiBFcnJvciB8IG51bGxcclxuICBzZXRDb250ZXh0RXJyb3I6IChlcnJvck1lc3NhZ2U6IHN0cmluZywgZXJyb3I/OiBFcnJvcikgPT4gdm9pZFxyXG4gIHNldENvdGV4dEVycm9yRG9uZTogKCkgPT4gdm9pZFxyXG59XHJcblxyXG5jb25zdCBFcnJvckNvbnRleHQgPSBjcmVhdGVDb250ZXh0PENvbnRleHQ+KHtcclxuICBoYXNFcnJvcjogZmFsc2UsXHJcbiAgZXJyb3JNZXNzYWdlOiBudWxsLFxyXG4gIGVycm9yOiBudWxsLFxyXG4gIHNldENvbnRleHRFcnJvcjogKCkgPT4gKHt9KSxcclxuICBzZXRDb3RleHRFcnJvckRvbmU6ICgpID0+ICh7fSlcclxufSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVycm9yQ29udGV4dFxyXG4iLCJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlTWVtbyB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXHJcbmltcG9ydCBFcnJvckNvbnRleHQgZnJvbSAnLi9FcnJvckNvbnRleHQnXHJcblxyXG5jb25zdCBFcnJvclByb3ZpZGVyOiBSZWFjdC5GQyA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICBjb25zdCBbaGFzRXJyb3IsIHNldEhhc0Vycm9yXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKVxyXG4gIGNvbnN0IFtlcnJvck1lc3NhZ2UsIHNldEVycm9yTWVzc2FnZV0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKVxyXG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGU8RXJyb3IgfCBudWxsPihudWxsKVxyXG5cclxuICBjb25zdCBzZXRDb250ZXh0RXJyb3IgPSAoRXJyb3JNZXNzYWdlOiBzdHJpbmcsIEVycm9yPzogRXJyb3IpID0+IHtcclxuICAgIHNldEVycm9yTWVzc2FnZShFcnJvck1lc3NhZ2UpXHJcbiAgICBzZXRFcnJvcihFcnJvcilcclxuICAgIHNldEhhc0Vycm9yKHRydWUpXHJcbiAgfVxyXG5cclxuICBjb25zdCBzZXRDb3RleHRFcnJvckRvbmUgPSAoKSA9PiB7XHJcbiAgICBzZXRFcnJvck1lc3NhZ2UobnVsbClcclxuICAgIHNldEVycm9yKG51bGwpXHJcbiAgICBzZXRIYXNFcnJvcihmYWxzZSlcclxuICB9XHJcblxyXG4gIGNvbnN0IGVycm9yVmFsdWUgPSB1c2VNZW1vKFxyXG4gICAgKCkgPT4gKHtcclxuICAgICAgaGFzRXJyb3IsXHJcbiAgICAgIGVycm9yTWVzc2FnZSxcclxuICAgICAgZXJyb3IsXHJcbiAgICAgIHNldENvbnRleHRFcnJvcixcclxuICAgICAgc2V0Q290ZXh0RXJyb3JEb25lXHJcbiAgICB9KSxcclxuICAgIFtoYXNFcnJvciwgZXJyb3JNZXNzYWdlLCBlcnJvcl1cclxuICApXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8RXJyb3JDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtlcnJvclZhbHVlfT57Y2hpbGRyZW59PC9FcnJvckNvbnRleHQuUHJvdmlkZXI+XHJcbiAgKVxyXG59XHJcblxyXG5FcnJvclByb3ZpZGVyLmRlZmF1bHRQcm9wcyA9IHtcclxuICBjaGlsZHJlbjoge31cclxufVxyXG5cclxuRXJyb3JQcm92aWRlci5wcm9wVHlwZXMgPSB7XHJcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVycm9yUHJvdmlkZXJcclxuIiwiaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBBeGlvc0Vycm9yIH0gZnJvbSAnYXhpb3MnXHJcbmltcG9ydCBFcnJvckNvbnRleHQgZnJvbSAnLi9FcnJvckNvbnRleHQnXHJcblxyXG50eXBlIE1lc3NhZ2UgPSB7XHJcbiAgbWVzc2FnZTogc3RyaW5nXHJcbn1cclxuXHJcbmNvbnN0IHVzZUVycm9yID0gKCkgPT4ge1xyXG4gIGNvbnN0IGNvbnRleHQgPSB1c2VDb250ZXh0KEVycm9yQ29udGV4dClcclxuICBjb25zdCB7IHNldENvbnRleHRFcnJvciB9ID0gY29udGV4dFxyXG5cclxuICBpZiAoY29udGV4dCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoYHVzZUVycm9yIG11c3QgYmUgdXNlZCB3aXRoaW4gYSBFcnJvclByb3ZpZGVyYClcclxuICB9XHJcblxyXG4gIGNvbnN0IGN1c3RvbUVycm9yVGhyb3cgPSAoZXJyb3I6IHVua25vd24pOiBNZXNzYWdlID0+IHtcclxuICAgIGNvbnN0IGF4aW9zRXJyb3IgPSBlcnJvciBhcyBBeGlvc0Vycm9yPE1lc3NhZ2U+XHJcblxyXG4gICAgaWYgKGF4aW9zRXJyb3IucmVzcG9uc2UgJiYgYXhpb3NFcnJvci5yZXNwb25zZS5zdGF0dXMgPT09IDQwMCkge1xyXG4gICAgICBjb25zdCB7IGRhdGEgfSA9IGF4aW9zRXJyb3IucmVzcG9uc2VcclxuXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgbWVzc2FnZTogZGF0YS5tZXNzYWdlXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xyXG4gICAgICAvLyBlcnJvciBsb2dcclxuICAgICAgY29uc29sZS5lcnJvcihlcnJvci5uYW1lKVxyXG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yLm1lc3NhZ2UpXHJcblxyXG4gICAgICBzZXRDb250ZXh0RXJyb3IoZXJyb3IubWVzc2FnZSwgZXJyb3IpXHJcblxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIG1lc3NhZ2U6IGAke2Vycm9yLm5hbWV9XyR7ZXJyb3IubWVzc2FnZX1gXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBtZXNzYWdlOiAndW5jYXVnaHQgZXJyb3InXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgY29udGV4dCxcclxuICAgIGN1c3RvbUVycm9yVGhyb3dcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHVzZUVycm9yXHJcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgUmVhY3REb20gZnJvbSAncmVhY3QtZG9tJ1xyXG5pbXBvcnQgeyBCcm93c2VyUm91dGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcclxuaW1wb3J0IEVycm9yQm91bmRhcnkgZnJvbSAnLi9FcnJvci9FcnJvckJvdW5kYXJ5J1xyXG5pbXBvcnQgRXJyb3JQcm92aWRlciBmcm9tICcuL0Vycm9yL0Vycm9yUHJvdmlkZXInXHJcbmltcG9ydCBBcHAgZnJvbSAnLi9BcHAnXHJcbmltcG9ydCAnLi9zY3NzL2luZGV4LnNjc3MnXHJcblxyXG5SZWFjdERvbS5yZW5kZXIoXHJcbiAgPEVycm9yUHJvdmlkZXI+XHJcbiAgICA8QnJvd3NlclJvdXRlcj5cclxuICAgICAgPEVycm9yQm91bmRhcnk+XHJcbiAgICAgICAgPEFwcCAvPlxyXG4gICAgICA8L0Vycm9yQm91bmRhcnk+XHJcbiAgICA8L0Jyb3dzZXJSb3V0ZXI+XHJcbiAgPC9FcnJvclByb3ZpZGVyPixcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJylcclxuKVxyXG4iLCJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgYXhpb3MsIHsgQXhpb3NSZXF1ZXN0Q29uZmlnIH0gZnJvbSAnYXhpb3MnXHJcbmltcG9ydCB1c2VFcnJvciBmcm9tICcuLi9FcnJvci91c2VFcnJvcidcclxuXHJcbi8vIGJhc2VVUkxcclxuY29uc3QgQVBJID0gYXhpb3MuY3JlYXRlKHtcclxuICBiYXNlVVJMOlxyXG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJ1xyXG4gICAgICA/ICdodHRwczovL3RzLXJlYWN0LWhlcm9rdS5oZXJva3VhcHAuY29tL2FwaSdcclxuICAgICAgOiAnaHR0cDovL2xvY2FsaG9zdDo1MDAwL2FwaSdcclxufSlcclxuXHJcbnR5cGUgTWVzc2FnZSA9IHtcclxuICBtZXNzYWdlOiBzdHJpbmdcclxufVxyXG5cclxuY29uc3QgRXJyb3JIYW5kbGUgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3RleHQsIHNldFRleHRdID0gdXNlU3RhdGU8c3RyaW5nPignJylcclxuICBjb25zdCBbdmFsaWRFcnJvciwgc2V0VmFsaWRFcnJvcl0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSlcclxuICBjb25zdCBbc2VydmVyRXJyb3IsIHNldFNlcnZlckVycm9yXSA9IHVzZVN0YXRlPE1lc3NhZ2U+KG51bGwpXHJcbiAgY29uc3QgeyBjdXN0b21FcnJvclRocm93IH0gPSB1c2VFcnJvcigpXHJcblxyXG4gIGNvbnN0IGhhbmRsZVRleHQgPSAoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcclxuICAgIGNvbnN0IHZhbCA9IGUudGFyZ2V0LnZhbHVlXHJcbiAgICBzZXRUZXh0KHZhbClcclxuICAgIHRleHRWYWxpZGF0aW9uKHZhbClcclxuICB9XHJcblxyXG4gIGNvbnN0IHRleHRWYWxpZGF0aW9uID0gKHN0cjogc3RyaW5nKSA9PiB7XHJcbiAgICBpZiAoIXN0cikge1xyXG4gICAgICBzZXRWYWxpZEVycm9yKGZhbHNlKVxyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuICAgIGNvbnN0IHJhdHogPSAvW2Etel0vXHJcbiAgICBjb25zdCByQXRaID0gL1tBLVpdL1xyXG4gICAgY29uc3QgcjB0OSA9IC9bMC05XS9cclxuICAgIGlmIChyYXR6LnRlc3Qoc3RyKSAmJiAhckF0Wi50ZXN0KHN0cikgJiYgIXIwdDkudGVzdChzdHIpKSB7XHJcbiAgICAgIHNldFZhbGlkRXJyb3IoZmFsc2UpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRWYWxpZEVycm9yKHRydWUpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBvbkNsaWNrID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3Qgb3B0aW9uczogQXhpb3NSZXF1ZXN0Q29uZmlnID0ge1xyXG4gICAgICB1cmw6ICcvZWgnLFxyXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgfSxcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIHRleHRcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGF3YWl0IEFQSShvcHRpb25zKVxyXG4gICAgICBzZXRUZXh0KCcnKVxyXG4gICAgICBzZXRTZXJ2ZXJFcnJvcihudWxsKVxyXG4gICAgfSBjYXRjaCAoZXJyb3I6IHVua25vd24pIHtcclxuICAgICAgY29uc3QgcmVzID0gY3VzdG9tRXJyb3JUaHJvdyhlcnJvcilcclxuICAgICAgc2V0U2VydmVyRXJyb3IocmVzKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGgzPmVycm9yIGhhbmRsZTwvaDM+XHJcbiAgICAgICAgPHA+XHJcbiAgICAgICAgICDvvIrlsI/mloflrZfjga7jgqLjg6vjg5XjgqHjg5njg4Pjg4jku6XlpJbjgpLlhaXjgozjgovjgajjg5Xjg63jg7Pjg4jlgbTjgafjg5Djg6rjgqjjg7zjgrfjg6fjg7Pjgqjjg6njg7zjgpLjgrnjg63jg7zjgZnjgotcclxuICAgICAgICA8L3A+XHJcbiAgICAgICAgPHA+XHJcbiAgICAgICAgICDvvIroqLHlj6/jgZXjgozjgZ/mloflrZfjgYzlsJHjgarjgY/jgajjgoLvvJHjgaTlkKvjgb7jgozjgabjgYTjgarjgYTjgajjgrXjg7zjg5Djg7zjgavjg6rjgq/jgqjjgrnjg4jjgZfjgabjgoLjgqjjg6njg7zjgpLov5TjgZlcclxuICAgICAgICA8L3A+XHJcbiAgICAgICAgPHA+QOioseWPr+OBmeOCi+OCouODq+ODleOCoeODmeODg+ODiOOBr+OAgXIsZSxhLGMsdCDjga7vvJXjgaQ8L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8Zm9ybT5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6ICczcHggMCdcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICB2YWx1ZT17dGV4dH1cclxuICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PlxyXG4gICAgICAgICAgICBoYW5kbGVUZXh0KGV2ZW50KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17b25DbGlja30+XHJcbiAgICAgICAgICDjg6rjgq/jgqjjgrnjg4hcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgc3R5bGU9e1xyXG4gICAgICAgICAgdmFsaWRFcnJvclxyXG4gICAgICAgICAgICA/IHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICdyZWQnXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA6IHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICdub25lJ1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgID5cclxuICAgICAgICB7dmFsaWRFcnJvclxyXG4gICAgICAgICAgPyAnKipFUlJPUioqIOWwj+aWh+Wtl+OBruOCouODq+ODleOCoeODmeODg+ODiOS7peWkluOBjOWFpeWKm+OBleOCjOOBvuOBl+OBnydcclxuICAgICAgICAgIDogJyd9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIHtzZXJ2ZXJFcnJvciAmJiA8aDIgc3R5bGU9e3sgY29sb3I6ICdyZWQnIH19PntzZXJ2ZXJFcnJvci5tZXNzYWdlfTwvaDI+fVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRXJyb3JIYW5kbGVcclxuIiwiY29uc3QgSGVsbG9Xb3JsZDogUmVhY3QuVkZDID0gKCkgPT4gKFxyXG4gIDxoMT50eXBlc2NyaXB0IHJlYWN0IHdlYmFjayBleHByZXNzIHY1LzchITwvaDE+XHJcbilcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlbGxvV29ybGRcclxuIiwiaW1wb3J0IHsgdXNlUmVkdWNlciwgdXNlTWVtbywgY3JlYXRlQ29udGV4dCwgRGlzcGF0Y2ggfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHlvdXR1YmUgZnJvbSAnLi4vYXNzZXRzL3lvdXR1YmUucG5nJ1xyXG5cclxudHlwZSBTdGF0ZSA9IHtcclxuICBjb3VudDogbnVtYmVyXHJcbn1cclxuXHJcbmNvbnN0IEFjdGlvblR5cGUgPSB7XHJcbiAgSU5DUkVNRU5UX0NPVU5UOiAnSU5DUkVNRU5UX0NPVU5UJyxcclxuICBERUNSRU1FTlRfQ09VTlQ6ICdERUNSRU1FTlRfQ09VTlQnXHJcbn0gYXMgY29uc3RcclxuXHJcbnR5cGUgQWN0aW9uID0ge1xyXG4gIHR5cGU6IHR5cGVvZiBBY3Rpb25UeXBlW2tleW9mIHR5cGVvZiBBY3Rpb25UeXBlXVxyXG4gIHBheWxvYWQ/OiBudW1iZXJcclxufVxyXG5cclxuY29uc3QgcmVkdWNlckZ1bmMgPSAoc3RhdGU6IFN0YXRlLCBhY3Rpb246IEFjdGlvbik6IFN0YXRlID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIEFjdGlvblR5cGUuSU5DUkVNRU5UX0NPVU5UOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGNvdW50OiBzdGF0ZS5jb3VudCArIDFcclxuICAgICAgfVxyXG4gICAgICBicmVha1xyXG5cclxuICAgIGNhc2UgQWN0aW9uVHlwZS5ERUNSRU1FTlRfQ09VTlQ6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgY291bnQ6IHN0YXRlLmNvdW50IC0gMlxyXG4gICAgICB9XHJcbiAgICAgIGJyZWFrXHJcblxyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlXHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGU6IFN0YXRlID0ge1xyXG4gIGNvdW50OiAwXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBDb3VudENvbnRleHQgPSBjcmVhdGVDb250ZXh0KFxyXG4gIHt9IGFzIHsgc3RhdGU6IFN0YXRlOyBkaXNwYXRjaDogRGlzcGF0Y2g8QWN0aW9uPiB9XHJcbilcclxuXHJcbmNvbnN0IEhvb2tzOiBSZWFjdC5WRkMgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKHJlZHVjZXJGdW5jLCBpbml0aWFsU3RhdGUpXHJcblxyXG4gIGNvbnN0IGluY3JlbWVudCA9ICgpID0+IHtcclxuICAgIGRpc3BhdGNoKHsgdHlwZTogQWN0aW9uVHlwZS5JTkNSRU1FTlRfQ09VTlQgfSlcclxuICB9XHJcblxyXG4gIGNvbnN0IGRlY3JlbWVudCA9ICgpID0+IHtcclxuICAgIGRpc3BhdGNoKHsgdHlwZTogQWN0aW9uVHlwZS5ERUNSRU1FTlRfQ09VTlQgfSlcclxuICB9XHJcblxyXG4gIGNvbnN0IGJ0blN0eWxlID0ge1xyXG4gICAgd2lkdGg6ICc2MHB4JyxcclxuICAgIGhlaWdodDogJzMwcHgnLFxyXG4gICAgZm9udFNpemU6ICcyMHB4J1xyXG4gIH1cclxuXHJcbiAgY29uc3QgdmFsdWUgPSB1c2VNZW1vKFxyXG4gICAgKCkgPT4gKHtcclxuICAgICAgc3RhdGUsXHJcbiAgICAgIGRpc3BhdGNoXHJcbiAgICB9KSxcclxuICAgIFtzdGF0ZV1cclxuICApXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8Q291bnRDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt2YWx1ZX0+XHJcbiAgICAgICAgPGgxPmhvb2tzPC9oMT5cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgIHN0eWxlPXt7IC4uLmJ0blN0eWxlLCBtYXJnaW5MZWZ0OiAnMzBweCcgfX1cclxuICAgICAgICAgIG9uQ2xpY2s9e2luY3JlbWVudH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICArXHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPHA+e3N0YXRlLmNvdW50fTwvcD5cclxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBzdHlsZT17YnRuU3R5bGV9IG9uQ2xpY2s9e2RlY3JlbWVudH0+XHJcbiAgICAgICAgICAtXHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgPGltZyBzcmM9e3lvdXR1YmV9IGFsdD1cIlwiIC8+XHJcbiAgICAgIDwvQ291bnRDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb29rc1xyXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsiUm91dGVzIiwiUm91dGUiLCJMaW5rIiwiSGVsbG9Xb3JsZCIsIkhvb2tzIiwiRXJyb3JIYW5kbGUiLCJBcHAiLCJwYWRkaW5nIiwiUmVhY3QiLCJDb21wb25lbnQiLCJFcnJvckJvdW5kYXJ5IiwicHJvcHMiLCJzdGF0ZSIsImhhc0Vycm9yIiwiZXJyb3IiLCJzZXRTdGF0ZSIsImNoaWxkcmVuIiwicHJvY2VzcyIsImVudiIsIk5PREVfRU5WIiwid2luZG93IiwibG9jYXRpb24iLCJyZWxvYWQiLCJ1bmRlZmluZWQiLCJuYW1lIiwibWVzc2FnZSIsImNyZWF0ZUNvbnRleHQiLCJFcnJvckNvbnRleHQiLCJlcnJvck1lc3NhZ2UiLCJzZXRDb250ZXh0RXJyb3IiLCJzZXRDb3RleHRFcnJvckRvbmUiLCJ1c2VTdGF0ZSIsInVzZU1lbW8iLCJQcm9wVHlwZXMiLCJFcnJvclByb3ZpZGVyIiwic2V0SGFzRXJyb3IiLCJzZXRFcnJvck1lc3NhZ2UiLCJzZXRFcnJvciIsIkVycm9yTWVzc2FnZSIsIkVycm9yIiwiZXJyb3JWYWx1ZSIsImRlZmF1bHRQcm9wcyIsInByb3BUeXBlcyIsIm5vZGUiLCJ1c2VDb250ZXh0IiwidXNlRXJyb3IiLCJjb250ZXh0IiwiY3VzdG9tRXJyb3JUaHJvdyIsImF4aW9zRXJyb3IiLCJyZXNwb25zZSIsInN0YXR1cyIsImRhdGEiLCJjb25zb2xlIiwiUmVhY3REb20iLCJCcm93c2VyUm91dGVyIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImF4aW9zIiwiQVBJIiwiY3JlYXRlIiwiYmFzZVVSTCIsInRleHQiLCJzZXRUZXh0IiwidmFsaWRFcnJvciIsInNldFZhbGlkRXJyb3IiLCJzZXJ2ZXJFcnJvciIsInNldFNlcnZlckVycm9yIiwiaGFuZGxlVGV4dCIsImUiLCJ2YWwiLCJ0YXJnZXQiLCJ2YWx1ZSIsInRleHRWYWxpZGF0aW9uIiwic3RyIiwicmF0eiIsInJBdFoiLCJyMHQ5IiwidGVzdCIsIm9uQ2xpY2siLCJvcHRpb25zIiwidXJsIiwibWV0aG9kIiwiaGVhZGVycyIsIkFjY2VwdCIsInJlcyIsImV2ZW50IiwiYmFja2dyb3VuZCIsImNvbG9yIiwidXNlUmVkdWNlciIsInlvdXR1YmUiLCJBY3Rpb25UeXBlIiwiSU5DUkVNRU5UX0NPVU5UIiwiREVDUkVNRU5UX0NPVU5UIiwicmVkdWNlckZ1bmMiLCJhY3Rpb24iLCJ0eXBlIiwiY291bnQiLCJpbml0aWFsU3RhdGUiLCJDb3VudENvbnRleHQiLCJkaXNwYXRjaCIsImluY3JlbWVudCIsImRlY3JlbWVudCIsImJ0blN0eWxlIiwid2lkdGgiLCJoZWlnaHQiLCJmb250U2l6ZSIsIm1hcmdpbkxlZnQiXSwic291cmNlUm9vdCI6IiJ9