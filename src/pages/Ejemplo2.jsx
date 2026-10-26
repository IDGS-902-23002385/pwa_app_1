import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

function Ejemplo2() {
  const navigate = useNavigate();
  const [texto, setTexto] = useState('');
  
  const enviar = (e) => {
    e.preventDefault();
    navigate('/ejemplo3', { replace: true });
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <main>
        <div style={{ marginTop: '20px', padding: '10px', border: '1px solid #ccc' }}>
          <h2>Paso 2</h2>
          <p>Texto ingresado: <strong>{texto}</strong></p>
          
          <input 
            type="text"value={texto}onChange={(e) => setTexto(e.target.value)}placeholder="Escribe algo..."style={{ padding: '8px', marginBottom: '15px', width: '100%' }}/>

          <form onSubmit={enviar}>
            <button type="submit" style={{ padding: '8px 16px', cursor: 'pointer' }}>
              SIGUIENTE
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}

export default Ejemplo2;