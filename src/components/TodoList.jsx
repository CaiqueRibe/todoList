import { TodoItem } from "./TodoItem"

export function TodoList({ todos, toggleTodo, deleteTodo }) {
   return (
      <ul className="list">
         {todos.length === 0 ? "No Todos yet" : "Todo List"}
         {/* if left hand side condition true then exectes after && */}
         {/* {todos.length === 0 && "No Todos"}  */}
         
         {/* now that we have our todos set in array, instead of hardcoding it, were gonna loop thru the array and add it */}
         {todos.map((todo) => {
            return (
               <TodoItem
                  {...todo}
                  //   id={todo.id}
                  //   completed={todo.completed}
                  //   title={todo.title}
                  key={todo.id}
                  toggleTodo={toggleTodo}
                  deleteTodo={deleteTodo}
               />
            )
         })}
      </ul>
   )
}
