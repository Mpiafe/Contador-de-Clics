import "./App.css"
import Boton from "./componentes/Boton/boton";
import Contador from "./componentes/Contador/Contador";
import { useState } from "react";

const App= ()=> {

  const [numClics, setNumClics] = useState(0);
  
  const manejarClic = ()=>{
    setNumClics (numClics + 1);
  };

  const reiniciarContador = ()=>{
   setNumClics (0);
  }

  return (
    <div className="App">

      <div className='contenedor-title'>
        <h1>Contador de Clics</h1>
      </div>
      <div className="contenedor-principal">

        <Contador numClics={numClics}/>
        <Boton texto="Clics"
        esBotondeClic={ true }
        manejarClic={ manejarClic }/>

        <Boton texto="Reiniciar"
        esBotondeClic= { false }
        manejarClic={ reiniciarContador }/>


     </div>
    </div>

    
  )
}

export default App
