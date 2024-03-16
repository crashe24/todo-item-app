import './CreateTodoButton.css'

const TodoCreateButtonComponent = () => {
  return (
      <button className='createTodoButton'
        onClick={ (event) => {
          console.log('event', event)
        }}
      >+</button>
  );
}

export default TodoCreateButtonComponent;
