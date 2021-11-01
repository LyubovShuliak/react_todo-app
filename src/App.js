import React, { useState, useEffect, useRef } from "react";
import Footer from "./components/footer/footer";
const App = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  useEffect(() => {}, [input]);

 const createTask = (e) => {
    if (e.target.value && e.code === "Enter") {
      setTodos([
        ...todos,
        {
          value: e.target.value,
          key: Date.now(),
          status: "new",
          className: "",
          isHidden: false,
          isChecked: false,
        },
      ]);
    }
  };
  

  return (
    <section className="todoapp">
      <header className="header" type="submit" onSubmit={(e) => console.log(e)}>
        <h1>todos</h1>

        <input
          className="new-todo"
          placeholder="What needs to be done?"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyUp={createTask}
        />
      </header>
      {input ? (
        <section className="main">
          <input
            type="checkbox"
            id="toggle-all"
            className="toggle-all"
            onChange={(e) =>
              e.target.checked
                ? setTodos(
                    todos.map((el) => {
                      return { ...el, className: "completed", isChecked: true };
                    })
                  )
                : setTodos(
                    todos.map((el) => {
                      return { ...el, className: "", isChecked: false };
                    })
                  )
            }
          />

          <label htmlFor="toggle-all">Mark all as complete</label>

          <ul className="todo-list">
            {todos.map((item, i) => {
              if (item.isHidden === false) {
                return (
                  <li className={item.className} key={item.key}>
                    <div className="view">
                      <input
                        type="checkbox"
                        className="toggle"
                        id={item.key}
                        // onChange={(e) =>
                        //   e.target.checked
                        //     ? setTodos(
                        //         todos.map((item) =>
                        //           item.key == e.target.id
                        //             ? {
                        //                 ...item,
                        //                 className: `completed`,
                        //                 isChecked: true,
                        //               }
                        //             : item
                        //         )
                        //       )
                        //     : setTodos(
                        //         todos.map((item) =>
                        //           item.key == e.target.id
                        //             ? {
                        //                 ...item,
                        //                 className: "",
                        //                 isChecked: false,
                        //               }
                        //             : item
                        //         )
                        //       )
                        // }
                        checked={item.isChecked}
                      />
                      <label
                        htmlFor={item.key}
                        onClick={(e) => {
                          const updatedList = todos.map((el) => {
                            if (el.key == e.target.htmlFor) {
                              const elem = {
                                ...el,
                                className: `editing`,
                              };

                              return elem;
                            }
                            return el;
                          });
                          setTodos(updatedList);
                        }}
                      >
                        {item.value}
                      </label>
                      <button
                        id={item.key}
                        type="button"
                        className="destroy"
                        onClick={(e) => {
                          const filtered = todos.filter(
                            (el) => el.key != e.target.id
                          );
                          setTodos([...filtered]);
                        }}
                      />
                    </div>
                    <input
                      type="text"
                      className="edit"
                      id={item.key}
                      onKeyDown={(e) => {
                        console.log(e);
                        if (e.code === "Enter") {
                          setTodos(
                            todos.map((item) =>
                              item.key == e.target.id
                                ? {
                                    ...item,
                                    className: "",
                                    value: e.target.value
                                      ? e.target.value
                                      : item.value,
                                  }
                                : item
                            )
                          );
                        }
                      }}
                    />
                  </li>
                );
              }
            })}
          </ul>
        </section>
      ) : null}

      {todos.length ? (
        <footer className="footer">
          <span className="todo-count">
            {todos.filter((el) => !el.className.includes("completed")).length}{" "}
            items left
          </span>

          <ul className="filters">
            <li>
              <a
                href="#/"
                className="selected"
                onClick={() =>
                  setTodos(
                    todos.map((el) => {
                      return { ...el, isHidden: false };
                    })
                  )
                }
              >
                All
              </a>
            </li>

            <li>
              <a
                href="#/active"
                onClick={() =>
                  setTodos(
                    todos.map((el) =>
                      el.className === "completed"
                        ? { ...el, isHidden: true }
                        : { ...el, isHidden: false }
                    )
                  )
                }
              >
                Active
              </a>
            </li>

            <li>
              <a
                href="#/completed"
                onClick={() =>
                  setTodos(
                    todos.map((el) =>
                      el.className !== "completed"
                        ? { ...el, isHidden: true }
                        : { ...el, isHidden: false }
                    )
                  )
                }
              >
                Completed
              </a>
            </li>
          </ul>
          {todos.find((el) => el.className === "completed") ? (
            <button
              type="button"
              className="clear-completed"
              onClick={() =>
                setTodos(todos.filter((el) => el.className !== "completed"))
              }
            >
              Clear completed
            </button>
          ) : (
            ""
          )}
        </footer>
      ) : null}
    </section>
  );
};

export default App;
