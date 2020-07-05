<template>
<h1>the total number of todos is  {{count}}</h1>

</template>

<script>
export default {
    // props:['count'],
      computed:{
        count(){
            return this.$store.getters.todosCount
        }
    }
}
</script>