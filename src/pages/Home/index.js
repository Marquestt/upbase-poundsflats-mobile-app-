import styles from './Home.module.css';
import Header from "../../components/Header";
import Container from "../../components/Container";
import Filter from "../../components/Filter";
import Alerta from "../../components/Alerta";
import Menu from "../../components/Menu";
import Modal from "../../components/Modal";

const Home = () => {
    return(
        <>
            <Container>
                <Header title="Bem-vindo, Raphael!"/>
                <Filter/>
                <Alerta/>
            </Container>
            <Menu/>
            <Modal/>
        </>
    )
}

export default Home;