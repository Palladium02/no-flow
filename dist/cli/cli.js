#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const child_process_1 = require("child_process");
(function () {
    let [, , ...args] = process.argv;
    let filepath = (args.includes("-D")) ? path_1.default.resolve(`${__dirname}`, "..", "..", `test`) : path_1.default.resolve(`${__dirname}`, "..", "..", "..", "..", "test");
    try {
        let testFiles = fs_1.default.readdirSync(`${filepath}`);
        if (args.includes("--js")) {
            testFiles.forEach((testFile) => {
                if (!testFile.endsWith("ts") && testFile.endsWith("js")) {
                    console.log("--here");
                    (0, child_process_1.exec)(`node ${filepath}\\${testFile}`, (error, stdout, stderr) => {
                        console.log(testFile, " ", stdout, stderr);
                    });
                }
            });
            // execute test as js
        }
        else if (args.includes("--ts")) {
            // execute test as ts
            testFiles.forEach((testFile) => {
                if (!testFile.endsWith("js") && testFile.endsWith("ts")) {
                    (0, child_process_1.exec)(`ts-node ${filepath}\\${testFile}`, (error, stdout, stderr) => {
                        console.log(testFile, " ", stdout);
                    });
                }
            });
        }
        else {
            // default to js
            testFiles.forEach((testFile) => {
                if (!testFile.endsWith("ts") && testFile.endsWith("js")) {
                    (0, child_process_1.exec)(`node ${filepath}\\${testFile}`, (error, stdout, stderr) => {
                        console.log(testFile, " ", stdout);
                    });
                }
            });
        }
    }
    catch (_a) {
        console.log("You need to specify your tests inside a test folder in project root");
    }
})();
