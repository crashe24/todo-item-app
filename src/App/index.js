
import { useState } from 'react';
import './App.css';


function App () {
  const [state, setstate] = useState('estado compartido');
  return (
    <>
      <TodoHeader >
        <TodoCounter />
        <TodoSearch />
       </TodoHeader> 
      <TodoList >
        <TodoItem state ={state}/>
      </TodoList>
    </>
  )
}

function TodoHeader ({children}) {
  return (
    <>
      {children}
    </>
  )
}

function TodoList ({children}) {
  return (
    <>
      <section className='TodoList-container'>
        {children}

      </section>
    </>
  )
}

function TodoCounter() {
  return (<p>TodoCounter</p>)
}
function TodoSearch() {
  return (<p>TodoSearch</p>)
}
function TodoItem({state}) {
  return (<p>TodoItem : {state}</p>)
}

// function App() {

  
//   return (
//      <TodoProvider>
//        <AppUI />
//      </TodoProvider>
//     );
// }

export default App;
