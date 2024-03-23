import './TodoSearch.css'

const TodoSearchComponent = ({searchValue, setSearchValue, loading}) => {
  return (
        <input className='TodoSearch' 
               type='text' 
               placeholder='Cortar Cebolla'
               value={searchValue}
               onChange={ (event) => setSearchValue(event.target.value)} 
               disabled ={loading}/>

  );
}

export default TodoSearchComponent;
