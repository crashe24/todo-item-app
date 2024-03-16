import './TodoList.css'

const TodoListComponent = ({children}) => {
  return (
    <div className='TodoList'>
        {children}
    </div>
  )
}

export default TodoListComponent