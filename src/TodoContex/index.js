import React from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const TodoContext = React.createContext()

function TodoProvider ({children}) {
const { items: todos, saveItem: saveTodos,loading, error } = useLocalStorage('TODOS_V1', [])
  const [searchValue, setSearchValue] = React.useState('')

  const completedTodos = todos.filter( t => !!t.completed).length
  const totalTodos = todos.length

  const searchedValues = todos.filter( t => t.text.toLowerCase().includes(searchValue?.toLowerCase())) 
  
  const deleteTodo = (text) => {
    const todosFilter = todos.filter( t => t.text !== text)
    console.log('saveTodos', saveTodos)
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


    return (
        <TodoContext.Provider
            value={{
                    completedTodos,
                    totalTodos,
                    searchValue,
                    setSearchValue,
                    searchedValues,
                    completeTodo,
                    deleteTodo,
                    loading,
                    error
            }}
        >
            {children}
        </TodoContext.Provider>
    )

}



export { TodoContext, TodoProvider }
