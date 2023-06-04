import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllTodos } from '../services/actions/todosAction';

const Todos = () => {
    const {isLoading,error,todos}= useSelector((state)=>state);
    //console.log(todos);
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getAllTodos());
    }, [])
    
  return (
    <div>
        <h1>Todos App</h1>
        {isLoading && <h3>Loading!....</h3>}
        {error && <h4>{error.message}</h4>}
        <section>
        {todos.map((todo)=>{
          const {id,title} =todo;
          return <article key={id}>
            <h3>{id}</h3>
            <h4>{title}</h4>
          </article>
        })}
        </section>
    </div>
  )
}

export default Todos;