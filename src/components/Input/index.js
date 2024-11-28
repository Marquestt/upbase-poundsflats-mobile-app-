import styles from './Input.module.css';

const Input = ({type = "text", placeholder = "", width, height, color, backgroundColor, borderRadius, maxLength = "", pattern = "", required = true, value}) => {
    return (
        <input className={styles.input} type={type} placeholder={placeholder} style={{ width, height, color, backgroundColor, borderRadius }} required={required} value={value}/>
    )
}

export default Input;