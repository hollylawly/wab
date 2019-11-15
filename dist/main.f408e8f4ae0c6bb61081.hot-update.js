exports.id = "main";
exports.modules = {

/***/ "./src/middleware/authz.middleware.ts":
/*!********************************************!*\
  !*** ./src/middleware/authz.middleware.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n/**\n * Required External Modules\n */\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];\n    result[\"default\"] = mod;\n    return result;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar dotenv = __importStar(__webpack_require__(/*! dotenv */ \"dotenv\"));\nvar http_exception_1 = __importDefault(__webpack_require__(/*! ../common/http-exception */ \"./src/common/http-exception.ts\"));\ndotenv.config();\n/**\n * Authorization Middleware Function\n */\nexports.checkPermissions = function (permissions) {\n    return function (request, response, next) {\n        if (!permissions) {\n            next();\n        }\n        var user = request.user;\n        if (!user) {\n            next(new http_exception_1.default(403, \"Unauthorized\"));\n        }\n        if (user) {\n            if (!user.permissions) {\n                next(new http_exception_1.default(403, \"Unauthorized\"));\n            }\n        }\n    };\n};\n\n\n//# sourceURL=webpack:///./src/middleware/authz.middleware.ts?");

/***/ })

};