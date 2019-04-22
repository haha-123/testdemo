<template>
    <div class="app_ms">
        <Header></Header>
        <Todo></Todo>
        <Footer></Footer>
        <p>
            <router-link :to="{name:'home',params:{id:text}}">go to home</router-link>
            <router-link to="/bar">go to bar</router-link>
        </p>
        <router-view></router-view>
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