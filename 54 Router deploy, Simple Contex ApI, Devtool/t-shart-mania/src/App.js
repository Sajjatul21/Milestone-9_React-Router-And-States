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

      {/* 54-2 Display TShirts and style t-shirt components */}


      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
