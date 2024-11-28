import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import RegisterProperty from './pages/RegisterProperty';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/cadastrar-imovel' element={<RegisterProperty/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
