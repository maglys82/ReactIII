import React, { useState } from 'react';

function Formulario({ agregarColaborador }) {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [edad, setEdad] = useState('');
  const [cargo, setCargo] = useState('');
  const [telefono, setTelefono] = useState('');

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

  const TelefonoChange = (e) => {
    setTelefono(e.target.value);
  };
  const Submit = (e) => {
    e.preventDefault();

    const resultado = agregarColaborador({ nombre, correo, edad, cargo, telefono });
    if (resultado) {
      setNombre('');
      setCorreo('');
      setEdad('');
      setCargo('');
      setTelefono('');
    };
  }
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
              type="email"
              id="correo"
              className="form-control"
              value={correo}
              onChange={CorreoChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="edad">Edad:</label>
            <input
              type="number"
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

          <div className="form-group">
            <label htmlFor="telefono">Telefono:</label>
            <input
              type="number"
              id="telefono"
              className="form-control"
              value={telefono}
              onChange={TelefonoChange}
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
