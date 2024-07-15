//fileManager.js

//fs는 내장형 모듈로 파일 시스템에 접근하여 파일을 읽고 쓰는 작업을 수행
const fs = require("fs");

function writeFile(fileName, content) {
  fs.writeFileSync(fileName, content);
}

function readFile(fileName) {
  return fs.readFileSync(fileName, "utf-8");
}

module.exports = {
  writeFile,
  readFile,
};
