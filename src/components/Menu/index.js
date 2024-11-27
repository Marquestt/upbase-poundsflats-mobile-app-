import styles from './Menu.module.css';
import button1 from '../../assets/iconB1.svg';
import button2 from '../../assets/iconB2.svg';
import button3 from '../../assets/iconB3.svg';
import button4 from '../../assets/iconB4.svg';

const Menu = () => {
    return (
        <div className={styles.container}>
            <a href='' className={styles.iconMenu}><img className={styles.icon} src={button1} alt='botão imóveis cadastrados'/></a>
            <a href='' className={styles.iconMenu}><img className={styles.icon} src={button2} alt='botão calendário/agenda'/></a>
            <a href='' className={styles.iconMenu}><img className={styles.icon} src={button3} alt='botão menu'/></a>
            <a href='' className={styles.iconMenu}><img className={styles.icon} src={button4} alt='botão perfil'/></a>
        </div>
    )
}

export default Menu;