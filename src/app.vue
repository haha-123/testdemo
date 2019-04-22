<template>
    <div class="app_ms">
        <Header></Header>
        <Todo></Todo>
        <Footer></Footer>
        <h1>this is app {{text}}</h1>
    </div>
</template>
<script>
    import Header from "./todos/header.vue"
    import Todo from "./todos/todo.vue"
    import Footer from "./todos/footer.jsx"
    export default{
        data(){
            return {
                text:"test page"
            }
        },
        components:{
            Header,
            Todo,
            Footer,
        }
    }
</script>