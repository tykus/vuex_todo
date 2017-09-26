<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Todo App</title>

        <style>
            body {
                display: flex;
                justify-content: center;
            }
            .level {
                display: flex;
                align-items: center;
            }
            .mr-1 {
                margin-right: 1em;
            }
        </style>
    <body>
        <div id="app">
            <div class="level">
                <h1 class="mr-1">Todos</h1>
                <button @click="completeAll" v-show="! allCompleted">Mark all complete</button>
            </div>
            
            <p>
                <input type="text" placeholder="Do something..." @keyup.enter="addTodo">
            </p>

            <todo v-for="(todo, index) in todos" :todo="todo" :key="index"></todo>
        </div>
        <script src="/js/app.js"></script>
    </body>
</html>
