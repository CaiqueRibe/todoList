import { useEffect, useState } from "react"
import "./styles.css"
import  NewTodoForm from "./components/NewTodoForm"
import { TodoList } from "./components/TodoList"

export default function App() {
   // remenber that newValue = 'asdasdasdasd' // cant do this   // setNewValue("Teste") // must use the function
   // const [todos, setTodos] = useState([]) // any type of data that you want to have re-render you component when it change, you wanna put those inside of state
   
   const [todos, setTodos] = useState(() =>{
      const localValue = localStorage.getItem("ITEM")
      // console.log(localStorage.getItem("ITEM"));
      if(localValue == null) return []
      return JSON.parse(localValue)
   })

    // could also have done (if (newValue === "") return)
    //   if (newValue.trim() !== "") {
   function addTodo(title) {
      if (title.trim() !== "") {
         setTodos((currentTodos) => [
            ...currentTodos,
            { id: crypto.randomUUID(), title: title, completed: false },
         ])
      }
   }

   function toggleTodo(id, completed) {
      setTodos((curerentTodos) => {
         return curerentTodos.map((todo) => {
            if (todo.id === id) {
               return { ...todo, completed }
            }
            return todo
         })
      })
   }

   function deleteTodo(id) {
      setTodos((curerentTodos) => {
         const updatedTodos = [...curerentTodos]
         // console.log(updatedTodos);
         const index = updatedTodos.findIndex((e) => e.id === id)
         // console.log(index);
         updatedTodos.splice(index, 1)

         return updatedTodos
         // return curerentTodos.filter((todo) => todo.id !== id) // this will return all the currentodos execept the one i dicided to remove(deleted)
      })
   }


   useEffect(() => {
      localStorage.setItem("ITEM", JSON.stringify(todos))
      // console.log(JSON.stringify(todos));
   }, [todos])

   return (
      <>
         <NewTodoForm onSubmit={addTodo}/>
         <h1 className="header">Todo List</h1>
         <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
      </>
   )
}
