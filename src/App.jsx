import React, { useState } from "react";
import "./index.css";
import { NewTodoForm } from "./NewTodoForm";

const App = () => {
  const [todos, setTodos] = useState([]);

  function addTodo(title) {
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        {
          id: crypto.randomUUID(),
          title: title,
          completed: false,
        },
      ];
    });
  }

  function toggleTodo(id, completed) {
    setTodos((currentTodos) =>
      currentTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: completed } : todo,
      ),
    );
  }

  /* if( id == id){
          if(todo.completed) todo.completed = false;
          else todo.completed = true;
          -- this is wrong cuz in react states are immutable and hence we rnt changing it
          instead we're making a new state with completed as opposite
        */

  function deleteTodo(id) {
    setTodos((currentTodos) => {
      currentTodos.filter((todo) => todo.id !== id);
      // remove the todo which id is id
    });
  }

  return (
    <>
      <NewTodoForm onSubmit={addTodo} />
      <h1 className="header">To-Do List</h1>
      <ul className="list">
        {todos.length == 0 && "No todos"}
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <label>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={(e) => toggleTodo(todo.id, e.target.checked)}
                />
                {todo.title}
              </label>
              <button
                type = "button"
                onClick={() => deleteTodo(todo.id)}
                className="btn btn-danger"
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default App;
