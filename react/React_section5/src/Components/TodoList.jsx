import { useState } from "react"

const TodoList = ()=>{
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState("");
    const handlerInputChange = (e) =>{
        //체인지 이벤트 발생시 마다 newTodo에 저장
        setNewTodo(e.target.value);
    }
    const handlerAddTodo =() =>{
        if(newTodo.trim!=="") {
            setTodos([...todos,newTodo]);
            setNewTodo("");
        }
    }
    const handlerDeleteTodo = (index)=>{
        const newTodos = todos.filter((_,i)=>i !==index)
        setTodos(newTodos);
    }
    return(
        <div className="todo-list">
            <h1 className="App">TodoList</h1>
            <input placeholder="Add a new task" type="text" value={newTodo} onChange={handlerInputChange} />
            <button onClick={handlerAddTodo} >add</button>
            <ul>
                {todos.map((todo,index)=>(
                   <li key={index}> 
                        {todo} <button onClick={()=>{handlerDeleteTodo(index)}}>Delete</button>
                   </li>
                ))}
            </ul>
        </div>
    )
}

export default TodoList