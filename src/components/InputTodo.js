import React, { useState } from 'react';
import { FaPlusCircle } from 'react-icons/fa';

/* eslint-disable */
const InputTodo = (props) => {
  const [inputText, setInputText] = useState({
    title: '',
  });

  const onChange = (e) => {
    setInputText({
      ...inputText,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputText.title.trim()) {
      props.addTodoProps(inputText.title);
      setInputText({
        title: '',
      });
    } else {
      alert('Please write item');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input
        type="text"
        className="input-text"
        name="title"
        placeholder="Add Todo..."
        value={inputText.title}
        onChange={onChange}
      />
      <button className="input-submit"><FaPlusCircle /></button>
    </form>
  );
};

/* eslint-enable */

export default InputTodo;
