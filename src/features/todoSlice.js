import { createSlice } from "@reduxjs/toolkit";
import { uniqueId } from "lodash";

export const todoSlice = createSlice({
  name: "todos",
  initialState: {
      todos: [],
      userInput: ""
  },

  reducers: {
    setUserInput:(state, action)=>{
      state.userInput = action.payload.userInput;
    },
    createTodo: (state) => {
      if (state.userInput === "") return;

      const newTodo = {
        id: uniqueId(),
        content: state.userInput,
        completed: false
      };

      state.todos.push(newTodo);
      state.userInput = ""
    },

    toggleTodo: (state,action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload.id);
      todo.completed = !todo.completed;
    },

    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
    },

    editTodo: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload.id);
      if (todo) {
        todo.content = action.payload.content;
      }
    },
  },
});

export const actions = todoSlice.actions;

export default todoSlice.reducer;