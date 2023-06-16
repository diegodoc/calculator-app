import { React} from 'react'
import '../styles/button.css'

const Button = (props) => {
    
    return(
        <button onClick={props.handleClick}id={props.id} className={props.className}>{props.value}</button>
    )
}

export default Button;