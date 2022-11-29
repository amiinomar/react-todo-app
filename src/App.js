import React, {useState} from "react";
import "./style.css";
import TodoForm from "./Components/TodoForm";
import TodoList from "./Components/TodoList";

export default function App() {

const [] = useState({item:[{

  Text: "wash",
  key: Math.floor(msth.random()*50000),
  isCompeleted: false



},
{

  Text: "new",
  key: Math.floor(msth.random()*50000),
  isCompeleted: false



},
{

  Text: "soco",
  key: Math.floor(msth.random()*50000),
  isCompeleted: false



},

] })

  return (
    <div>
     <main>

     <TodoForm />
     <TodoList />
     </main>
     
    </div> 
  );
}
export default App;