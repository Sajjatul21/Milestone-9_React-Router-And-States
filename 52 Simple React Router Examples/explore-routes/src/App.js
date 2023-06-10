
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';

function App() {
  const router = createBrowserRouter([
    { path: '/', element: <div>This is Default page</div> },
    { path: '/home', element: <div>Home page</div> },
    { path: '/about', element: <div>This is About page</div> }
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
      {/* 52-2 Create Simple Route with Links and Components */}
    </div>
  );
}


export default App;
