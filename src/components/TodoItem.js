import React from 'react';

/* eslint-disable */
class TodoItem extends React.Component {
  render() {
    return (
      <li> 
        <input type="checkbox" />
        {this.props.todo.title}
      </li>
    )
  }
}

/* eslint-enable */

export default TodoItem;
