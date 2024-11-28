import styles from './Header.module.css';
import arrow from '../../assets/arrow.svg';
import cross from '../../assets/cross.svg'
import Button from '../Button';
import Title from '../Title';

const Header = ({title}) => {
    return (
        <header className={styles.header}>
            <div className={styles.containerIcons}>
                <Button>
                    <img src={arrow} alt='botão voltar'/>
                </Button>
                <Button link="/cadastrar-imovel">
                    <img src={cross} alt='botão cadastrar imóvel'/>
                    Cadastrar imóvel
                </Button>
            </div>
            <Title>
                {title}
            </Title>
        </header>
    )
}

export default Header;