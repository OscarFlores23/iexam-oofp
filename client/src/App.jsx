import { useState } from 'react';
import './App.css';

function App() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [imc, setImc] = useState(null);

  const handleCalcular = async () => {
    try {
      const response = await fetch(`http://localhost:8080/api/imc?peso=${peso}&altura=${altura}`, {
        method: 'POST'
      });
      const data = await response.json();
      if (data.success) {
        setImc(data.data);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="App">
      <nav className="navbar">
        <h1>Oscar Oswaldo Flores Perez - 10-D</h1>
      </nav>
      
      <div className="container">
        <h2>Calcular IMC</h2>
        
        <div className="form">
          <input
            type="number"
            step="0.01"
            placeholder="Peso (kg)"
            value={peso}
            onChange={(e) => setPeso(e.target.value)}
          />
          
          <input
            type="number"
            step="0.01"
            placeholder="Altura (m)"
            value={altura}
            onChange={(e) => setAltura(e.target.value)}
          />
          
          <button onClick={handleCalcular}>Calcular IMC</button>
        </div>

        {imc !== null && (
          <div className="resultado">
            <h3>Tu IMC es: {imc.toFixed(2)}</h3>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;