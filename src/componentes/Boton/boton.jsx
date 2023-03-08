import "./boton.css";

const Boton = ({texto, esBotonDeClic, manejarClic}) => {
  return (
    <button
    className={ esBotonDeClic ? "boton-Clic" : "reiniciar" }
    onClick={manejarClic}>
        {texto}
    </button>
  )
}

export default Boton;