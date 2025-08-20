import { useState } from "react"

export default function () {
    const [todo, setTodo] = useState("")
    const [todos, setTodos] = useState([])

    const addTodo = () => {
        if(todo.trim()){
            setTodos([...todos, todo])
            setTodo("")
        }
    }
    return (
        <>
            <h2>할 일 목록</h2>
            <input
                type="text"
                value={ todo }
                onChange={(e) => setTodo(e.target.value)}
                placeholder="할 일을 입력하세요."
            />
            <button onClick={addTodo}>추가</button>
            <ul>
                {todos.map(
                    (item, index) => (
                        <li key={index}>
                            {item}
                        </li>
                    ))    
                    }
                   
                
            </ul>
        </>
    )
}