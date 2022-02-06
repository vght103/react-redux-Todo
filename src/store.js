import { configureStore, createSlice } from "@reduxjs/toolkit";

const todoList = createSlice({
  name: "todosList",
  initialState: [],
  reducers: {
    addTodo: {
      reducer: (state, action) => {
        state.push(action.payload);
      },

      prepare: (text) => {
        const id = Date.now();
        return {
          payload: {
            id,
            text,
          },
        };
      },
    },

    removeTodo: {
      reducer: (state, { payload }) =>
        state.filter((todo) => todo.id !== payload),
    },

    updateTodo: {
      reducer: (state, { payload }) =>
        state.map((todo) =>
          todo.id === payload.id ? { ...todo, text: payload.text } : todo
        ),

      prepare: (id, text) => {
        return {
          payload: {
            id,
            text,
          },
        };
      },
    },

    completeTodo: {
      reducer: (state, { payload }) =>
        state.map((todo) =>
          todo.id === payload.id
            ? { ...todo, completed: payload.completed }
            : todo
        ),

      prepare: (id, completed) => {
        return {
          payload: {
            id,
            completed,
          },
        };
      },
    },
  },
});

const store = configureStore({ reducer: todoList });

export const { addTodo, removeTodo, updateTodo, completeTodo } =
  todoList.actions;
export default store;
