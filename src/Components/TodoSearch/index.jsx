import './TodoSearch.css'

const TodoSearchComponent = (props) => {
  return (
        <input className='TodoSearch' 
               type='text' 
               placeholder='Cortar Cebolla'
               value={props.searchValue}
               onChange={ (event) => props.setSearchValue(event.target.value)} />

  );
}

export default TodoSearchComponent;
