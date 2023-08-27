"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  isArray: () => isArray,
  isBoolean: () => isBoolean,
  isDate: () => isDate,
  isElement: () => isElement,
  isEmpty: () => isEmpty,
  isFunction: () => isFunction,
  isNumber: () => isNumber,
  isObject: () => isObject,
  isPromise: () => isPromise,
  isPropAbsent: () => isPropAbsent,
  isString: () => isString,
  isStringNumber: () => isStringNumber,
  isSymbol: () => isSymbol,
  isUndefined: () => isUndefined,
  unique: () => unique
});
module.exports = __toCommonJS(src_exports);

// node_modules/.pnpm/@vue+shared@3.3.4/node_modules/@vue/shared/dist/shared.esm-bundler.js
function makeMap(str, expectsLowerCase) {
  const map = /* @__PURE__ */ Object.create(null);
  const list = str.split(",");
  for (let i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase ? (val) => !!map[val.toLowerCase()] : (val) => !!map[val];
}
var EMPTY_OBJ = true ? Object.freeze({}) : {};
var EMPTY_ARR = true ? Object.freeze([]) : [];
var isArray = Array.isArray;
var isDate = (val) => toTypeString(val) === "[object Date]";
var isFunction = (val) => typeof val === "function";
var isString = (val) => typeof val === "string";
var isSymbol = (val) => typeof val === "symbol";
var isObject = (val) => val !== null && typeof val === "object";
var isPromise = (val) => {
  return isObject(val) && isFunction(val.then) && isFunction(val.catch);
};
var objectToString = Object.prototype.toString;
var toTypeString = (value) => objectToString.call(value);
var cacheStringFunction = (fn) => {
  const cache = /* @__PURE__ */ Object.create(null);
  return (str) => {
    const hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
};
var camelizeRE = /-(\w)/g;
var camelize = cacheStringFunction((str) => {
  return str.replace(camelizeRE, (_, c) => c ? c.toUpperCase() : "");
});
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cacheStringFunction(
  (str) => str.replace(hyphenateRE, "-$1").toLowerCase()
);
var capitalize = cacheStringFunction(
  (str) => str.charAt(0).toUpperCase() + str.slice(1)
);
var toHandlerKey = cacheStringFunction(
  (str) => str ? `on${capitalize(str)}` : ``
);
var specialBooleanAttrs = `itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`;
var isBooleanAttr = /* @__PURE__ */ makeMap(
  specialBooleanAttrs + `,async,autofocus,autoplay,controls,default,defer,disabled,hidden,inert,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected`
);

// node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isNil.js
function isNil(value) {
  return value == null;
}
var isNil_default = isNil;

// src/types.ts
var isUndefined = (val) => val === void 0;
var isBoolean = (val) => typeof val === "boolean";
var isNumber = (val) => typeof val === "number";
var isEmpty = (val) => !val && val !== 0 || isArray(val) && val.length === 0 || isObject(val) && !Object.keys(val).length;
var isElement = (e) => {
  if (typeof Element === "undefined")
    return false;
  return e instanceof Element;
};
var isPropAbsent = (prop) => {
  return isNil_default(prop);
};
var isStringNumber = (val) => {
  if (!isString(val)) {
    return false;
  }
  return !Number.isNaN(Number(val));
};

// src/arrays.ts
var unique = (arr) => [...new Set(arr)];
/*! Bundled license information:

lodash-es/lodash.js:
  (**
   * @license
   * Lodash (Custom Build) <https://lodash.com/>
   * Build: `lodash modularize exports="es" -o ./`
   * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
   * Released under MIT license <https://lodash.com/license>
   * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
   * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   *)
*/
