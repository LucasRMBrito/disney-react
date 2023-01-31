import React, { useState } from 'react';
import { useEffect } from 'react';
import './App.css';


function App() {
 
  const [teste, setTest] = useState(0)
  console.log(teste)

  const APIdisney = async (indice) => {
    const disney = await fetch(`https://api.disneyapi.dev/character`);
    
    const dados = await disney.json();
    console.log(dados.data[indice]);
    
    const nome = document.querySelector('.nome')
    nome.innerHTML = dados.data[indice].name
    const img = document.querySelector('.imagem')
    img.src = dados.data[indice].imageUrl

  }

  function proximo() {
    setTest(teste + 1);

  }
  function anterior() {
    if (teste > 0) {
      setTest(teste - 1);
    }
  }
  
  useEffect(()=>{
    APIdisney(teste);
  },[teste]);

    return (
    <div className="App">
      <img className='imagem'/>
      <h1 className='nome'/>
      <button onClick={anterior} className="botaoAntes">Anterior</button>
      <button onClick={proximo} className="botaoDepois">Próximo</button>
    </div>
  );
}

export default App;
