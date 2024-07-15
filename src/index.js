//Common JS(CJS)모듈
console.log("안녕 Node.js");
const sayHello = require("./greeting");
const userName = "SolDesk";
console.log(sayHello(userName));
console.log("------------------------------");
//math 모듈
const math = require("./math");
console.log(math.add(5, 3));
console.log(math.subtract(5, 3));
console.log(math.multiply(5, 3));
console.log(math.divide(5, 3));
console.log("------------------------------");
//fileManager모듈
const fileManager = require("./fileManager");
const fileName = "sample1.txt";
const content = "Hello NodeJS! 하오하오";

fileManager.writeFile(fileName, content);
console.log(fileManager.readFile(fileName));

console.log("------------------------------");
//weatherModule모듈
/*
const getWeather = require("./weatherModule");
getWeather("Seoul");

console.log("------------------------------");
*/
//noteManager 모듈
const { addNote, getNotes, deleteNote } = require("./noteManager");
addNote("Node.js", "Learn how to use Node.js");
addNote("Node2", "점심시간이다제");
console.log("추가완료---------------------------");
getNotes();
deleteNote(2);
console.log("삭제완료---------------------------");
getNotes();