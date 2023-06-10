
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import About from './components/About/About';
import Products from './components/Products/Products';

function App() {
  const router = createBrowserRouter([
    { path: '/', element: <div>This is Default page</div> },
    { path: '/home', element: <Home></Home> },
    { path: '/about', element: <About></About> },
    { path: 'products', element: <Products></Products> }
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
      {/* 52-3 (interesting) Nested route and outlet for shared content */}
    </div>
  );
}


export default App;
