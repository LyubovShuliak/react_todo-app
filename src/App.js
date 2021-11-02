import React, { useState, useEffect, useRef } from "react";

import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Task from "./components/task/Task";
const App = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    const tods = JSON.parse(localStorage.getItem("todo-list"));

    if (tods) {
      setTodos(tods);
    } else {
      tods = localStorage.setItem("todo-list", JSON.stringify([]));
      setTodos(tods);
    }
  }, []);

  const toggleCompletedAll = (e) => {
    const updatedTodoItems = todos.map((el) => {
      return {
        ...el,
        className: e.target.checked ? "completed" : "",
        isChecked: e.target.checked,
      };
    });

    setTodos(updatedTodoItems);
  };

 
  return (
    <section className="todoapp">
      <Header
        todos={todos}
        setTodos={setTodos}
        input={input}
        setInput={setInput}
      />
      <section className="main">
        {todos.length ? (
          <input
            type="checkbox"
            id="toggle-all"
            className="toggle-all"
            onChange={toggleCompletedAll}
          />
        ) : null}
        {todos.length ? (
          <label htmlFor="toggle-all">Mark all as complete</label>
        ) : null}

        <ul className="todo-list">
          {todos.map((item, i) => {
            if (item.isHidden === false) {
              return (
              <Task setTodos ={setTodos} todos={todos} item={item} />
              );
            }
          })}
        </ul>
      </section>

      {todos.length ? (
        <Footer
          todos={todos}
          setTodos={setTodos}
      
        />
      ) : null}
    </section>
  );
};

export default App;
