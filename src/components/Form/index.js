import Input from '../Input';
import TextArea from '../TextArea';
import styles from './Form.module.css';

const Form = () => {
    return (
        <form className={styles.form}>
            <div className={styles.container}>
                <Input type="text" placeholder="Nome do imóvel"/>
                <p className={styles.text}>O nome do imóvel será exibido na sua tela inicial e na reserva para o hóspede</p>
            </div>
            <TextArea placeholder="Descrição"/>
        </form>
    )
}

export default Form;
