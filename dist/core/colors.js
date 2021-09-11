"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fail = exports.pass = void 0;
function pass(msg) {
    return `\x1b[42m ${msg} \x1b[0m`;
}
exports.pass = pass;
function fail(msg) {
    return `\x1b[41m ${msg} \x1b[0m`;
}
exports.fail = fail;
