import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from "./layouts/Main";
import About from './component/About/About';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>
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
