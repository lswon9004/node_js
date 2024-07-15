//ES 모듈
//getdate.js 모듈
import { getCurrentDate, getDayOfWeek } from "./getdate.js";
//import formatMessage from "./getdate.js";
//줄여서 사용가능
import format from "./getdate.js";
//여러개의 모듈 합치기
//import format, { getCurrentDate, getDayOfWeek } from "./getdate.js";
const today = getCurrentDate();
console.log("오늘 날짜: ", today);

const specificDate = "2024-07-02";
const dayOfWeek = getDayOfWeek(specificDate);
console.log("7월 2일:(일요일:0, 월요일:1..)  ", dayOfWeek, "입니다.");
console.log("------------------------------");
const username = "Alice";
const message = "Hello, everyone!";
const formatMessage = format(username, message);

console.log(formatMessage);
