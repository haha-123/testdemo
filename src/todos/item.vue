<template>
    <div class="item">
        <input type="checkbox" v-model="todo.completed">
        <span>{{todo.content}}</span>
        <span @click="delTodo">x</span>
    </div>
</template>
<script>
    export default{
        props:{
            todo:{
                type:Object,
                required:true
            }
        },
        methods:{
            delTodo(){
                this.$emit("del",this.todo.id)
            }
        }
    }
</script>
