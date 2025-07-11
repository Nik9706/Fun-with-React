import { createSlice, nanoid, Nanoid } from '@reduxjs/toolkit';

const intialState = {
    todos: [{
        id: "1",
        titile: "Fun With React",

    }]
}

export const todoSlice = createSlice({
    name: "todo",
    intialState: intialState,
    reducers: {

        addTodo: (state, action) => {
            const todo = {

                id: nanoid(),
                titile: "Fun With React",


            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id == action.payload)
        },
    }

})

export const { addTodo, removeTodo } = todoSlice.actions

export default todoSlice.reducer