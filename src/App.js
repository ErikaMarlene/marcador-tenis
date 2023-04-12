// Autora: Erika Garcia
// Funcionalidad: Muestra en pantalla un grid con el 
// marcador del partido entre 2 jugadores
// además de un primer set
// los botones hacen que aumenten los puntos o que se reinicie el juego

import './App.css';
import Title from './components/Title';
import Points from './components/Points';
import Boton from './components/Boton';
import Tabla from './components/Tabla';
import banderaSuiza from './imgs/suiza.png';
import banderaEspaña from './imgs/españa.png';
// lo importa así porque dentro del archivo hay muchos
// componentes exportados y debemos especificar cual/es queremos
import { useState } from 'react';

function App() {
  // Declarar el Estado para los marcadores
  // puntosA -> estado
  // setPuntos -> función para modificar el estado (lo crea solo)
  const [puntosA, setPuntosA] = useState(0);
  const [puntosB, setPuntosB] = useState(0);
  const [juegosA, setJuegosA] = useState(0);
  const [juegosB, setJuegosB] = useState(0);

  let varA = 0;
  let varB = 0;

  // Funciones que atienden el evento de onClick
  const onClickHandlerA = (event) => {
    // estas modificaciones se hacen de manera asincrona
    varA = puntosA + 15;

    if (varA === 45){
      setPuntosA(40);
    }else if(varA === 55 && puntosB === 40){
      setPuntosA("AD");
    }else if(varA === 55 && puntosB === "AD"){
      console.log("Entró");
      setPuntosA(40);
      setPuntosB(40);
    }else if(varA === 55 && puntosB !== 40){
      setPuntosA(0);
      setPuntosB(0);
      if(juegosA < 6){
        setJuegosA(juegosA + 1);
      }else if (juegosA > 6){
          setJuegosA(6);
      }
    }else if(varA === "AD15" && puntosB === 40){
      setPuntosA(0);
      setPuntosB(0);
      if(juegosA < 6){
        setJuegosA(juegosA + 1);
      }else if (juegosA > 6){
          setJuegosA(6);
      }
    }
    else{
      setPuntosA(varA);
    }
  };

  
  const onClickHandlerB = (event) => {
    varB = puntosB + 15;
    if (varB === 45){
      setPuntosB(40);
    }else if (varB === 55 && puntosA === 40){
      setPuntosB("AD");
    }else if(varB === 55 && puntosA === "AD"){
      setPuntosA(40);
      setPuntosB(40);
    }else if (varB === 55 && puntosA !== 40){
      setPuntosA(0);
      setPuntosB(0);
      if(juegosB < 6){
        setJuegosB(juegosB + 1);
      }else if (juegosB > 6){
        setJuegosB(6);
      }
    }else if(varB === "AD15" && puntosA === 40){
      setPuntosA(0);
      setPuntosB(0);
      if(juegosB < 6){
        setJuegosB(juegosB + 1);
      }else if (juegosB > 6){
        setJuegosB(6);
      }
    }
    else{
      setPuntosB(varB);
    }
  };

  const onClickHandlerReset = (event) => {
    // estas modificaciones se hacen de manera asincrona
    setPuntosA(0);
    setJuegosA(0);
    setPuntosB(0);
    setJuegosB(0);
  };

  const altText = "Bandera de Suiza";
  const altText2 = "Bandera de España";
  return (
    <div className="App">
      <Tabla texto= "Roger Federer" valor = {puntosA} juegosA = {juegosA} texto2 = "Rafa Nadal" valor2 = {puntosB} juegosB = {juegosB} imageSrc={banderaSuiza} altText={altText} imageSrc2={banderaEspaña} altText2={altText2}></Tabla>
      
      {/* solo decir que funciones se van a ejecutar, react las va a ejecutar */}
      <Boton texto = "Punto de Federer" onClick = {onClickHandlerA}/>
      <Boton texto = "Punto de Nadal" onClick = {onClickHandlerB}/>
      <Boton texto = "Reiniciar el juego" onClick = {onClickHandlerReset}/>
      
      {/* <Title texto= "Roger Federer"/>
      <Points valor = {puntosA}/>
      <Title texto= "Rafa Nadal"/>
      <Points valor = {puntosB}/> */}
    </div>
  );
}

export default App;
