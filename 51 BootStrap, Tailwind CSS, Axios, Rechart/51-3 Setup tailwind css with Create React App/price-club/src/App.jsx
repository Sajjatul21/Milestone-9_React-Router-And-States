import './App.css';
import AssiignmentMarks from './components/AssiignmentMarks/AssiignmentMarks';
import NavBar from './components/NavBar/NavBar';
import PhoneBar from './components/PhoneBar/PhoneBar';
import Pricing from './components/Pricing/Pricing';

function App() {


  return (
    <div>
      <NavBar></NavBar>
      <h1 className='text-4xl font-bold underline mt-2'>This is a big big headder</h1>
      <Pricing></Pricing>
      <AssiignmentMarks></AssiignmentMarks>
      <PhoneBar></PhoneBar>
    </div>
  );
}

export default App;
