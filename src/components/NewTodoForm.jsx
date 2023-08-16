import { useState } from "react"

export default function NewTodoForm({onSubmit = () => {}}) {
   const [newValue, setNewValue] = useState("") // we are hooking up this useState to the input value below

   function handleSubmit(e) {
      e.preventDefault()
      onSubmit(newValue)
      setNewValue("") 

   }

   return (
      <form onSubmit={handleSubmit} className="new-item-form">
         <div className="form-row">
            <label htmlFor="item">New Item</label>
            {/* {console.log(newValue)} */}
            <input
               value={newValue}
               onChange={(e) => setNewValue(e.target.value)}
               // onBlur={(e) => setNewValue(e.target.value)}
               type="text"
               id="item"
            />
         </div>
         <button className="btn" disabled={newValue.trim() === ""}>
            Add
         </button>
      </form>
   )
}

