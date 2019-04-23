<template>
    <div class="header_ms">
        <h1>this is header page <button @click="addStoreCount">{{cntComputed}}</button></h1>
    </div>
</template>
<script>
    import store from "../store.js"
    export default{
        store,
        data(){
            return {

            }
        },
        methods:{
            addStoreCount(){
                store.commit("addCount")
            }
        },
        computed:{
            cntComputed(){
                return store.state.count
            }
        }
    }
</script>