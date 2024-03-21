import React from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";



function useTodos () {
  const { items: todos, saveItem: saveTodos,loading, error } = useLocalStorage('TODOS_V1', [])
  const [searchValue, setSearchValue] = React.useState('')
  const [openModal, setOpenModal] = React.useState(false)

  const completedTodos = todos.filter( t => !!t.completed).length
  const totalTodos = todos.length
  const searchedValues = todos.filter( t => t.text.toLowerCase().includes(searchValue?.toLowerCase())) 
  
  const deleteTodo = (text) => {
    const todosFilter = todos.filter( t => t.text !== text)
    saveTodos(todosFilter)
  }


  const completeTodo = (text) => {
    const todosCompleted = todos.map( t => {
        if (t.text === text) {
          t.completed = !t.completed
        }
        return t
    })
    saveTodos(todosCompleted)
  }

  const addTodo = (newTodo)  => {
    const newTodos = [...todos]
    newTodos.push({text:newTodo, completed: false})
    saveTodos(newTodos)
  }

    return {
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
            }
 
}



export { useTodos }
