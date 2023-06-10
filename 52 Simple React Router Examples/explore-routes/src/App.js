
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import About from './components/About/About';
import Products from './components/Products/Products';
import Main from './layout/Main';
import Friends from './components/Friends/Friends';
import FriendDetails from './components/FriendDetails/FriendDetails';

function App() {
  const router = createBrowserRouter([
    {
      path: '/', element: <Main></Main>, children: [
        { path: '/', element: <Home></Home> },
        { path: '/home', element: <Home></Home> },
        { path: '/about', element: <About></About> },
        {
          path: 'friends',
          loader: async () => {
            return fetch("https://jsonplaceholder.typicode.com/users");
          },
          element: <Friends></Friends>
        },
        { path: 'products', element: <Products></Products> },
        {
          path: '/friend/:friendId', element: <FriendDetails></FriendDetails>
        }
      ]
    },
    { path: '*', element: <div>This route not fount.404</div> }

  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}


export default App;
