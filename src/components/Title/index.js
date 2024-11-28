import styles from './Title.module.css';

const Title = ({children, fontSize}) => {
    return(
        <h1 className={styles.titulo} style={{ fontSize }}>{children}</h1>
    )
}

export default Title;