import React, { Component } from 'react';

/* eslint-disable */
class InputTodo extends Component {
  state ={
    title: '',
  };

  onChange = (e) => {
    console.log('hello');
  }

  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="Add Todo..."
          value={this.state.title}
          onChange={this.onChange}
        />
        <button>Submit</button>
      </form>
    );
  }
}

/* eslint-enable */

export default InputTodo;
