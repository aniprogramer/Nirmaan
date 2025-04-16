import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import CreateProject from './pages/CreateProject';
import Login from './pages/Login';
import Signup from './pages/Signup';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/create',
    element: <CreateProject />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <Signup />,
  },
]);

export default router;