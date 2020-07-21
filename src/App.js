import React, {Fragment, useState, useEffect} from 'react';
import Formulario from './components/Formulario'
import Artista from './components/Artista'
import Cancion from './components/Cancion'
import axios from 'axios'

function App() {

  const [busquedaLetra, setBusquedaLetra] = useState({})
  const [letra, setLetra] = useState('')
  const [infoArtista, setInfoArtista] = useState({})

  useEffect(()=>{
    if(Object.keys(busquedaLetra).length===0) return;

    const consultarAPILetras = async () => {
      const artista = busquedaLetra.artista
      const cancion = busquedaLetra.cancion
      const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`

      const url2 = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artista}`
      const [letra, informacion] = await Promise.all([
        axios(url),
        axios(url2)
      ])

      setLetra(letra.data.lyrics)
      setInfoArtista(informacion.data.artists[0])
    }
    consultarAPILetras()

  }, [busquedaLetra, infoArtista])

  return (
    <Fragment>
      <Formulario
        setBusquedaLetra={setBusquedaLetra}
      />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <Artista
              infoArtista={infoArtista}
            />
          </div>
          <div className="col-md-6">
            <Cancion
              letra={letra}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
