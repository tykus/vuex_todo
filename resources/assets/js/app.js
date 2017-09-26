require('./bootstrap');

window.Vue = require('vue');

import store from './store';

Vue.component('todo', require('./components/Todo.vue'));

import { mapState, mapMutations, mapGetters } from 'vuex';

const app = new Vue({
    el: '#app',
    store,
    computed: {
        ...mapState(['todos']),
        ...mapGetters(['allCompleted'])
    },
    methods: {
        ...mapMutations(['completeAll']),
        addTodo (e) {
            let body = e.target.value
            this.$store.commit('addTodo', body)
            e.target.value = ''
        }
    }
});
