#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { exec } from 'child_process';

(function () {
  let [,,...args] = process.argv;
  let filepath = (args.includes("-D")) ? path.resolve(`${__dirname}`, "..", "..", `test`) : path.resolve(`${__dirname}`, "..", "..", "..", "..", "test");
  try {
    let testFiles: string[] = fs.readdirSync(`${filepath}`);
    if(args.includes("--js")) {
      testFiles.forEach((testFile) => {
        if(!testFile.endsWith("ts") && testFile.endsWith("js")) {
          exec(`node ${filepath}\\${testFile}`, (error, stdout, stderr) => {
            console.log(testFile, " ", stdout, stderr);
          });
        }
      });
      // execute test as js
    } else if(args.includes("--ts")) {
      // execute test as ts
      testFiles.forEach((testFile) => {
        if(!testFile.endsWith("js") && testFile.endsWith("ts")) {
          exec(`ts-node ${filepath}\\${testFile}`, (error, stdout, stderr) => {
            console.log(testFile, " ", stdout, stderr);
          });
        }
      })
    } else {
      // default to js
      testFiles.forEach((testFile) => {
        if(!testFile.endsWith("ts") && testFile.endsWith("js")) {
          exec(`node ${filepath}\\${testFile}`, (error, stdout, stderr) => {
            console.log(testFile, " ", stdout, stderr);
          });
        }
      });
    }
  } catch {
    console.log("You need to specify your tests inside a test folder in project root");  
  }
})();