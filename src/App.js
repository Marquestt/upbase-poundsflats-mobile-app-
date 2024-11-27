import Header from "./components/Header";
import Container from "./components/Container";
import Filter from "./components/Filter";
import Alerta from "./components/Alerta";
import Menu from "./components/Menu";

function App() {
  return (
    <>
      <Container>
        <Header/>
        <Filter/>
        <Alerta/>
      </Container>
      <Menu/>
    </>
  );
}

export default App;
