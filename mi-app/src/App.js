import React,{useState} from "react";
import logo from './logo.svg';
import './App.css';

function App() {
  const user={
   nombre:"Pablo",
   edad:"31",
   color:"negro"
  };

  const saludarFn= (name)=>{
    console.log("Hola"+ nombre+",tiene"+edad+"años .");
    console.log(`Hola ${nombre} , tiene ${edad} años .`);
  };

  const [stateCar,setStateCar] = useState(false);
  
  const encenderApagar= () => {
    //setStateCar(!stateCar);
    setStateCar(prevValue =>!prevValue);
  }


  

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      
      <h3>El coche está {stateCar ? "Encendido" : "Apagado"}</h3>
     <button onClick={encenderApagar}>Encender/Apagar</button>
      </header>
    </div>
  );
}

export default App;
