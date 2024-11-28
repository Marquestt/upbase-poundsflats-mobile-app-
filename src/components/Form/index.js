import Input from '../Input';
import Select from '../Select';
import TextArea from '../TextArea';
import styles from './Form.module.css';

const Form = () => {
    return (
        <form className={styles.form}>
            <div className={styles.container}>
                <Input type="text" placeholder="Nome do imóvel" required="required"/>
                <p className={styles.text}>O nome do imóvel será exibido na sua tela inicial e na reserva para o hóspede</p>
            </div>
            <TextArea placeholder="Descrição"/>
            <Input type="text" placeholder="CEP" maxLength="10" pattern="\d{5}-\d{3}" required="required"/>
            <Input type="text" placeholder="Endereço" required="required"/>
            <div className={styles.containerMin}>
                <Input type="number" placeholder="Número" required="required" width="164px"/>
                <Input type="text" placeholder="Complemento" width="164px"/>
            </div>
            <div className={styles.containerMin}>
                <Input type="text" placeholder="Cidade" required="required" width="216px"/>
                <Select/>
            </div>
            <Input type="submit" value="Continuar"width="345px" height="48px" color="#fff" backgroundColor="#7B2CBF" borderRadius="8px"/>
        </form>
    )
}

export default Form;
