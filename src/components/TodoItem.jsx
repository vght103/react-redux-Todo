import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { removeTodo, updateTodo } from "../store";

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();
  const [edit, setEdit] = useState(false);
  const [newText, setNewText] = useState(todo.text);
  const [completed, setCompleted] = useState(false);

  const deleteTodo = () => {
    dispatch(removeTodo(todo.id));
  };

  return (
    <li>
      {!edit ? (
        <>
          <input
            type="checkbox"
            onChange={(e) => setCompleted(e.target.checked)}
          />
          <span style={{ color: completed ? "red" : "" }}>{todo.text}</span>
          <button onClick={() => setEdit(true)}>수정</button>
          <button onClick={deleteTodo}>삭제</button>
        </>
      ) : (
        <>
          <input
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
          />
          <button
            onClick={() => {
              dispatch(updateTodo(todo.id, newText));
              setEdit(false);
            }}
          >
            저장
          </button>
          <button>취소</button>
        </>
      )}
    </li>
  );
};

export default TodoItem;
