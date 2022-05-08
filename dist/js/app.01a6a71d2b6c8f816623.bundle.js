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

/***/ 1958:
/*!********************************************!*\
  !*** ./src/client/Error/ErrorFallback.tsx ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 7294);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ 6974);
/* harmony import */ var _useError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useError */ 3376);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ 5893);






var ErrorFallback = function ErrorFallback(_ref) {
  var error = _ref.error,
      resetErrorBoundary = _ref.resetErrorBoundary;

  var _useError = (0,_useError__WEBPACK_IMPORTED_MODULE_1__["default"])(),
      context = _useError.context;

  var hasError = context.hasError,
      setContextError = context.setContextError,
      setCotextErrorDone = context.setCotextErrorDone;
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.useNavigate)();

  var terminateError = function terminateError() {
    resetErrorBoundary();
    setCotextErrorDone();
    navigate('/');
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    setContextError(error.message, error);
  }, [setContextError, error]);

  if (hasError && "development" === 'production') {}

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
      children: "Error Message"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
      children: error.name
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
      children: error.message
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
      onClick: terminateError,
      type: "button",
      children: "Try again"
    })]
  });
};

/* harmony default export */ __webpack_exports__["default"] = (ErrorFallback);

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
      message: 'inValid error'
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
/* harmony import */ var react_error_boundary__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-error-boundary */ 5800);
/* harmony import */ var react_error_boundary__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_error_boundary__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Error_ErrorFallback__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Error/ErrorFallback */ 1958);
/* harmony import */ var _Error_ErrorProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Error/ErrorProvider */ 4949);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./App */ 8375);
/* harmony import */ var _scss_index_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scss/index.scss */ 312);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ 5893);









react_dom__WEBPACK_IMPORTED_MODULE_1__.render( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Error_ErrorProvider__WEBPACK_IMPORTED_MODULE_3__["default"], {
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.BrowserRouter, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_error_boundary__WEBPACK_IMPORTED_MODULE_8__.ErrorBoundary, {
      FallbackComponent: _Error_ErrorFallback__WEBPACK_IMPORTED_MODULE_2__["default"],
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
                  "Content-Type": "application/json",
                  'Accept': 'application/json'
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
  console.log('call now');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFpQkksVUFBQUEsVUFBVSxFQUFFO0FBQTdCLFVBRlA7QUFHRSxlQUFPLEVBQUVOLFNBSFg7QUFBQTtBQUFBLFFBRkYsZUFTRTtBQUFBLGtCQUFJUCxLQUFLLENBQUNHO0FBQVYsUUFURixlQVVFO0FBQVEsWUFBSSxFQUFDLFFBQWI7QUFBc0IsYUFBSyxFQUFFTSxRQUE3QjtBQUF1QyxlQUFPLEVBQUVELFNBQWhEO0FBQUE7QUFBQSxRQVZGLGVBYUUsZ0VBYkYsZUFjRTtBQUFLLFdBQUcsRUFBRWIsZ0RBQVY7QUFBbUIsV0FBRyxFQUFDO0FBQXZCLFFBZEY7QUFBQTtBQURGLElBREY7QUFvQkQsQ0E3Q0Q7O0FBK0NBLCtEQUFleEYsS0FBZjs7Ozs7Ozs7Ozs7QUMzRkEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90eXBlc2NyaXB0LXJlYWN0LXdlYnBhY2stZXhwcmVzcy8uL3NyYy9jbGllbnQvQXBwLnRzeCIsIndlYnBhY2s6Ly90eXBlc2NyaXB0LXJlYWN0LXdlYnBhY2stZXhwcmVzcy8uL3NyYy9jbGllbnQvRXJyb3IvRXJyb3JDb250ZXh0LnRzeCIsIndlYnBhY2s6Ly90eXBlc2NyaXB0LXJlYWN0LXdlYnBhY2stZXhwcmVzcy8uL3NyYy9jbGllbnQvRXJyb3IvRXJyb3JGYWxsYmFjay50c3giLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdC1yZWFjdC13ZWJwYWNrLWV4cHJlc3MvLi9zcmMvY2xpZW50L0Vycm9yL0Vycm9yUHJvdmlkZXIudHN4Iiwid2VicGFjazovL3R5cGVzY3JpcHQtcmVhY3Qtd2VicGFjay1leHByZXNzLy4vc3JjL2NsaWVudC9FcnJvci91c2VFcnJvci50c3giLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdC1yZWFjdC13ZWJwYWNrLWV4cHJlc3MvLi9zcmMvY2xpZW50L2luZGV4LnRzeCIsIndlYnBhY2s6Ly90eXBlc2NyaXB0LXJlYWN0LXdlYnBhY2stZXhwcmVzcy8uL3NyYy9jbGllbnQvdmlldy9FcnJvckhhbmRsZS50c3giLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdC1yZWFjdC13ZWJwYWNrLWV4cHJlc3MvLi9zcmMvY2xpZW50L3ZpZXcvSGVsbG9Xb3JsZC50c3giLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdC1yZWFjdC13ZWJwYWNrLWV4cHJlc3MvLi9zcmMvY2xpZW50L3ZpZXcvSG9va3MudHN4Iiwid2VicGFjazovL3R5cGVzY3JpcHQtcmVhY3Qtd2VicGFjay1leHByZXNzLy4vc3JjL2NsaWVudC9zY3NzL2luZGV4LnNjc3M/ZTdiYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSb3V0ZXMsIFJvdXRlLCBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcclxuaW1wb3J0IEhlbGxvV29ybGQgZnJvbSAnLi92aWV3L0hlbGxvV29ybGQnXHJcbmltcG9ydCBIb29rcyBmcm9tICcuL3ZpZXcvSG9va3MnXHJcbmltcG9ydCBFcnJvckhhbmRsZSBmcm9tICcuL3ZpZXcvRXJyb3JIYW5kbGUnXHJcblxyXG5jb25zdCBBcHA6IFJlYWN0LlZGQyA9ICgpID0+IChcclxuICA8ZGl2PlxyXG4gICAgPEhlbGxvV29ybGQgLz5cclxuICAgIDxMaW5rIHRvPVwiL2hvb2tzXCIgc3R5bGU9e3sgcGFkZGluZzogJzIwcHgnIH19PlxyXG4gICAgICBob29rc1xyXG4gICAgPC9MaW5rPlxyXG4gICAgPExpbmsgdG89XCIvZWhcIiBzdHlsZT17eyBwYWRkaW5nOiAnMjBweCcgfX0+XHJcbiAgICAgIGVycm9yIGhhbmRsZVxyXG4gICAgPC9MaW5rPlxyXG4gICAgPExpbmsgdG89XCIvXCIgc3R5bGU9e3sgcGFkZGluZzogJzIwcHgnIH19PlxyXG4gICAgICBob21lXHJcbiAgICA8L0xpbms+XHJcbiAgICA8aHIgLz5cclxuICAgIDxSb3V0ZXM+XHJcbiAgICAgIDxSb3V0ZSBwYXRoPVwiL1wiIGVsZW1lbnQ9ezxoMj5zZWxlY3QgY29tcG9uZW50PC9oMj59IC8+XHJcbiAgICAgIDxSb3V0ZSBwYXRoPVwiL2hvb2tzXCIgZWxlbWVudD17PEhvb2tzIC8+fSAvPlxyXG4gICAgICA8Um91dGUgcGF0aD1cIi9laFwiIGVsZW1lbnQ9ezxFcnJvckhhbmRsZSAvPn0gLz5cclxuICAgIDwvUm91dGVzPlxyXG4gIDwvZGl2PlxyXG4pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHBcclxuIiwiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCB9IGZyb20gJ3JlYWN0J1xyXG5cclxudHlwZSBDb250ZXh0ID0ge1xyXG4gIGhhc0Vycm9yOiBib29sZWFuXHJcbiAgZXJyb3JNZXNzYWdlOiBzdHJpbmcgfCBudWxsXHJcbiAgZXJyb3I6IEVycm9yIHwgbnVsbFxyXG4gIHNldENvbnRleHRFcnJvcjogKGVycm9yTWVzc2FnZTogc3RyaW5nLCBlcnJvcj86IEVycm9yKSA9PiB2b2lkXHJcbiAgc2V0Q290ZXh0RXJyb3JEb25lOiAoKSA9PiB2b2lkXHJcbn1cclxuXHJcbmNvbnN0IEVycm9yQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8Q29udGV4dD4oe1xyXG4gIGhhc0Vycm9yOiBmYWxzZSxcclxuICBlcnJvck1lc3NhZ2U6IG51bGwsXHJcbiAgZXJyb3I6IG51bGwsXHJcbiAgc2V0Q29udGV4dEVycm9yOiAoKSA9PiAoe30pLFxyXG4gIHNldENvdGV4dEVycm9yRG9uZTogKCkgPT4gKHt9KVxyXG59KVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRXJyb3JDb250ZXh0XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgRmFsbGJhY2tQcm9wcyB9IGZyb20gJ3JlYWN0LWVycm9yLWJvdW5kYXJ5J1xyXG5pbXBvcnQgeyB1c2VOYXZpZ2F0ZSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXHJcbmltcG9ydCB1c2VFcnJvciBmcm9tICcuL3VzZUVycm9yJ1xyXG5cclxuY29uc3QgRXJyb3JGYWxsYmFjazogUmVhY3QuRkM8RmFsbGJhY2tQcm9wcz4gPSAoe1xyXG4gIGVycm9yLFxyXG4gIHJlc2V0RXJyb3JCb3VuZGFyeVxyXG59KSA9PiB7XHJcbiAgY29uc3QgeyBjb250ZXh0IH0gPSB1c2VFcnJvcigpXHJcblxyXG4gIGNvbnN0IHsgaGFzRXJyb3IsIHNldENvbnRleHRFcnJvciwgc2V0Q290ZXh0RXJyb3JEb25lIH0gPSBjb250ZXh0XHJcblxyXG4gIGNvbnN0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKVxyXG5cclxuICBjb25zdCB0ZXJtaW5hdGVFcnJvciA9ICgpID0+IHtcclxuICAgIHJlc2V0RXJyb3JCb3VuZGFyeSgpXHJcbiAgICBzZXRDb3RleHRFcnJvckRvbmUoKVxyXG4gICAgbmF2aWdhdGUoJy8nKVxyXG4gIH1cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldENvbnRleHRFcnJvcihlcnJvci5tZXNzYWdlLCBlcnJvcilcclxuICB9LCBbc2V0Q29udGV4dEVycm9yLCBlcnJvcl0pXHJcblxyXG4gIGlmIChoYXNFcnJvciAmJiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XHJcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8aDI+RXJyb3IgTWVzc2FnZTwvaDI+XHJcbiAgICAgIDxoMj57ZXJyb3IubmFtZX08L2gyPlxyXG4gICAgICA8aDI+e2Vycm9yLm1lc3NhZ2V9PC9oMj5cclxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0ZXJtaW5hdGVFcnJvcn0gdHlwZT1cImJ1dHRvblwiPlxyXG4gICAgICAgIFRyeSBhZ2FpblxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRXJyb3JGYWxsYmFja1xyXG4iLCJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlTWVtbyB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXHJcbmltcG9ydCBFcnJvckNvbnRleHQgZnJvbSAnLi9FcnJvckNvbnRleHQnXHJcblxyXG5jb25zdCBFcnJvclByb3ZpZGVyOiBSZWFjdC5GQyA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICBjb25zdCBbaGFzRXJyb3IsIHNldEhhc0Vycm9yXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKVxyXG4gIGNvbnN0IFtlcnJvck1lc3NhZ2UsIHNldEVycm9yTWVzc2FnZV0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKVxyXG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGU8RXJyb3IgfCBudWxsPihudWxsKVxyXG5cclxuICBjb25zdCBzZXRDb250ZXh0RXJyb3IgPSAoRXJyb3JNZXNzYWdlOiBzdHJpbmcsIEVycm9yPzogRXJyb3IpID0+IHtcclxuICAgIHNldEVycm9yTWVzc2FnZShFcnJvck1lc3NhZ2UpXHJcbiAgICBzZXRFcnJvcihFcnJvcilcclxuICAgIHNldEhhc0Vycm9yKHRydWUpXHJcbiAgfVxyXG5cclxuICBjb25zdCBzZXRDb3RleHRFcnJvckRvbmUgPSAoKSA9PiB7XHJcbiAgICBzZXRFcnJvck1lc3NhZ2UobnVsbClcclxuICAgIHNldEVycm9yKG51bGwpXHJcbiAgICBzZXRIYXNFcnJvcihmYWxzZSlcclxuICB9XHJcblxyXG4gIGNvbnN0IGVycm9yVmFsdWUgPSB1c2VNZW1vKFxyXG4gICAgKCkgPT4gKHtcclxuICAgICAgaGFzRXJyb3IsXHJcbiAgICAgIGVycm9yTWVzc2FnZSxcclxuICAgICAgZXJyb3IsXHJcbiAgICAgIHNldENvbnRleHRFcnJvcixcclxuICAgICAgc2V0Q290ZXh0RXJyb3JEb25lXHJcbiAgICB9KSxcclxuICAgIFtoYXNFcnJvciwgZXJyb3JNZXNzYWdlLCBlcnJvcl1cclxuICApXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8RXJyb3JDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtlcnJvclZhbHVlfT57Y2hpbGRyZW59PC9FcnJvckNvbnRleHQuUHJvdmlkZXI+XHJcbiAgKVxyXG59XHJcblxyXG5FcnJvclByb3ZpZGVyLmRlZmF1bHRQcm9wcyA9IHtcclxuICBjaGlsZHJlbjoge31cclxufVxyXG5cclxuRXJyb3JQcm92aWRlci5wcm9wVHlwZXMgPSB7XHJcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVycm9yUHJvdmlkZXJcclxuIiwiaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBBeGlvc0Vycm9yIH0gZnJvbSAnYXhpb3MnXHJcbmltcG9ydCBFcnJvckNvbnRleHQgZnJvbSAnLi9FcnJvckNvbnRleHQnXHJcblxyXG50eXBlIE1lc3NhZ2UgPSB7XHJcbiAgbWVzc2FnZTogc3RyaW5nXHJcbn1cclxuXHJcbmNvbnN0IHVzZUVycm9yID0gKCkgPT4ge1xyXG4gIGNvbnN0IGNvbnRleHQgPSB1c2VDb250ZXh0KEVycm9yQ29udGV4dClcclxuICBjb25zdCB7IHNldENvbnRleHRFcnJvciB9ID0gY29udGV4dFxyXG5cclxuICBpZiAoY29udGV4dCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoYHVzZUVycm9yIG11c3QgYmUgdXNlZCB3aXRoaW4gYSBFcnJvclByb3ZpZGVyYClcclxuICB9XHJcblxyXG4gIGNvbnN0IGN1c3RvbUVycm9yVGhyb3cgPSAoZXJyb3I6IHVua25vd24pOiBNZXNzYWdlID0+IHtcclxuICAgIGNvbnN0IGF4aW9zRXJyb3IgPSBlcnJvciBhcyBBeGlvc0Vycm9yPE1lc3NhZ2U+XHJcblxyXG4gICAgaWYgKGF4aW9zRXJyb3IucmVzcG9uc2UgJiYgYXhpb3NFcnJvci5yZXNwb25zZS5zdGF0dXMgPT09IDQwMCkge1xyXG4gICAgICBjb25zdCB7IGRhdGEgfSA9IGF4aW9zRXJyb3IucmVzcG9uc2VcclxuXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgbWVzc2FnZTogZGF0YS5tZXNzYWdlXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xyXG4gICAgICAvLyBlcnJvciBsb2dcclxuICAgICAgY29uc29sZS5lcnJvcihlcnJvci5uYW1lKVxyXG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yLm1lc3NhZ2UpXHJcblxyXG4gICAgICBzZXRDb250ZXh0RXJyb3IoZXJyb3IubWVzc2FnZSwgZXJyb3IpXHJcblxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIG1lc3NhZ2U6IGAke2Vycm9yLm5hbWV9XyR7ZXJyb3IubWVzc2FnZX1gXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBtZXNzYWdlOiAnaW5WYWxpZCBlcnJvcidcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBjb250ZXh0LFxyXG4gICAgY3VzdG9tRXJyb3JUaHJvd1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXNlRXJyb3JcclxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBSZWFjdERvbSBmcm9tICdyZWFjdC1kb20nXHJcbmltcG9ydCB7IEJyb3dzZXJSb3V0ZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xyXG5pbXBvcnQgeyBFcnJvckJvdW5kYXJ5IH0gZnJvbSAncmVhY3QtZXJyb3ItYm91bmRhcnknXHJcbmltcG9ydCBFcnJvckZhbGxiYWNrIGZyb20gJy4vRXJyb3IvRXJyb3JGYWxsYmFjaydcclxuaW1wb3J0IEVycm9yUHJvdmlkZXIgZnJvbSAnLi9FcnJvci9FcnJvclByb3ZpZGVyJ1xyXG5pbXBvcnQgQXBwIGZyb20gJy4vQXBwJ1xyXG5pbXBvcnQgJy4vc2Nzcy9pbmRleC5zY3NzJ1xyXG5cclxuUmVhY3REb20ucmVuZGVyKFxyXG4gIDxFcnJvclByb3ZpZGVyPlxyXG4gICAgPEJyb3dzZXJSb3V0ZXI+XHJcbiAgICAgIDxFcnJvckJvdW5kYXJ5IEZhbGxiYWNrQ29tcG9uZW50PXtFcnJvckZhbGxiYWNrfT5cclxuICAgICAgICA8QXBwIC8+XHJcbiAgICAgIDwvRXJyb3JCb3VuZGFyeT5cclxuICAgIDwvQnJvd3NlclJvdXRlcj5cclxuICA8L0Vycm9yUHJvdmlkZXI+LFxyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKVxyXG4pXHJcbiIsImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBheGlvcywgeyBBeGlvc1JlcXVlc3RDb25maWcgfSBmcm9tICdheGlvcydcclxuaW1wb3J0IHVzZUVycm9yIGZyb20gJy4uL0Vycm9yL3VzZUVycm9yJ1xyXG5cclxuLy8gYmFzZVVSTFxyXG5jb25zdCBBUEkgPSBheGlvcy5jcmVhdGUoeyBiYXNlVVJMOiBcclxuICBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nXHJcbiAgICA/ICdodHRwczovL3RzLXJlYWN0LWhlcm9rdS5oZXJva3VhcHAuY29tL2FwaSdcclxuICAgIDogJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9hcGknIFxyXG59KVxyXG5cclxuY29uc3QgRXJyb3JIYW5kbGUgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3RleHQsIHNldFRleHRdID0gdXNlU3RhdGU8c3RyaW5nPignJylcclxuICBjb25zdCBbdmFsaWRFcnJvciwgc2V0VmFsaWRFcnJvcl0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSlcclxuICBjb25zdCBbc2VydmVyRXJyb3IsIHNldFNlcnZlckVycm9yXSA9IHVzZVN0YXRlPHsgbWVzc2FnZTogc3RyaW5nIH0+KG51bGwpXHJcbiAgY29uc3QgeyBjdXN0b21FcnJvclRocm93IH0gPSB1c2VFcnJvcigpXHJcblxyXG4gIGNvbnN0IGhhbmRsZVRleHQgPSAoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcclxuICAgIGNvbnN0IHZhbCA9IGUudGFyZ2V0LnZhbHVlXHJcbiAgICBzZXRUZXh0KHZhbClcclxuICAgIHRleHRWYWxpZGF0aW9uKHZhbClcclxuICB9XHJcblxyXG4gIGNvbnN0IHRleHRWYWxpZGF0aW9uID0gKHN0cjogc3RyaW5nKSA9PiB7XHJcbiAgICBpZiAoIXN0cikge1xyXG4gICAgICBzZXRWYWxpZEVycm9yKGZhbHNlKVxyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuICAgIGNvbnN0IHJhdHogPSAvW2Etel0vXHJcbiAgICBjb25zdCByQXRaID0gL1tBLVpdL1xyXG4gICAgY29uc3QgcjB0OSA9IC9bMC05XS9cclxuICAgIGlmIChyYXR6LnRlc3Qoc3RyKSAmJiAhckF0Wi50ZXN0KHN0cikgJiYgIXIwdDkudGVzdChzdHIpKSB7XHJcbiAgICAgIHNldFZhbGlkRXJyb3IoZmFsc2UpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRWYWxpZEVycm9yKHRydWUpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBvbkNsaWNrID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3Qgb3B0aW9uczogQXhpb3NSZXF1ZXN0Q29uZmlnID0ge1xyXG4gICAgICB1cmw6ICcvZWgnLFxyXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgaGVhZGVyczp7ICBcclxuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICB9LFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgdGV4dFxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgYXdhaXQgQVBJKG9wdGlvbnMpXHJcbiAgICAgIHNldFRleHQoJycpXHJcbiAgICAgIHNldFNlcnZlckVycm9yKG51bGwpXHJcbiAgICB9IGNhdGNoIChlcnJvcjogdW5rbm93bikge1xyXG4gICAgICBjb25zdCByZXMgPSBjdXN0b21FcnJvclRocm93KGVycm9yKVxyXG4gICAgICBzZXRTZXJ2ZXJFcnJvcihyZXMpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8aDM+ZXJyb3IgaGFuZGxlPC9oMz5cclxuICAgICAgICA8cD5cclxuICAgICAgICAgIO+8iuWwj+aWh+Wtl+OBruOCouODq+ODleOCoeODmeODg+ODiOS7peWkluOCkuWFpeOCjOOCi+OBqOODleODreODs+ODiOWBtOOBp+ODkOODquOCqOODvOOCt+ODp+ODs+OCqOODqeODvOOCkuOCueODreODvOOBmeOCi1xyXG4gICAgICAgIDwvcD5cclxuICAgICAgICA8cD5cclxuICAgICAgICAgIO+8iuioseWPr+OBleOCjOOBn+aWh+Wtl+OBjOWwkeOBquOBj+OBqOOCgu+8keOBpOWQq+OBvuOCjOOBpuOBhOOBquOBhOOBqOOCteODvOODkOODvOOBq+ODquOCr+OCqOOCueODiOOBl+OBpuOCguOCqOODqeODvOOCkui/lOOBmVxyXG4gICAgICAgIDwvcD5cclxuICAgICAgICA8cD5A6Kix5Y+v44GZ44KL44Ki44Or44OV44Kh44OZ44OD44OI44Gv44CBcixlLGEsYyx0IOOBru+8leOBpDwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxmb3JtPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgcGFkZGluZzogJzNweCAwJ1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICAgIHZhbHVlPXt0ZXh0fVxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+XHJcbiAgICAgICAgICAgIGhhbmRsZVRleHQoZXZlbnQpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXtvbkNsaWNrfT5cclxuICAgICAgICAgIOODquOCr+OCqOOCueODiFxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBzdHlsZT17XHJcbiAgICAgICAgICB2YWxpZEVycm9yXHJcbiAgICAgICAgICAgID8ge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJ3JlZCdcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDoge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJ25vbmUnXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgPlxyXG4gICAgICAgIHt2YWxpZEVycm9yXHJcbiAgICAgICAgICA/ICcqKkVSUk9SKiog5bCP5paH5a2X44Gu44Ki44Or44OV44Kh44OZ44OD44OI5Lul5aSW44GM5YWl5Yqb44GV44KM44G+44GX44GfJ1xyXG4gICAgICAgICAgOiAnJ31cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAge3NlcnZlckVycm9yICYmIDxoMiBzdHlsZT17eyBjb2xvcjogJ3JlZCcgfX0+e3NlcnZlckVycm9yLm1lc3NhZ2V9PC9oMj59XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFcnJvckhhbmRsZVxyXG4iLCJjb25zdCBIZWxsb1dvcmxkOiBSZWFjdC5WRkMgPSAoKSA9PiB7XHJcbiAgY29uc29sZS5sb2coJ2NhbGwgbm93JylcclxuXHJcbiAgcmV0dXJuIDxoMT50eXBlc2NyaXB0IHJlYWN0IHdlYmFjayBleHByZXNzIHY1LzchITwvaDE+XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlbGxvV29ybGRcclxuIiwiaW1wb3J0IHsgdXNlUmVkdWNlciwgdXNlTWVtbywgY3JlYXRlQ29udGV4dCwgRGlzcGF0Y2ggfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHlvdXR1YmUgZnJvbSAnLi4vYXNzZXRzL3lvdXR1YmUucG5nJ1xyXG5cclxudHlwZSBTdGF0ZSA9IHtcclxuICBjb3VudDogbnVtYmVyXHJcbn1cclxuXHJcbmNvbnN0IEFjdGlvblR5cGUgPSB7XHJcbiAgSU5DUkVNRU5UX0NPVU5UOiAnSU5DUkVNRU5UX0NPVU5UJyxcclxuICBERUNSRU1FTlRfQ09VTlQ6ICdERUNSRU1FTlRfQ09VTlQnXHJcbn0gYXMgY29uc3RcclxuXHJcbnR5cGUgQWN0aW9uID0ge1xyXG4gIHR5cGU6IHR5cGVvZiBBY3Rpb25UeXBlW2tleW9mIHR5cGVvZiBBY3Rpb25UeXBlXVxyXG4gIHBheWxvYWQ/OiBudW1iZXJcclxufVxyXG5cclxuY29uc3QgcmVkdWNlckZ1bmMgPSAoc3RhdGU6IFN0YXRlLCBhY3Rpb246IEFjdGlvbik6IFN0YXRlID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIEFjdGlvblR5cGUuSU5DUkVNRU5UX0NPVU5UOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGNvdW50OiBzdGF0ZS5jb3VudCArIDFcclxuICAgICAgfVxyXG4gICAgICBicmVha1xyXG5cclxuICAgIGNhc2UgQWN0aW9uVHlwZS5ERUNSRU1FTlRfQ09VTlQ6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgY291bnQ6IHN0YXRlLmNvdW50IC0gMlxyXG4gICAgICB9XHJcbiAgICAgIGJyZWFrXHJcblxyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlXHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGU6IFN0YXRlID0ge1xyXG4gIGNvdW50OiAwXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBDb3VudENvbnRleHQgPSBjcmVhdGVDb250ZXh0KFxyXG4gIHt9IGFzIHsgc3RhdGU6IFN0YXRlOyBkaXNwYXRjaDogRGlzcGF0Y2g8QWN0aW9uPiB9XHJcbilcclxuXHJcbmNvbnN0IEhvb2tzOiBSZWFjdC5WRkMgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKHJlZHVjZXJGdW5jLCBpbml0aWFsU3RhdGUpXHJcblxyXG4gIGNvbnN0IGluY3JlbWVudCA9ICgpID0+IHtcclxuICAgIGRpc3BhdGNoKHsgdHlwZTogQWN0aW9uVHlwZS5JTkNSRU1FTlRfQ09VTlQgfSlcclxuICB9XHJcblxyXG4gIGNvbnN0IGRlY3JlbWVudCA9ICgpID0+IHtcclxuICAgIGRpc3BhdGNoKHsgdHlwZTogQWN0aW9uVHlwZS5ERUNSRU1FTlRfQ09VTlQgfSlcclxuICB9XHJcblxyXG4gIGNvbnN0IGJ0blN0eWxlID0ge1xyXG4gICAgd2lkdGg6ICc2MHB4JyxcclxuICAgIGhlaWdodDogJzMwcHgnLFxyXG4gICAgZm9udFNpemU6ICcyMHB4J1xyXG4gIH1cclxuXHJcbiAgY29uc3QgdmFsdWUgPSB1c2VNZW1vKFxyXG4gICAgKCkgPT4gKHtcclxuICAgICAgc3RhdGUsXHJcbiAgICAgIGRpc3BhdGNoXHJcbiAgICB9KSxcclxuICAgIFtzdGF0ZV1cclxuICApXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8Q291bnRDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt2YWx1ZX0+XHJcbiAgICAgICAgPGgxPmhvb2tzPC9oMT5cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgIHN0eWxlPXt7IC4uLmJ0blN0eWxlLCBtYXJnaW5MZWZ0OiAnMzBweCcgfX1cclxuICAgICAgICAgIG9uQ2xpY2s9e2luY3JlbWVudH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICArXHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPHA+e3N0YXRlLmNvdW50fTwvcD5cclxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBzdHlsZT17YnRuU3R5bGV9IG9uQ2xpY2s9e2RlY3JlbWVudH0+XHJcbiAgICAgICAgICAtXHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgPGltZyBzcmM9e3lvdXR1YmV9IGFsdD1cIlwiIC8+XHJcbiAgICAgIDwvQ291bnRDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb29rc1xyXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsiUm91dGVzIiwiUm91dGUiLCJMaW5rIiwiSGVsbG9Xb3JsZCIsIkhvb2tzIiwiRXJyb3JIYW5kbGUiLCJBcHAiLCJwYWRkaW5nIiwiY3JlYXRlQ29udGV4dCIsIkVycm9yQ29udGV4dCIsImhhc0Vycm9yIiwiZXJyb3JNZXNzYWdlIiwiZXJyb3IiLCJzZXRDb250ZXh0RXJyb3IiLCJzZXRDb3RleHRFcnJvckRvbmUiLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZU5hdmlnYXRlIiwidXNlRXJyb3IiLCJFcnJvckZhbGxiYWNrIiwicmVzZXRFcnJvckJvdW5kYXJ5IiwiY29udGV4dCIsIm5hdmlnYXRlIiwidGVybWluYXRlRXJyb3IiLCJtZXNzYWdlIiwicHJvY2VzcyIsImVudiIsIk5PREVfRU5WIiwid2luZG93IiwibG9jYXRpb24iLCJyZWxvYWQiLCJuYW1lIiwidXNlU3RhdGUiLCJ1c2VNZW1vIiwiUHJvcFR5cGVzIiwiRXJyb3JQcm92aWRlciIsImNoaWxkcmVuIiwic2V0SGFzRXJyb3IiLCJzZXRFcnJvck1lc3NhZ2UiLCJzZXRFcnJvciIsIkVycm9yTWVzc2FnZSIsIkVycm9yIiwiZXJyb3JWYWx1ZSIsImRlZmF1bHRQcm9wcyIsInByb3BUeXBlcyIsIm5vZGUiLCJ1c2VDb250ZXh0IiwidW5kZWZpbmVkIiwiY3VzdG9tRXJyb3JUaHJvdyIsImF4aW9zRXJyb3IiLCJyZXNwb25zZSIsInN0YXR1cyIsImRhdGEiLCJjb25zb2xlIiwiUmVhY3REb20iLCJCcm93c2VyUm91dGVyIiwiRXJyb3JCb3VuZGFyeSIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJheGlvcyIsIkFQSSIsImNyZWF0ZSIsImJhc2VVUkwiLCJ0ZXh0Iiwic2V0VGV4dCIsInZhbGlkRXJyb3IiLCJzZXRWYWxpZEVycm9yIiwic2VydmVyRXJyb3IiLCJzZXRTZXJ2ZXJFcnJvciIsImhhbmRsZVRleHQiLCJlIiwidmFsIiwidGFyZ2V0IiwidmFsdWUiLCJ0ZXh0VmFsaWRhdGlvbiIsInN0ciIsInJhdHoiLCJyQXRaIiwicjB0OSIsInRlc3QiLCJvbkNsaWNrIiwib3B0aW9ucyIsInVybCIsIm1ldGhvZCIsImhlYWRlcnMiLCJyZXMiLCJldmVudCIsImJhY2tncm91bmQiLCJjb2xvciIsImxvZyIsInVzZVJlZHVjZXIiLCJ5b3V0dWJlIiwiQWN0aW9uVHlwZSIsIklOQ1JFTUVOVF9DT1VOVCIsIkRFQ1JFTUVOVF9DT1VOVCIsInJlZHVjZXJGdW5jIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiY291bnQiLCJpbml0aWFsU3RhdGUiLCJDb3VudENvbnRleHQiLCJkaXNwYXRjaCIsImluY3JlbWVudCIsImRlY3JlbWVudCIsImJ0blN0eWxlIiwid2lkdGgiLCJoZWlnaHQiLCJmb250U2l6ZSIsIm1hcmdpbkxlZnQiXSwic291cmNlUm9vdCI6IiJ9