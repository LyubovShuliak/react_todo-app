import React from "react";
import { v4 as uuidv4 } from "uuid";
const Header = ({todos, setTodos, input, setInput})=>{

    const createTask = (e) => {
        if (e.target.value && e.code === "Enter") {
          const todo = [
            ...todos,
            {
              value: e.target.value,
              key: uuidv4(),
              className: "",
              isHidden: false,
              isChecked: false,
            },
          ];
          localStorage.setItem("todo-list", JSON.stringify(todo));
          setInput("");
    
          setTodos(todo);
        }
      };
    return(<header className="header" type="submit">
    <h1>todos</h1>

    <input
      className="new-todo"
      placeholder="What needs to be done?"
      value={input}
      onChange={(e) => setInput(e.target.value)}
      onKeyUp={createTask}
    />
  </header>)
}

export default Header