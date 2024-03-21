//import { useContext } from 'react';
import './TodoSearch.css'
//import { TodoContext } from '../../TodoContex';

const TodoSearchComponent = ({searchValue, setSearchValue}) => {
  //const {searchValue, setSearchValue}  = useContext(TodoContext)
  return (
        <input className='TodoSearch' 
               type='text' 
               placeholder='Cortar Cebolla'
               value={searchValue}
               onChange={ (event) => setSearchValue(event.target.value)} />

  );
}

export default TodoSearchComponent;
