import { createSlice } from "@reduxjs/toolkit";
const initialState = [];
const addTodoReducer = createSlice({
  name: "todos",
  initialState,
  reducers: {
    //reducers
    addTodos: (state, action) => {
      state.push(action.payload);
      return state;
    },
    removeTodos: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
    toggleTodos: (state, action) => {
      return state.map((item) =>
        item.id === action.payload
          ? { ...item, completed: !item.completed }
          : item
      );
    },
  },
});

export const { addTodos, removeTodos, toggleTodos } = addTodoReducer.actions;
export const reducer = addTodoReducer.reducer;
