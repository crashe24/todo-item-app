import { CompleteIconSvg } from '../../TodoIcons/CompleteIconSvg'
import { DeleteIconSvg } from '../../TodoIcons/DeleteIconSvg'

import './TodoItem.css'

const TodoItemComponent = (props) => {

  return (
    <li className='TodoItem'>
      <CompleteIconSvg 
      completed = {props.completed}
      onComplete={props.onComplete}
      />
      <span className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>{props.text}</span>
      <DeleteIconSvg onDelete={ props.onDelete}/>
     
    </li>
  );
}

export default TodoItemComponent;
