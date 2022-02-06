import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import TodoItem from "../components/TodoItem";
import { addTodo } from "../store";

const Home = () => {
  const [text, setText] = useState("");
  const todos = useSelector((state) => state.reducer);
  const dispatch = useDispatch();

  console.log(todos);
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(text));
    setText("");
  };

  return (
    <div>
      <h1>Todo Redux</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button>추가</button>
      </form>
      <ul>
        {todos && todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)}
      </ul>
    </div>
  );
};

export default Home;
