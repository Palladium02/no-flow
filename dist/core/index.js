"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.expect = exports.test = void 0;
const colors_1 = require("./colors");
function test(description, fn) {
    let now = Date.now();
    let result = fn();
    let delta = Date.now() - now;
    if (result) {
        console.log(`${(0, colors_1.pass)("PASS")}\n✓ ${description} (${delta}ms)`);
    }
    else {
        console.log(`${(0, colors_1.fail)("FAIL")}\n❌ ${description} (${delta}ms)`);
    }
}
exports.test = test;
function expect(value) {
    return {
        toBe: (testValue) => {
            if (testValue === value) {
                return true;
            }
            else {
                return false;
            }
        },
        notToBe: (testValue) => {
            if (testValue !== value) {
                return true;
            }
            else {
                return false;
            }
        },
        toBeGreateThan: (testValue) => {
            if (testValue < value) {
                return true;
            }
            else {
                return false;
            }
        },
        toBeLessThan: (testValue) => {
            if (testValue > value) {
                return true;
            }
            else {
                return false;
            }
        },
        toMatchType: (type) => {
            if (typeof value === type) {
                return true;
            }
            else {
                return false;
            }
        }
    };
}
exports.expect = expect;
