import './App.css';
import InputEnc from './InputEnc';


function App() {
  return (
    <div className="App">
        <div className="d-flex justify-content-center">
          <InputEnc service="mono"/>
          <InputEnc service="vigenere"/>
          <InputEnc service="dictionary"/>
        </div>
    </div>
  );
}

export default App;





