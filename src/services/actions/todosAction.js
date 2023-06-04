import axios from "axios";
import { GET_TODOS_FAILED, GET_TODOS_REQUEST, GET_TODOS_SUCCESS } from "../constants/todosConstant";

export const getAllTodos = ()=> async (dispatch)=>
{
    dispatch({type:GET_TODOS_REQUEST});
    // console.log('dsad');
    try {
    
        const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
        // alert(res.data);
        dispatch({type:GET_TODOS_SUCCESS,payload:res.data})
        // dispatch({type:GET_TODOS_SUCCESS,payload:test})
    } catch (error) {
        dispatch({type:GET_TODOS_FAILED,payload:error.message})
    }
}
