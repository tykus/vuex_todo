import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        todos: [
            { body: 'Write todo app', done: false },
            { body: 'Build Chopper Society app', done: false },
            { body: 'Update Maynooth Dresses', done: true }
        ]
    },
    getters: {
        allCompleted ({ todos }) {
            return todos.every(todo => todo.done);
        }
    },
    mutations: {
        addTodo ({ todos }, body) {
            todos.push({
                body,
                done: false
            })
        },
        updateTodo (state, {todo, body}) {
            todo.body = body
        },
        completeAll ({ todos }) {
            todos.forEach(todo => todo.done = true)
        },
        deleteTodo ({ todos }, todo) {
            todos.splice(todos.indexOf(todo), 1)
        },
        toggleTodo ({ todos }, todo) {
            todo.done = ! todo.done
        }
    }
});