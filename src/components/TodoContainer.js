import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Route, Routes } from 'react-router-dom';
import TodoList from './TodoList';
import Header from './Header';
import InputTodo from './InputTodo';
import Navbar from './Navbar';
import About from '../pages/About';
import NotMatch from '../pages/NotMatch';

/* eslint-disable */
const TodoContainer = () => {
  const [todos, setTodos] = useState(getInitialTodos())

  const handleChange = (id) => {
    setTodos((prevState) => prevState.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed
        }
      }
      return todo;
    }))
  }

  const delTodo = (id) => {
    setTodos([
      ...todos.filter((todo) => {
        return todo.id !== id
      }),
    ])
  }

  const addTodoItem = (title) => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false
    };
    setTodos([...todos, newTodo])
  }

  const setUpdate = (updatedTitle, id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.title = updatedTitle
        }
        return todo;
      }),
    )
  }

  function getInitialTodos () {
    const temp = localStorage.getItem('todos');
    const savedTodos = JSON.parse(temp);
    return savedTodos || []
  }

  useEffect(() => {
    const temp = JSON.stringify(todos)
    localStorage.setItem('todos', temp)
  }, [todos])

  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path='/'
          element={(
          <div className='container'>
            <div className='inner'>
              <Header />
              <InputTodo
              addTodoProps={addTodoItem}
              />
              <TodoList
                todos={todos}
                handleChangeProps={handleChange}
                deleteTodoProps={delTodo}
                setUpdate={setUpdate}
              />
            </div>
          </div>)}
        />
        <Route path='/about' element={<About/>}></Route>
        <Route path='*' element={<NotMatch/>}></Route>
      </Routes>
    </>
  );
}
/* eslint-enable */

export default TodoContainer;
