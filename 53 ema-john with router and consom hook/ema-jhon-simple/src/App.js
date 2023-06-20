import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from "./layouts/Main";
import About from './component/About/About';
import Shop from './component/Shop/Shop';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Shop></Shop>
        }
      ]
    },
    {
      path: 'about',
      element: <About></About>
    }
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
