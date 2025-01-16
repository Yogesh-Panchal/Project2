// import { MdMessage } from 'react-icons/md';
import styles from './Button.module.css';
// const Button = (props) => {

//     return (
//         <button className={props.isOutline ? styles.outline_btn :styles.primary_btn}>            
//             {props.icon}
//             {props.text}            
//         </button>
//     )
// }

// second way 
// const Button = (isOutline,icon,text) => {// destucting props without using const

const Button = (props) => {
    const {isOutline,icon,text,...rest} = props; // destucting props
    return (
        <button {...rest} className={isOutline ? styles.outline_btn :styles.primary_btn}>            
            {icon}
            {text}            
        </button>
    )
}


export default Button 