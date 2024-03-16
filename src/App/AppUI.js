import React from 'react';
import TodoCounterComponent from '../Components/TodoCounter';
import TodoSearchComponent from '../Components/TodoSearch';
import TodoListComponent from '../Components/TodoList';
import TodoItemComponent from '../Components/TodoItem';
import TodoCreateButtonComponent from '../Components/TodoCreateButton';
import TodoLoadingComponent from '../Components/TodoLoading';
import TodoErrorComponent from '../Components/TodoError';
import EmptyTodosComponent from '../Components/EmptyTodos';

const AppUI = (props) => {
  return (
    <>
    <TodoCounterComponent completed={props.completedTodos} total={props.totalTodos} />
    <TodoSearchComponent 
       searchValue={props.searchValue} 
       setSearchValue = {props.setSearchValue} 
     />
    <TodoListComponent >
       {props.loading && (
         <>
          <TodoLoadingComponent />
          <TodoLoadingComponent />
          <TodoLoadingComponent />
        </>
       )}
       {props.error && <TodoErrorComponent />}
       {(!props.loading && props.searchedValues.length === 0) && <EmptyTodosComponent />}

       { props.searchedValues.map( 
         (todo) => <TodoItemComponent key={todo.text} 
                           text={todo.text} 
                           completed={todo.completed} 
                           onComplete = {() =>props.completeTodo(todo.text)}
                           onDelete ={() =>props.deleteTodo(todo.text)}
                           />)}

    </TodoListComponent>
    <TodoCreateButtonComponent />
   </>

  );
}

export {AppUI};
