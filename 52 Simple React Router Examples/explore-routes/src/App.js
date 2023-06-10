
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import About from './components/About/About';

function App() {
  const router = createBrowserRouter([
    { path: '/', element: <div>This is Default page</div> },
    { path: '/home', element: <Home></Home> },
    { path: '/about', element: <About></About> }
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}


export default App;
