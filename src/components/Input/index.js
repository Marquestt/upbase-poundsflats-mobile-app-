import styles from './Input.module.css';

const Input = ({type = "text", placeholder = "", width}) => {
    return (
        <input className={styles.input} type={type} placeholder={placeholder} style={{ width }}/>
    )
}

export default Input;