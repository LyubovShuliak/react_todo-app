import React from "react";

const Task = ({todos, setTodos, item})=>{
    const toggleCompletedTask = (item) => {
        const updatedTask = {
          ...item,
          isChecked: !item.isChecked,
          className: !item.isChecked ? "completed" : "",
        };
        setTodos(
          todos.map((todo) => {
            if (todo.key === updatedTask.key) {
              return updatedTask;
            } else {
              return todo;
            }
          })
        );
      };
    
      const openEditField = (e) => {
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
      };
    
      const destroy = (e) => {
        const filtered = todos.filter((el) => el.key !== e.target.id);
        setTodos([...filtered]);
      };
      const edit = (e) => {
        if (e.code === "Enter") {
          setTodos(
            todos.map((item) =>
              item.key == e.target.id
                ? {
                    ...item,
                    className: "",
                    value: e.target.value ? e.target.value : item.value,
                  }
                : item
            )
          );
        }
      };
    
    return(
        <li className={item.className} key={item.key}>
        <div className="view">
          <input
            type="checkbox"
            className="toggle"
            id={item.key}
            onChange={() => toggleCompletedTask(item)}
            checked={item.isChecked}
          />
          <label htmlFor={item.key} onDoubleClick={openEditField}>
            {item.value}
          </label>
          <button
            id={item.key}
            type="button"
            className="destroy"
            onClick={destroy}
          />
        </div>
        <input
          type="text"
          className="edit"
          id={item.key}
          onKeyDown={edit}
        />
      </li>
    )
}

export default Task