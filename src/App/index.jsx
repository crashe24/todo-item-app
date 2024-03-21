
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
      addTodo
} = useTodos()

   return (
    <>
      <TodoHeaderComponent>
        <TodoCounterComponent totalTodos = {totalTodos} completedTodos = {completedTodos}/>
        <TodoSearchComponent  searchValue = {searchValue} setSearchValue  =  {setSearchValue}/>
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
        render = { todo => (
                        <TodoItemComponent key={todo.text} 
                                          text={todo.text} 
                                          completed={todo.completed} 
                                          onComplete = {() =>completeTodo(todo.text)}
                                          onDelete ={() =>deleteTodo(todo.text)}
                                          />
                            )
                } 
        />
         
    <TodoCreateButtonComponent setOpenModal={setOpenModal}/>

    {openModal && (
        <Modal>
          <TodoForm addTodo = {addTodo} setOpenModal = {setOpenModal} />
        </Modal>

    )}
   </>

  );
}

export default App;
