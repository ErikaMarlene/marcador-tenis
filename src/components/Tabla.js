// Autora: Erika Garcia
// Funcionalidad: Distribución de la tabla con los nombres de los tenistas
// las banderas de su nacionalidad, puntos del set y los puntos del juego
import "../styles/Tabla.css";

function Tabla(props) {
    return (
      <div className="grid-container">
        <div className="grid-item">{props.texto}</div>
        <div className="grid-item"><img src={props.imageSrc} alt={props.altText} className="grid-image"/></div>
        <div className="grid-item">{props.juegosA}</div>
        <div className = "grid-special">{props.valor}</div>
        <div className="grid-item">{props.texto2}</div>
        <div className="grid-item"><img src={props.imageSrc2} alt={props.altText2} className="grid-image"/></div>
        <div className="grid-item">{props.juegosB}</div>
        <div className = "grid-special">{props.valor2}</div>
      </div>
    );
  }
  
  export default Tabla;