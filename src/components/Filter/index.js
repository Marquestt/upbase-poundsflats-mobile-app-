import styles from './Filter.module.css';

const Filter = () => {
    return(
        <div className={styles.container}>
            <a className={styles.filterAll} href=''>Todos os flats</a>
            <a className={styles.filter} href=''>Indisponíveis</a>
        </div>
    )
}

export default Filter;