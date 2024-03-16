
import './App.css';
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
