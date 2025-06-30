import React, { useState, useEffect } from 'react';

function Form({ addOrUpdateItem, itemToEdit }) {
  // Estado del valor que el usuario escribe en el input
  const [inputValue, setInputValue] = useState('');

  // Cuando cambia el item a editar, se actualiza el input con su valor
  useEffect(() => {
    if (itemToEdit) {
      setInputValue(itemToEdit.value); // Rellenar input si se esta editando
    } else {
      setInputValue(''); // Limpiar input si no se edita nada
    }
  }, [itemToEdit]);

  // Maneja el envio del formulario
  const handleSubmit = (e) => {
    e.preventDefault(); // Evita recargar la pagina

    if (inputValue.trim()) {
      addOrUpdateItem(inputValue); // Agrega o actualiza el item
      setInputValue(''); // Limpia el input despues
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue} // Valor del input controlado por el estado
        onChange={(e) => setInputValue(e.target.value)} // Actualiza el estado al escribir
      />
      <button type="submit">
        {/* El boton muestra 'Actualizar' si se esta editando un item */}
        {itemToEdit ? 'Actualizar' : 'Agregar'}
      </button>
    </form>
  );
}

export default Form;