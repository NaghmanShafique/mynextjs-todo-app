'use client';
import AddTodo from "./AddTodo"
import TodoItems
 from "./TodoItems"
 import { ChakraProvider } from '@chakra-ui/react'
export default function Home() {
  return (<> 
      <div> 
        <ChakraProvider>
          <TodoItems/>  
        </ChakraProvider>     
      </div>
      </> 
      )
}
