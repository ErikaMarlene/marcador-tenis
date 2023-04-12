// Autora: Erika Garcia
// Funcionalidad: Agarra el texto de props 

import "../styles/Title.css";

const Title = (props) => {
  return <div className="titulo-tenis">
    {props.texto}
  </div>;
};

export default Title;
