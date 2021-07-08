import React, { useState } from "react";
import Form from "./Form";
import Todo from "./Todo";
function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }
    const newTodos = [todo, ...todos];
    setTodos(newTodos);
    console.log(...todos);
  };
  const completeTodo = id =>{
      let updatedTodos = todos.map(todo =>{
          if(todo.id === id) {
              todos.isComplete = !todo.isComplete
          }
          return todo;
      });
      setTodos(updatedTodos);
  }

  return (
    <div>
      <Form onSubmit={addTodo} />
      <Todo todos={todos} completeTodo={completeTodo}/>
      </div>
  );
}
export default TodoList;
