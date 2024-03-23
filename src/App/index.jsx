
import { useTodos } from './useTodos';
import './App.css';

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
import { TodoHeaderComponent } from '../Components/TodoHeader';
import { ChangeAlert } from '../Components/ChangeAlert';




function App() {

  const {
      completedTodos,
      totalTodos,
      searchValue,
      setSearchValue,
      searchedValues,
      completeTodo,
      deleteTodo,
      loading,
      error,
      openModal,
      setOpenModal,
      addTodo,
      sincronizedTodos
} = useTodos()

   return (
    <>
      <TodoHeaderComponent loading = {loading}>
        <TodoCounterComponent totalTodos = {totalTodos} completedTodos = {completedTodos} 
        // loading = {loading}
        />
        <TodoSearchComponent  searchValue = {searchValue} setSearchValue  =  {setSearchValue} 
        // loading = {loading}
        />
      </TodoHeaderComponent>

      <TodoListComponent 
        error = {error}
        loading = {loading}
        searchedTodos = {searchedValues}
        totalTodos = {totalTodos}
        searchText = {searchValue}
        onError = {() => <TodoErrorComponent />}
        onLoading = {() => <TodoLoadingComponent />}
        onEmpty = {() => <EmptyTodosComponent  />}
        onEmptySearchResults = { (searchText) => <p>No hay resultado para tu busqueda {searchText}</p>}
        // render = { todo => (
        //                 <TodoItemComponent key={todo.text} 
        //                                   text={todo.text} 
        //                                   completed={todo.completed} 
        //                                   onComplete = {() =>completeTodo(todo.text)}
        //                                   onDelete ={() =>deleteTodo(todo.text)}
        //                                   />
        //                     )
        //         } 
        >
          {
            todo => (
              <TodoItemComponent key={todo.text} 
                                text={todo.text} 
                                completed={todo.completed} 
                                onComplete = {() =>completeTodo(todo.text)}
                                onDelete ={() =>deleteTodo(todo.text)}
                                />
                  )
          }
        </TodoListComponent>  
         
    <TodoCreateButtonComponent setOpenModal={setOpenModal}/>

    {openModal && (
        <Modal>
          <TodoForm addTodo = {addTodo} setOpenModal = {setOpenModal} />
        </Modal>

    )}
    <ChangeAlert sincronizedTodos = {sincronizedTodos}/>
   </>

  );
}

export default App;
