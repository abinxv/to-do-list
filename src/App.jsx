import React, { useState } from "react";
import "./index.css";
import { NewTodoForm } from "./NewTodoForm";
import { ToDoList } from "./ToDoList";

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
      return currentTodos.filter((todo) => todo.id !== id);
      // remove the todo which id is id
    });
  }

  return (
    <>
      <NewTodoForm onSubmit={addTodo} />
      <h1 className="header">To-Do List</h1>
      <ToDoList todos = {todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
    </>
  );
};

export default App;
