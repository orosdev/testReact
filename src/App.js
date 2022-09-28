import './App.css';
import { useState } from 'react'

function App() {


  const [textA, setTextA] = useState('');
  const [textB, setTextB] = useState('');
  const [resultado, setResultado] = useState(0);

  const handleTextChangeA = (event) => {
    setTextA(event.target.value);
  };
  const handleTextChangeB = (event) => {
    setTextB(event.target.value);
  }
  const sumar = () => {
    setResultado(Number(textA) + Number(textB));

  }



  return (
    <div className="App">
      <input onChange={handleTextChangeA} type="text" />
      <input onChange={handleTextChangeB} type="text" />

      <button onClick={sumar}>
        <p>Calcular</p></button>
      <p>Resultado es:{resultado}</p>
    </div>

  );
}

export default App;
