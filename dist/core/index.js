"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.expect = exports.test = void 0;
function test(description, fn) {
    let now = Date.now();
    let result = fn();
    let delta = Date.now() - now;
    if (result) {
        console.log(`PASS\n✓ ${description} (${delta}ms)`);
    }
    else {
        console.log(`FAIL\n❌ ${description} (${delta}ms)`);
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
