import { create } from "zustand";
import { produce } from "immer";

export const useStrore = create((set) => ({
    todos: [],

    addTodo: (todo) => set(produce((state) => {
        state.todos.push(todo)
        })),

    deleteTodo: (index) => set((state) => ({
         todos: state.todos.filter((_, i) => i !== index) 
        })),
        
    toggleTodo: (index) => set(
        (state) => ({
             todos: state.todos.map((todo, i) => 
                i === index ? { ...todo, completed: !todo.completed }:todo
            ),
         })),
}));