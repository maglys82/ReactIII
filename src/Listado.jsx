import React from 'react';
import Colaboradores from './Colaboradores';

function Listado() {
  return (
    <div className="container">
      <h2>Listado de Colaboradores</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Edad</th>
            <th>Cargo</th>
            <th>Telefono</th>
          </tr>
        </thead>
        <tbody>
          {Colaboradores.map((Colaboradores) => (
            <tr key={Colaboradores.id}>
              <td>{Colaboradores.nombre}</td>
              <td>{Colaboradores.correo}</td>
              <td>{Colaboradores.edad}</td>
              <td>{Colaboradores.cargo}</td>
              <td>{Colaboradores.telefono}</td>
            </tr>
          ))}
        </tbody>
      </table>
     
    </div>
  );
}

export default Listado;
