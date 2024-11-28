import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import RegisterProperty from './pages/RegisterProperty';

function App() {
  
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/cadastrar-imovel',
      element: <RegisterProperty />,
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
