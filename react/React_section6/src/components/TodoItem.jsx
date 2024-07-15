import "./TodoItem.css";

const TodoItem = ({
  id,
  isDone,
  content,
  date,
  onUpdate,
  onDelete,
}) => {
  const onChangeCheckbox = () => {
    onUpdate(id); //Updates넘겨받음
  };

  return (
    <div className="TodoItem">
      <input
        onChange={onChangeCheckbox}
        readOnly
        checked={isDone}
        type="checkbox"
      />
      {isDone ?
      <div className="content"><del>{content}</del></div> :<div className="content">{content}</div>}
      <div className="date">
        {new Date(date).toLocaleDateString()}
      </div>
      <button onClick={()=>{onDelete(id)}}>삭제</button>
    </div>
  );
};

export default TodoItem;