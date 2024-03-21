import './TodoList.css'

const TodoListComponent = ( props ) => {

  return (
    <section className='TodoList'>
      {props.error && props.onError()}
      {props.loading && props.onLoading()}
      {(!props.loading && !props.totalTodos) && props.onEmpty()}
      { props.searchedTodos.map((todo) => props.render(todo))}
      {
        (!!props.totalTodos && !props.searchedTodos?.length) && props.onEmptySearchResults(props.searchText)
      }

    </section>
  )
}

export default TodoListComponent