import React, { useState } from 'react';
import './TodoForm.css'

const TodoForm = ({addTodo, setOpenModal}) => {

  const [newTodoValue, setNewTodoValue] = useState('') 

  const onSubmit = (event) =>{
    event.preventDefault()
    addTodo(newTodoValue) 
    setOpenModal(false)
  }
  const onCancel = (event) =>{
    setOpenModal(false)
  }

  const onChange = (event) => {
    setNewTodoValue(event.target.value)

  }
  return (
    <form onSubmit={onSubmit}>
      <label>Escribe tu nuevo TODO</label>
      <textarea 
        placeholder='Ingresa tu Todo'
        value={newTodoValue}
        onChange={onChange}
      />
      <div className='TodoForm-button-container'>
        <button 
        type='button'
        className='TodoForm-button TodoForm-button--cancel'
        onClick={onCancel}>Cancelar</button>
        <button 
        type='submit'
        className='TodoForm-button TodoForm-button--add'
        >Add</button>
      </div>
    </form>
  );
}

export { TodoForm }
