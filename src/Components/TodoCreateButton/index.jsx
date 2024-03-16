import './CreateTodoButton.css'

const TodoCreateButtonComponent = ({setOpenModal}) => {
  return (
      <button className='createTodoButton'
        onClick={ (event) => {
          setOpenModal(s => !s)
        }}
      >+</button>
  );
}

export default TodoCreateButtonComponent;
