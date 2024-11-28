import styles from './TextArea.module.css';

const TextArea = ({placeholder = ""}) => {
    return (
        <textarea className={styles.textArea} maxLength={250} placeholder={placeholder}></textarea>
    )
}

export default TextArea;