import Header from "./components/Header";
import Container from "./components/Container";
import Filter from "./components/Filter";
import Alerta from "./components/Alerta";
import Menu from "./components/Menu";
import Modal from "./components/Modal";

function App() {

  return (
    <>
      <Container>
        <Header/>
        <Filter/>
        <Alerta/>
      </Container>
      <Menu/>
      <Modal/>
    </>
  );
}

export default App;
