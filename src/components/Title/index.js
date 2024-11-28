import styles from './Title.module.css';

const Title = ({children}) => {
    return(
        <h1 className={styles.titulo}>{children}</h1>
    )
}

export default Title;