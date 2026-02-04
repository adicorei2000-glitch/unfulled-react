import React, { useState } from 'react'
import styled from 'styled-components'

const StyledToDo = styled.div`
  padding: 16px;
box-sizing: border-box;
    max-width: 400px;
  margin: 0 auto;
`

const ToDoComponent = () => {
    const [todos, setTodos] = useState([])
    const [text, setText] = useState('')

    const addTodo = (e) => {
        e.preventDefault()
        const value = text.trim()
        if (!value) return
        const newTodo = { id: Date.now(), text: value, completed: false }
        setTodos((prev) => [newTodo, ...prev])
        setText('')

    }




    return (
        <StyledToDo>
            <div style={{ border: "1px solid red ", padding: "20px", }}>
                <h1>To-Do List</h1>
                <form onSubmit={addTodo}>
                    <input
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        placeholder="Add todo"

                    />
                    <button type="submit">Add</button>
                    <span>Total: {todos.length}</span>

                </form>


                <ul>


                    {todos.map((value, index) => (
                        <div style={{ display: "flex", justifyContent: "space-between", border: "1px solid #bd1313ff", padding: "8px", marginBottom: "4px" }} key={value.id}>
                            <li >
                                <input type="checkbox" checked={value.completed} onChange={() => setTodos(todos.map(todo => todo.id === value.id ? { ...todo, completed: !todo.completed } : todo))} />
                                <span style={{ textDecoration: value.completed ? "line-through" : "none" }}>{value.text}</span>

                            </li> <button onClick={() => setTodos(todos.filter(todo => todo.id !== value.id))}>Delete</button>


                        </div>




                    ))}
                </ul>
            </div>
        </StyledToDo>
    )
}

export default ToDoComponent