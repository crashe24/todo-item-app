//import { useContext } from 'react'
import './TodoCounter.css'
//import { TodoContext } from '../../TodoContex'

const TodoCounterComponent = ({totalTodos, completedTodos}) => {

 // const {totalTodos, completedTodos} = useContext(TodoContext)
  const todosCompleted = totalTodos === completedTodos

  if (todosCompleted) {
    return (<>
        <h1 className='TodoCounter'> Felicitaciones has completado los todos</h1>
    </>)
  }
  return (
        <h1 className='TodoCounter'>El numero de todos completados es 
            <span>
            {completedTodos}
              </span> de 
            <span>
                {totalTodos}
            </span>
        </h1>
    
  );
}

export default TodoCounterComponent;
