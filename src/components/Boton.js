// Autora: Erika Garcia
// Funcionalidad: Botón que contiene un texto y conlleva una funcionalidad si se aprieta

import "../styles/Boton.css";
const Boton = (props) => {
    return (
        // en onClick se le pasa una función para que pase algo cuando se aprieta
        // se guarda la referencia (props.onClick)
        <button className="boton-tenis boton" onClick={props.onClick}>
            {/* va a ser una cadena */}
            {props.texto}
        </button>
    );
};
export default Boton;