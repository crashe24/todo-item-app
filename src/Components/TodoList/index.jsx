import './TodoList.css'

const TodoListComponent = ( props ) => {

  const validateRender = props.children || props.render
  return (
    <section className='TodoList'>
      {props.error && props.onError()}
      {props.loading && props.onLoading()}
      {(!props.loading && !props.totalTodos) && props.onEmpty()}
      {
        (!!props.totalTodos && !props.searchedTodos?.length) && props.onEmptySearchResults(props.searchText)
      }
      {/* { props.searchedTodos.map(todo => props.children(todo))} */}
      {(!props.loading && !props.error) && props.searchedTodos.map(validateRender)}

    </section>
  )
}

export default TodoListComponent