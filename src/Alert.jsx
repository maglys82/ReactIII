import React from 'react';



function Alert({ mensaje }) {
  if (!mensaje) {
    return null; 
  }

  return (
    <div className={`alert ${mensaje.includes('error') ? 'alert-danger' : 'alert-success'}`} role="alert">
      {mensaje}
    </div>
  );
}

export default Alert;