import { useLocation } from 'react-router-dom';
import styles from './Header.module.css';
import arrow from '../../assets/arrow.svg';
import cross from '../../assets/cross.svg'
import Button from '../Button';
import Title from '../Title';

const Header = ({title, fontSize}) => {

    const location = useLocation();
    const showCadastrarButton = location.pathname !== "/cadastrar-imovel";

    return (
        <header className={styles.header}>
            <div className={styles.containerIcons}>
                <Button>
                    <img src={arrow} alt='botão voltar'/>
                </Button>
                {showCadastrarButton && (
                    <Button link="/cadastrar-imovel">
                        <img src={cross} alt="botão cadastrar imóvel" />
                        Cadastrar imóvel
                    </Button>
                )}
            </div>
            <Title fontSize={fontSize}>
                {title}
            </Title>
        </header>
    )
}

export default Header;