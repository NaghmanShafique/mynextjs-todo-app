"use client";
import React, { useState } from "react";

export default function TodoItems() {

  const [todo, setTodo] = useState("");

  const [todos, setTodos] = useState([
    {
      todoText: "Learn HTML",
      isCompleted: false
    },
    {
      todoText: "Learn CSS",
      isCompleted: false,
    },
    {
      todoText: "JavaScript ES6",
      isCompleted: false
    },
    {
      todoText: "TypeScript",
      isCompleted: false
    },
    {
      todoText: "NextJS 13",
      isCompleted: true
    }
  ]);

  const OnChangeHandler = (updatedTodo: any) => {
    const updatedTodos = todos.map((t) => {
      if (t.todoText === updatedTodo.todoText) {
        t.isCompleted = !t.isCompleted
      }
      return t;
    })
    setTodos(updatedTodos);
  }

  const createTodo = () => {
    const createdTodo = { todoText: todo, isCompleted: false };
    const updatedTodos = [...todos, createdTodo]
    setTodos(updatedTodos);
    setTodo("")
  }

  const deleteTodo = (deletedTodo: any) => {
    const updatedTodos = todos.filter((t) => {
      if (t.todoText === deletedTodo.todoText)
        return false;
      return true;
    })
    setTodos(updatedTodos);
  }

  return (<>
    <div>
      <input type="text" placeholder="Add Todo" value={todo} onChange={(e) => setTodo(e.target.value)} />
      <button style={{ margin: "5px" }} onClick={createTodo}>Add</button>
    </div>
    <div>
      <ul style={{ listStyleType: "none", padding: 0 }}>

        {


          todos.map((ele) => {
            console.log("element", ele);

            return (<>
              <input type="checkbox" checked={ele.isCompleted} onChange={() => { OnChangeHandler(ele) }} />
              <li style={{ width: "250px", padding: "5px", display: "inline-block", color: ele.isCompleted ? "green" : "red" }} key={ele.todoText}>{ele.todoText}</li>
              <button onClick={() => deleteTodo(ele)}>Delete</button><br />
            </>)

          }
          )
        }
      </ul>
    </div>
  </>
  )
}