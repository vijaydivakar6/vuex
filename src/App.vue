<template>
  <div id="app">
<CreateTodo/>
   <ListTodos/>
   <TodosCount/>
  </div>
</template>

<script>
import CreateTodo from "./components/CreateTodo.vue"
import ListTodos from "./components/ListTodos.vue"
import TodosCount from "./components/TodosCount.vue"

export default {
  name: 'App',
  components:{
    TodosCount,
    CreateTodo,
    ListTodos
  },
  mounted(){
    this.$store.dispatch('todos/getTodos')
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
input{
  border:px solid #000;
  padding: 20px;
  font-size: 22px;
}
ul{
  list-style-type:none;
  padding:0;
}
li{
  font-size: 26px;
}
</style>
