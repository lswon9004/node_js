//noteManager.js
//메모 추가,조회,삭제의 기능을 보유한 JSON형식의 메모 모듈 만들기
//추가 : writeNotes(notes),addNote(title, content)
//조회 : readNotes(),getNotes()
//삭제 : deleteNote(id)
//저장파일 : notes.json
const fs = require("fs");
const notesFile = "notes.json";

function readNotes() {
  //notesFile에 notes.json파일이 존재하는지 여부를 확인
  //존재하면 true 존재하지 않으면 false
  //!fs.existsSync(notesFile) : 부정임으로 반대 즉 존재하지 않으면 true
  if (!fs.existsSync(notesFile)) {
    return [];
  }

  const data = fs.readFileSync(notesFile, "utf-8");
  return JSON.parse(data);
}

function writeNotes(notes) {
  //null : 특정 속성을 필터링 한느 인자값
  fs.writeFileSync(notesFile, JSON.stringify(notes, null, 2));
}

function addNote(title, content) {
  const notes = readNotes(); //데이터를 변수방에 저장
  const id = notes.length + 1;
  notes.push({
    id,
    title,
    content,
  });

  writeNotes(notes);
  console.log("added Successsfully");
}

function getNotes() {
  const notes = readNotes();
  console.log(notes);
}

function deleteNote(id) {
  let notes = readNotes();
  //filter 메소드를 사용하여 해당 id 존재여부 확인하여 제거
  notes = notes.filter((notes) => notes.id !== id);
  writeNotes(notes);
  console.log("successsfully!!");
}

module.exports = { addNote, getNotes, deleteNote };
