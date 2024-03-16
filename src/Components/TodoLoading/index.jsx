import './TodosLoading.css'

const TodoLoadingComponent = () => {
  return (
    <div className='LoadingTodo-container'>
      <span className='LoadingTodo-completeIcon'>
        <p className='LoadingTodo-text'></p>
      </span>
      <span className='LoadingTodo-deleteIcon'></span>
    </div>
  );
}

export default TodoLoadingComponent;
