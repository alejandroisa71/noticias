import React,{Fragment, useState , useEffect} from 'react';
import Formulario from './components/Formulario';
import Header from './components/Header';
import ListadoNoticias from './components/ListadoNoticias';
import useSelect from './hooks/useSelect';

function App() {

  //Definir la categoria y noticias
  const [categoria, guardarCategoria] = useState('');
  const [noticias, guardarNoticias] = useState([]);

  useEffect(()=>{
      const consultarAPI = async () =>{
        const url =`https://newsapi.org/v2/top-headlines?country=ar&category=${categoria}&apiKey=6cde71b60d424f7c8e67fa634c5b66d6`;

        const respuesta = await fetch(url);
        const noticias = await respuesta.json();

        guardarNoticias(noticias.articles);

      }
      consultarAPI();
  },[categoria]);

  return (
    <Fragment>
        <Header
          titulo='Buscador de Noticias'
        />

        <div className="container white">
            <Formulario
              guardarCategoria={guardarCategoria}
            />
            <ListadoNoticias
              noticias={noticias}
            />
        </div>
    </Fragment>
  );
}

export default App;
