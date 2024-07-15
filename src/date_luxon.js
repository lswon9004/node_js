import { DateTime } from "luxon";

const now = DateTime.now();
console.log("현재 날짜와 시간 : ",now.toString());

const dt = DateTime.local(2024,9,6,18,20);
console.log("지정한 날짜와 시간 : ",dt.toString());

const formattedDate =dt.toLocaleString(DateTime.DATETIME_FULL);
console.log("포멧팅된 날짜: ",formattedDate);

const diff = now.diff(dt,["years","months","days"]);
console.log("현제 부터 지정된 날짜까지의 차이: ",diff.toObject());