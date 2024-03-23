import './TodoCounter.css'

const TodoCounterComponent = ({totalTodos, completedTodos, loading}) => {

  const todosCompleted = totalTodos === completedTodos

  if (todosCompleted) {
    return (<>
        <h2 className={`TodoCounter ${!!loading && 'TodoCounter--loading'}`}> Felicitaciones has completado los todos</h2>
    </>)
  }
  return (
        <h2 className={`TodoCounter ${!!loading && 'TodoCounter--loading'}`}>El numero de todos completados es 
            <span>
            {completedTodos}
              </span> de 
            <span>
                {totalTodos}
            </span>
        </h2>
    
  );
}

export default TodoCounterComponent;
