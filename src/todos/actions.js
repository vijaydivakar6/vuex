const url='https://5aa775d97f6fcb0014ee249e.mockapi.io/todos'
import Axios from 'axios'
export default{
    addTodo({state ,commit},payload){
        Axios.post(url,{name:payload})
        .then(()=>{
            commit('addTodo',payload)
        })
    },
    getTodos({commit}){
    Axios.get(url).then(response=>{
        commit('addTodos',response.data.map(item=>item.name))
    })
  
}
}