import './App.css';
import { Button, Spinner } from 'react-bootstrap';
import GridCard from './components/GridCard/GridCard';



function App() {
  return (
    <div className="App">
      <button>HTML Button</button>
      <Button variant='danger'>React Button</Button>
      <br />
      <Spinner animation="grow" variant="danger" />
      <GridCard></GridCard>
    </div>
  );
}

export default App;
