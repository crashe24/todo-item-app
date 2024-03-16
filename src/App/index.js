
import './App.css';
import { useState } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { AppUI } from './AppUI';
import { TodoProvider } from '../TodoContex';


function App() {

  
  return (
     <TodoProvider>
       <AppUI />
     </TodoProvider>
    );
}

export default App;
