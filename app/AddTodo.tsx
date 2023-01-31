"use client";
import { useState } from "react"

export default function AddTodo () {
    const [todo, setTodo] = useState("");
    return(<>
            <div>
              <input type="text" placeholder="Add Todo" value={todo} onChange={(e)=>setTodo(e.target.value)}/>
              <button style={{margin:"5px"}}>Add</button>
            </div>
          </>
      
    )
}