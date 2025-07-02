import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import List from './components/List';
import './App.css';

function App() {
  const [alumnos, setAlumnos] = useState([]);
  const [alumnoEditar, setAlumnoEditar] = useState(null);

  // Cargar datos desde localStorage al iniciar
  useEffect(() => {
    const datosGuardados = JSON.parse(localStorage.getItem('alumnos')) || [];
    setAlumnos(datosGuardados);
  }, []);

  // Guardar datos en localStorage cada vez que cambia la lista
  useEffect(() => {
    localStorage.setItem('alumnos', JSON.stringify(alumnos));
  }, [alumnos]);

  // Agrega un nuevo alumno o actualiza uno existente
  const agregarOActualizarAlumno = (alumno) => {
    if (alumnoEditar) {
      setAlumnos(alumnos.map((a) => (a.id === alumnoEditar.id ? alumno : a)));
      setAlumnoEditar(null);
    } else {
      setAlumnos([...alumnos, { ...alumno, id: Date.now() }]);
    }
  };

  // Elimina un alumno por ID
  const eliminarAlumno = (id) => {
    setAlumnos(alumnos.filter((a) => a.id !== id));
  };

  // Selecciona un alumno para editar
  const editarAlumno = (alumno) => {
    setAlumnoEditar(alumno);
  };

  return (
    <div className="App">
      <h1>Evaluación de Alumnos</h1>
      <Form agregarOActualizarAlumno={agregarOActualizarAlumno} alumnoEditar={alumnoEditar} />
      <List alumnos={alumnos} eliminarAlumno={eliminarAlumno} editarAlumno={editarAlumno} />
    </div>
  );
}

export default App;