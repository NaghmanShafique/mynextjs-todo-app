"use client";
import React, { useState } from "react";
import { Input , Button, Box} from "@chakra-ui/react";

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
    <Box>
      <Input type="text" variant='outline' m='10px' placeholder="Enter Your Todo" size={'sm'} maxW={'1024px'} value={todo} onChange={(e) => setTodo(e.target.value)} />
      <Button size='sm' colorScheme='blue' style={{ margin: "2px" }} onClick={createTodo}>Add Todo</Button>
    </Box>
    <Box maxW={'994px'} mx={'auto'}>
      <ul style={{ listStyleType: "none", padding: '20px' }}>

        {


          todos.map((ele) => {
            console.log("element", ele);

            return (<>
              <input type="checkbox" checked={ele.isCompleted} onChange={() => { OnChangeHandler(ele) }} />
              <li style={{ width: "750px", padding: "5px",marginLeft:"5px", display: "inline-block",boxShadow:'0 3px 10px rgb(0 0 0 / 0.2)'}} key={ele.todoText}>{ele.todoText}</li>
              <Button size='sm' colorScheme='blue' ml={'5px'} onClick={() => deleteTodo(ele)}>Delete</Button><br />
            </>)

          }
          )
        }
      </ul>
    </Box>
  </>
  )
}