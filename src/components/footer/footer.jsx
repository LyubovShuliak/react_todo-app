import React, {useState} from "react";

const Footer = ()=>{
   const [toFilter, setTofilter] = useState([])
    return(
        <footer className="footer">
        <span className="todo-count">
          {toFilter.filter((el) => !el.className.includes("completed")).length}{" "}
          items left
        </span>

        <ul className="filters">
          <li>
            <a
              href="#/"
              className="selected"
              onClick={() =>
                setTofilter(
                    toFilter.map((el) => {
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
                setTofilter(
                    toFilter.map((el) =>
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
                setTofilter(
                  toFilter.map((el) =>
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
        {toFilter.find((el) => el.className === "completed") ? (
          <button
            type="button"
            className="clear-completed"
            onClick={() =>
              setTofilter(toFilter.filter((el) => el.className !== "completed"))
            }
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