import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Buscador() {

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Buscar Colaborador" />
        <Button className='btn'  variant="primary" type="submit">
          Buscar
        </Button>
      </Form.Group>
    </Form>
  );
}

export default Buscador