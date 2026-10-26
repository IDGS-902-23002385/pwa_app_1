import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

function Ejemplo3() {
  const navigate = useNavigate();
  const [completado, setCompletado] = useState(false);
  
  const enviar = (e) => {
    e.preventDefault();
    navigate('/ejemplo1', { replace: true });
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <main>
        <div style={{ marginTop: '20px', padding: '10px', border: '1px solid #ccc' }}>
          <h2>Paso 3 (Final)</h2>
          <p>Estado del ciclo: <strong>{completado ? 'Completado' : 'Pendiente'}</strong></p>
          
          <label style={{ display: 'block', marginBottom: '15px', cursor: 'pointer' }}>
            <input 
              type="checkbox"checked={completado}onChange={(e) => setCompletado(e.target.checked)}style={{ marginRight: '8px' }}/>
            Confirmar para reiniciar
          </label>

          <form onSubmit={enviar}>
            <button type="submit" style={{ padding: '8px 16px', cursor: 'pointer' }}>
              VOLVER AL INICIO
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}

export default Ejemplo3;