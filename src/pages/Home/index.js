import styles from './Home.module.css';
import home from '../../assets/iconHome.svg';
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
            <Modal image={home} text="Você, realmente, deseja sair do Poundsflats?"/>
        </>
    )
}

export default Home;