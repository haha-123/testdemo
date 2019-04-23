<template>
    <div class="tabs">
        <span>{{unFinishCompletedTodos}} items completed</span>
        <span>
            <span v-for="state in states" :key="state" @click="toggleState(state)">
                {{state}}
            </span>
        </span>
        <span @click="clearCompleted">clear all completed</span>
        <slot name="slot_tabs"></slot>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                states:["all","active","completed"]
            }
        },
        props:{
            todos:{
                type:Array,
                required:true
            }
        },
        computed:{
            unFinishCompletedTodos(){
                return this.todos.filter(todo => !todo.completed).length
            }
        },
        methods:{
            toggleState(state){
                this.$emit("toggle",state)
            },
            clearCompleted(){
                this.$emit("clear")
            }
        }
    }
</script>