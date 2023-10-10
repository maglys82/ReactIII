import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Alert from './Alert'
import Listado from './Listado'
import Buscador from './Buscador'
import Formulario from './Formulario'
import Colaboradores from './Colaboradores';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css'



function App() {
  const [colaboradores, setColaboradores] = useState([]);
  const [mensajeAlerta, setMensajeAlerta] = useState('');

  const agregarColaborador = (nuevoColaborador) => {
    if (nuevoColaborador.nombre.trim() === '' || nuevoColaborador.correo.trim() === '' || nuevoColaborador.edad.trim() === '' || nuevoColaborador.cargo.trim() === '') {
      
      setMensajeAlerta('Por favor, completa todos los campos.');
    } else {
      
      setColaboradores([...colaboradores, nuevoColaborador]);
      setMensajeAlerta('Colaborador agregado exitosamente.');
    }
  };

  return (
    <div className="App">
      <h1>Lista de Colaboradores</h1>
      <Alert mensaje={mensajeAlerta} />
      <Formulario agregarColaborador={agregarColaborador} />
      <Listado colaboradores={colaboradores} />
    </div>
  );
}

export default App;





