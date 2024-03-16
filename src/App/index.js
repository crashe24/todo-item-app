
import './App.css';
import { useState } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { AppUI } from './AppUI';


function App() {

  const { items: todos, saveItem: saveTodos,loading, error } = useLocalStorage('TODOS_V1', [])
  const [searchValue, setSearchValue] = useState('')

  const completedTodos = todos.filter( t => !!t.completed).length
  const totalTodos = todos.length

  const searchedValues = todos.filter( t => t.text.toLowerCase().includes(searchValue?.toLowerCase())) 
  
  const deleteTodo = (text) => {
    const todosFilter = todos.filter( t => t.text !== text)
    console.log('saveTodos', saveTodos)
    saveTodos(todosFilter)

  }


  // const completeTodos2 = (text) => {
  //   const newTodos = [...todos]
  //   const todoIndex = newTodos.findIndex(
  //       t => t.text === text
  //   )
  //   newTodos[todoIndex].completed = true
  //   setTodos(newTodos)
  // }

  const completeTodo = (text) => {
    const todosCompleted = todos.map( t => {
        if (t.text === text) {
          t.completed = !t.completed
        }
        return t
    })
    saveTodos(todosCompleted)
    //saveTodos(todosCompleted)
  }
  return (
      <AppUI 
      completedTodos={completedTodos}
      totalTodos={totalTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedValues={searchedValues}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
      loading = {loading}
      error = {error}
      />
    );
}

export default App;
