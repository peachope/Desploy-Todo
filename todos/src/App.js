import logo from "./logo.svg";
import React from "react";
import "./App.css";
import "./scss/style.scss";

import TodoList from "./components/TodoList";

function App() {
 

  return (
    <div className="todo-app">
      <h1>Todo App</h1>
        <TodoList/>
    </div>
  );
}

export default App;
