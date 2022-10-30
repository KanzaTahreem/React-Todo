import React, { Component } from 'react';

/* eslint-disable */
class InputTodo extends Component {
  state ={
    title: '',
  };

  onChange = (e) => {
    this.setState({
      title: e.target.value,
    });
    console.log('hello');
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.title.trim()) {
      this.props.addTodoProps(this.state.title);
      this.setState({
      title: ''
      });
    } else {
      alert ('Please write item')
    }
    
    console.log(this.state.title);
  };

  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="Add Todo..."
          value={this.state.title}
          onChange={this.onChange}
        />
        <button onClick={this.handleSubmit}>Submit</button>
      </form>
    );
  }
}

/* eslint-enable */

export default InputTodo;
