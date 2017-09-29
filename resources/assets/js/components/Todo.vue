<template>
    <li class="todo" :class="{ 'is-complete': todo.done }">
        <input type="checkbox" :checked="todo.done" @change="toggleTodo(todo)">
        <label v-text="todo.body" @dblclick="editing = true" v-show="! editing"></label>
        <input type="text" v-show="editing" @keyup.enter="updateTodo" v-model="body">
        <button @click="deleteTodo(todo)">x</button>
    </li>
</template>

<script>
    import { mapMutations } from 'vuex';
    export default {
        props: ['todo'],
        data () {
            return {
                body: this.todo.body,
                editing: false
            }
        },
        methods: {
            ...mapMutations(['deleteTodo', 'toggleTodo']),
            updateTodo (e) {
                this.$store.commit('updateTodo', {
                    todo: this.todo, 
                    body: e.target.value
                })
                this.editing = false         
            }
        }
    }
</script>

<style>
    .todo.is-complete {
        color: grey;
    }
</style>
