import React from 'react';
import TodoItem from './TodoItem';

/* eslint-disable */
class TodoList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.todos.map((todo) => (
          <TodoItem key={todo.id}
          todo={todo}
          handleChangeProps={this.props.handleChangeProps}
          />
        ))}
      </ul>
    )
  }
}

/* eslint-enable */

export default TodoList;
