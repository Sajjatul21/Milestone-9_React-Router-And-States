import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from './layouts/Main';
import Home from './components/Home/Home';
import Orders from './components/Orders/Orders';

function App() {
  const router = createBrowserRouter([
    // router definition
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader:()=>fetch('tsharts.json'), 
          element: <Home></Home>
        },
        {
          path: '/orders',
          element: <Orders></Orders>
        }
      ]
    }
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
