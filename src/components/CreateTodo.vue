<template>
       <input type="text" v-model="todo" @keyup.enter="saveTodo" placeholder="Todo item">
</template>

<script>
export default {
    data:()=>({
        todo:''
    }),
    methods:{
        saveTodo(){
            this.$store.dispatch('todos/addTodo',this.todo)
        }
    }
}
</script>