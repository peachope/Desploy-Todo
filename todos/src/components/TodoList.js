import React, { useState,useEffect } from "react";
import Form from "./Form";
import Todo from "./Todo";
function TodoList() {
  const [todos, setTodos] = useState([]);
 
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos'))
    if (storedTodos) setTodos(storedTodos)
  }, [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }
  
    const newTodos = [todo, ...todos];

    setTodos(newTodos);
    console.log(...todos);
  };

  const updateTodo = (todoId, newValue) =>{
    if(!newValue.text || /^\s*$/.test(newValue.text)){
        return ;
    }

    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
}

  const removeTodo = id =>{
      const removeArr = [...todos].filter(todo =>todo.id !== id);

      setTodos(removeArr);
  }
   
  const completeTodo = id => {
    let updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
        console.log(todo.isComplete);
      }
      return todo;
    });
    
    setTodos(updatedTodos);
  };
 
  return (
    <>
      <Form onSubmit={addTodo} />
      <Todo todos={todos}
       completeTodo={completeTodo} 
       removeTodo={removeTodo} 
       updateTodo={updateTodo}/>
      
    </>
  );
}
export default TodoList;
