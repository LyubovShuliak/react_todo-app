import React from "react";

const InputForm = ()=>{
    return(
        <form>
            
        <h1>todos</h1>

        <input
          className="new-todo"
          placeholder="What needs to be done?"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onClick={(e) => {
            
            if (e.target.value) {
              setTodos([
                ...todos,
                {
                  value: e.target.value,
                  key: Date.now(),
                  status: "new",
                  className: "",
                  isHidden: false,
                },
              ]);
            }
          }}
        />

        </form>
    )
}
export default InputForm