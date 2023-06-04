import { GET_TODOS_FAILED, GET_TODOS_REQUEST, GET_TODOS_SUCCESS } from "../constants/todosConstant"

const initialTodosValue={
    isLoading:false,
    todos:[],
    error:null,
}

const todosReducer = (state=initialTodosValue,action) =>
{
   switch (action.type) {
    case GET_TODOS_REQUEST:
    return {
        ...state,
        isLoading:true,
    }

    case GET_TODOS_SUCCESS:
    return {
        todos:action.payload,
        isLoading:false,
        error:null,
    }

    case GET_TODOS_FAILED:
    return {
        isLoading:false,
        error:action.payload,
        todos:[],
    }
   
    default:
        return state;
   }
}

export default todosReducer;