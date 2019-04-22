<template>
    <div class="todo_ms">
        <input type="text" autofocus="autofocus" placeholder="接下来要做什么？" @keyup.enter="addTodo">
        <Item :todo="todo" v-for="todo in filterTodos" :key="todo.id" @del="delTodo"></Item>
        <Tabs :todos="todos" @toggle="toggleState" @clear="clearCompleted"></Tabs>
    </div>
</template>
<script>
    let id=0
    import Item from "./item.vue"
    import Tabs from "./tabs.vue"
    export default{
        data(){
            return {
                todos:[],
                filter:"all"
            }
        },
        methods:{
            addTodo(e){
                this.todos.unshift({
                    id:id++,
                    content:e.target.value.trim(),
                    completed:false
                })
                e.target.value = ""
            },
            delTodo(id){
                this.todos.splice(this.todos.findIndex(todo => todo.id === id),1)
            },
            toggleState(state){
                this.filter = state
            },
            clearCompleted(){
                this.todos = this.todos.filter(todo => !todo.completed)
            }
        },
        computed:{
            filterTodos(){
                if(this.filter == "all"){
                    return this.todos
                }
                let completed = this.filter === "completed"
                return this.todos.filter(todo => todo.completed === completed)
            }
        },
        components:{
            Item,
            Tabs,
        }
    }
</script>