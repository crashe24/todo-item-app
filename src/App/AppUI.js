import React, { useContext } from 'react';
import TodoCounterComponent from '../Components/TodoCounter';
import TodoSearchComponent from '../Components/TodoSearch';
import TodoListComponent from '../Components/TodoList';
import TodoItemComponent from '../Components/TodoItem';
import TodoCreateButtonComponent from '../Components/TodoCreateButton';
import TodoLoadingComponent from '../Components/TodoLoading';
import TodoErrorComponent from '../Components/TodoError';
import EmptyTodosComponent from '../Components/EmptyTodos';
import { TodoForm } from '../Components/TodoForm';
import { Modal } from '../Components/Modal'
import { TodoContext } from '../TodoContex';

const AppUI = () => {

  const {
    searchedValues,
    completeTodo,
    deleteTodo,
    loading,
    error,
    openModal,
    setOpenModal
} = useContext(TodoContext)
  return (
    <>
    <TodoCounterComponent />
    <TodoSearchComponent  />
    
      <TodoListComponent >
          {loading && (
            <>
              <TodoLoadingComponent />
              <TodoLoadingComponent />
              <TodoLoadingComponent />
            </>
          )}
          {error && <TodoErrorComponent />}
          {(!loading && searchedValues.length === 0) && <EmptyTodosComponent />}

          { searchedValues.map( 
            (todo) => <TodoItemComponent key={todo.text} 
                              text={todo.text} 
                              completed={todo.completed} 
                              onComplete = {() =>completeTodo(todo.text)}
                              onDelete ={() =>deleteTodo(todo.text)}
                              />)}

        </TodoListComponent>
         
      

          
   
    
    <TodoCreateButtonComponent setOpenModal={setOpenModal}/>

    {openModal && (
        <Modal>
          <TodoForm />
        </Modal>

    )}
   </>

  );
}

export {AppUI};
