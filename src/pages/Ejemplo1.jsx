import React, { useState } from 'react';
import { useNavigate } from "react-router-dom"

function Ejemplo1() {
  const navigate=useNavigate()
  const [count, setCount] = useState(0);
  const enviar= (e)=>{
        e.preventDefault()
        navigate('/ejemplo2',{replace:true})
    }

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <main>
        <div style={{ marginTop: '20px', padding: '10px', border: '1px solid #ccc' }}>
          <p>Has hecho clic <strong>{count}</strong> veces.</p>
          <button 
            onClick={() => setCount(count + 1)}
            style={{ padding: '8px 16px', cursor: 'pointer' }}
          >
            Incrementar contador
          </button>
          <form onSubmit={enviar}>
            <button type="submit">SIGUIENTE</button>
          </form>
        </div>
      </main>
    </div>
  );
}

export default Ejemplo1;