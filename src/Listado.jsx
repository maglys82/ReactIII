import React from 'react';
import Table from 'react-bootstrap/Table';

function Listado(props) {
  return (
    <Table striped bordered hover variant="dark">
      <thead >
        <tr>
        
            <th>Nombre</th>
            <th>Correo</th>
            <th>Edad</th>
            <th>Cargo</th>
            <th>Telefono</th>
          </tr>
        </thead>
        <tbody className='table'>
          {props.colaboradores.map((colaborador) => (
            <tr key={colaborador.id}>
              <td>{colaborador.nombre}</td>
              <td>{colaborador.correo}</td>
              <td>{colaborador.edad}</td>
              <td>{colaborador.cargo}</td>
              <td>{colaborador.telefono}</td>
            </tr>
          ))}
        </tbody>
      </Table>
     
  
  );
}

export default Listado;
