import React from 'react';
import styles from './TodoItem.module.css';

/* eslint-disable */
class TodoItem extends React.Component {
  state = {
    editing: false,
  }

  handleEditing = () => {
    this.setState({
      editing: true,
    })
    console.log('edit mode activated');
  }

  handleUpdatedDone = (e) => {
    if(e.key === 'Enter') {
      this.setState({
        editing: false
      })
    }
    console.log(e.key);
  }

  render() {
    const completedStyle = {
      fontStyle: "italic",
      color: "#595959",
      opacity: 0.4,
      textDecoration: "line-through",
    }

    const {completed, id, title} = this.props.todo;

    let viewMode = {};
    let editMode = {};

    if (this.state.editing) {
      viewMode.display = 'none';
    } else {
      editMode.display = 'none';
    }

    return (
      <li className={styles.item}>
        <div onDoubleClick={this.handleEditing} style={viewMode}>
        <input
          type="checkbox"
          className={styles.checkbox}
          checked={completed}
          onChange={() => this.props.handleChangeProps(id)}
        />
        <button onClick={() => this.props.deleteTodoProps(id)}>Delete</button>
        <span style={completed ? completedStyle : null}>
          {this.props.todo.title}
        </span>
        </div>
        <input
        type='text'
        className={styles.textInput}
        style={editMode}
        value={title}
        onChange={(e) => {this.props.setUpdate(e.target.value, id)}}
        onKeyDown={this.handleUpdatedDone}
        />
      </li>
    );
  }
}

/* eslint-enable */

export default TodoItem;
