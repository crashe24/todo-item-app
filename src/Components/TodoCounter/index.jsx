import './TodoCounter.css'

const TodoCounterComponent = ({total, completed}) => {

  const todosCompleted = total ===completed

  if (todosCompleted) {
    return (<>
        <h1 className='TodoCounter'> Felicitaciones has completado los todos</h1>
    </>)
  }
  return (
        <h1 className='TodoCounter'>El numero de todos completados es 
            <span>
            {completed}
              </span> de 
            <span>
                {total}
            </span>
        </h1>
    
  );
}

export default TodoCounterComponent;
