import home2 from '../../assets/iconHome2.svg';
import Container from '../../components/Container';
import Form from '../../components/Form';
import Header from '../../components/Header';
import Modal from '../../components/Modal';
import styles from './RegisterProperty.module.css';

const RegisterProperty = () => {
    return (
        <>
            <Container>
                <Header title="Para começarmos, precisamos de alguns dados" fontSize="20px"/>
                <Form/>
            </Container>
            <Modal image={home2} backgroundColor="#fff" text="Deseja abandonar o cadastro do imóvel? Esta operação não será salva"/>
        </>
        
    )
}

export default RegisterProperty;