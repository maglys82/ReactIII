import React, { useState } from 'react';

function Formulario({ agregarColaborador }) {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [edad, setEdad] = useState('');
  const [cargo, setCargo] = useState('');

  const NombreChange = (e) => {
    setNombre(e.target.value);
  };

  const CorreoChange = (e) => {
    setCorreo(e.target.value);
  };

  const EdadChange = (e) => {
    setEdad(e.target.value);
  };

  const CargoChange = (e) => {
    setCargo(e.target.value);
  };
  
  const Submit = (e) => {
    e.preventDefault();

    if (nombre.trim() === '' || correo.trim() === '' || edad.trim() === '' || cargo.trim() === '') {
      alert('Por favor, completa todos los campos.');
      return;
    }

    agregarColaborador({ nombre, correo, edad, cargo });

    
    setNombre('');
    setCorreo('');
    setEdad('');
    setCargo('');
  };

  return (
    <div>
      <h2>Agregar Colaborador</h2>
      <form onSubmit={Submit}>
        <div className="form-group">
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            id="nombre"
            className="form-control"
            value={nombre}
            onChange={NombreChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="correo">Correo:</label>
          <input
            type="text"
            id="correo"
            className="form-control"
            value={correo}
            onChange={CorreoChange}
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="edad">Edad:</label>
          <input
            type="text"
            id="edad"
            className="form-control"
            value={edad}
            onChange={EdadChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="cargo">Cargo:</label>
          <input
            type="text"
            id="cargo"
            className="form-control"
            value={cargo}
            onChange={CargoChange}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Agregar Colaborador
        </button>
      </form>
    </div>
  );
}

export default Formulario;
