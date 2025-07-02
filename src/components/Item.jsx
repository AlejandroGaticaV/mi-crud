import React from 'react';

// Función que calcula la escala de apreciación
const calcularEscala = (promedio) => {
  if (promedio >= 6.5) return 'Destacado';
  if (promedio >= 5.6) return 'Buen Trabajo';
  if (promedio >= 4.0) return 'Con Mejora';
  return 'Deficiente';
};

function Item({ alumno, eliminarAlumno, editarAlumno }) {
  return (
    <li>
      <strong>{alumno.nombre}</strong> - {alumno.asignatura} - Promedio: {alumno.promedio} - Escala: {calcularEscala(alumno.promedio)}
      <button onClick={() => editarAlumno(alumno)}>Editar</button>
      <button onClick={() => eliminarAlumno(alumno.id)}>Eliminar</button>
    </li>
  );
}

export default Item;
