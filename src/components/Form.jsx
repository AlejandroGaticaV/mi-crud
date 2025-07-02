import React, { useState, useEffect } from 'react';

function Form({ agregarOActualizarAlumno, alumnoEditar }) {
  const [nombre, setNombre] = useState('');
  const [asignatura, setAsignatura] = useState('');
  const [promedio, setPromedio] = useState('');

  // Carga los datos en el formulario si se está editando un alumno
  useEffect(() => {
    if (alumnoEditar) {
      setNombre(alumnoEditar.nombre);
      setAsignatura(alumnoEditar.asignatura);
      setPromedio(alumnoEditar.promedio);
    } else {
      setNombre('');
      setAsignatura('');
      setPromedio('');
    }
  }, [alumnoEditar]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validaciones básicas
    if (!nombre.trim() || !asignatura.trim() || !promedio.trim()) {
      alert('Todos los campos son obligatorios');
      return;
    }

    const promedioNum = parseFloat(promedio);
    if (isNaN(promedioNum) || promedioNum < 1 || promedioNum > 7) {
      alert('El promedio debe ser un número entre 1.0 y 7.0');
      return;
    }

    // Prepara el alumno para guardar
    const nuevoAlumno = {
      nombre,
      asignatura,
      promedio: promedioNum.toFixed(1),
    };

    agregarOActualizarAlumno(nuevoAlumno);

    // Limpia el formulario
    setNombre('');
    setAsignatura('');
    setPromedio('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nombre del alumno"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <input
        type="text"
        placeholder="Asignatura"
        value={asignatura}
        onChange={(e) => setAsignatura(e.target.value)}
      />
      <input
        type="number"
        placeholder="Promedio (1.0 - 7.0)"
        step="0.1"
        value={promedio}
        onChange={(e) => setPromedio(e.target.value)}
      />
      <button type="submit">
        {alumnoEditar ? 'Actualizar Alumno' : 'Agregar Alumno'}
      </button>
    </form>
  );
}

export default Form;