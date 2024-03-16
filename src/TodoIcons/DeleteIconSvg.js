import { TodoIconSvg } from "./TodoIconSvg"

const DeleteIconSvg = (props) => {
    return (
        <TodoIconSvg 
            type= 'delete'
            color= 'gray'
            onClick = {props.onDelete}
        />
    )
}

export { DeleteIconSvg }
