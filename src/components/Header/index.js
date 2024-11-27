import styles from './Header.module.css';
import arrow from '../../assets/arrow.svg';
import cross from '../../assets/cross.svg'
import Button from '../Button';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.containerIcons}>
                <Button>
                    <img src={arrow} alt='botão voltar'/>
                </Button>
                <Button>
                    <img src={cross} alt='botão cadastrar imóvel'/>
                    Cadastrar imóvel
                </Button>
            </div>
            <h1 className={styles.titulo}>Bem-vindo, Raphael!</h1>
        </header>
    )
}

export default Header;