import React from 'react';
import TodoItem from './TodoItem';

/* eslint-disable */
class TodoList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.todos.map((todo) => (
          // <li key={todo.id}>
          //   {todo.title}
          // </li>
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    )
  }
}

/* eslint-enable */

export default TodoList;
