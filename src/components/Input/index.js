import styles from './Input.module.css';

const Input = ({type = "text", placeholder = "", width, maxLength = "", pattern = "", required}) => {
    return (
        <input className={styles.input} type={type} placeholder={placeholder} style={{ width }} required={required}/>
    )
}

export default Input;