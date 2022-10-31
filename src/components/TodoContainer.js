import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodoList from './TodoList';
import Header from './Header';
import InputTodo from './InputTodo';

/* eslint-disable */
const TodoContainer = () => {
  const [todos, setTodos] = useState([])

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

  // componentDidMount () {
  //   const temp = localStorage.getItem('todos');
  //   const loadedTodos = JSON.parse(temp);
  //   if (loadedTodos) {
  //     this.setState({
  //       todos: loadedTodos
  //     })
  //   }
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState.todos !== this.state.todos) {
  //     const temp = JSON.stringify(this.state.todos)
  //     localStorage.setItem('todos', temp)
  //   }
  // }

  return (
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
    </div>
  );
}
/* eslint-enable */

export default TodoContainer;
