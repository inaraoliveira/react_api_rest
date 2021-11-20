import React, {useState, useEffect} from 'react';
import './App.css';
import Api from './services/Api'

function App() {
  const [usuario, setUsuario] = useState("");

  useEffect(() => {
    Api.get('inaraoliveira')
    .then((Response) => setUsuario(Response.data)
    ).catch(
      (error) => {
        console.log('erro' + error)
      }
    );
  });

  return (
    <div className="App">
      <section>
      <div id='containerImage'>
        <img src={usuario?.avatar_url} alt='Imagem do usuário'/>
      </div>
      <div id='containerDados'>
        <p>Nome: {usuario?.name}</p>
        <p>Repositórios públicos: {usuario?.public_repos}</p>
        <p>Seguidores: {usuario?.followers}</p>
      </div>
      </section>
    </div>
  );
}

export default App;
