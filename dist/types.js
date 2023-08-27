import { isArray, isObject, isString } from '@vue/shared';
import { isNil } from 'lodash-unified';
export { isArray, isFunction, isObject, isString, isDate, isPromise, isSymbol, } from '@vue/shared';
// export { isVNode } from 'vue'
export const isUndefined = (val) => val === undefined;
export const isBoolean = (val) => typeof val === 'boolean';
export const isNumber = (val) => typeof val === 'number';
export const isEmpty = (val) => (!val && val !== 0) ||
    (isArray(val) && val.length === 0) ||
    (isObject(val) && !Object.keys(val).length);
export const isElement = (e) => {
    if (typeof Element === 'undefined')
        return false;
    return e instanceof Element;
};
export const isPropAbsent = (prop) => {
    return isNil(prop);
};
export const isStringNumber = (val) => {
    if (!isString(val)) {
        return false;
    }
    return !Number.isNaN(Number(val));
};
