import './App.css';
import CartGroup from './components/CartGroup/CartGroup';

function App() {
  return (
    <div className="App">
      <div className="spinner-border text-danger" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <CartGroup></CartGroup>
    </div>
  );
}

export default App;
