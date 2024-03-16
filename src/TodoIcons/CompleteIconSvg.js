import { TodoIconSvg } from "./TodoIconSvg"



const CompleteIconSvg = (props) => {
    return <TodoIconSvg 
            type= 'check'
            color= {props.completed?'green':'gray'}
            onClick = {props.onComplete}
        />
}

export { CompleteIconSvg}
