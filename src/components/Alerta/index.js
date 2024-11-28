
import styles from './Alerta.module.css';
import icon from '../../assets/iconAlert.svg';
import Main from '../Main';

const Alerta = () => {
    return (
        <Main>
            <div className={styles.container}>
                <img src={icon} alt="Ícone carinha de espanto" />
                <h2 className={styles.mensagem}>Você não tem nenhum imóvel cadastrado. Que tal cadastrar agora?</h2>
                <a className={styles.button} href='/cadastrar-imovel'>Cadastrar meu primeiro imóvel</a>
            </div>
        </Main>
    )
}

export default Alerta;