import React, {useState} from "react";

const Footer = ({todos, setTodos})=>{
   
  const clearCompleted = () => {
    const uncompleted = todos.filter((el) => el.className !== "completed");
    localStorage.setItem("todo-list", JSON.stringify(uncompleted));
    setTodos(uncompleted);
  };
  

  const showCompleted = () =>
    setTodos(
      todos.map((el) =>
        el.className !== "completed"
          ? { ...el, isHidden: true }
          : { ...el, isHidden: false }
      )
    );

  const showActive = () =>
    setTodos(
      todos.map((el) =>
        el.className === "completed"
          ? { ...el, isHidden: true }
          : { ...el, isHidden: false }
      )
    );

  const showAll = () =>
    setTodos(
      todos.map((el) => {
        return { ...el, isHidden: false };
      })
    );

  
    return(
      <footer className="footer">
      <span className="todo-count">
        {todos.filter((el) => !el.className.includes("completed")).length}{" "}
        items left
      </span>

      <ul className="filters">
        <li>
          <a href="#/" className="selected" onClick={showAll}>
            All
          </a>
        </li>

        <li>
          <a href="#/active" onClick={showActive}>
            Active
          </a>
        </li>

        <li>
          <a href="#/completed" onClick={showCompleted}>
            Completed
          </a>
        </li>
      </ul>
      {todos.find((el) => el.className === "completed") ? (
        <button
          type="button"
          className="clear-completed"
          onClick={clearCompleted}
        >
          Clear completed
        </button>
      ) : (
        ""
      )}
    </footer>
    )
}
export default Footer