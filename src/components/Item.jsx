import React from 'react';

// Componente que representa un solo item de la lista
function Item({ item, deleteItem, editItem }) {
  return (
    <li>
      {/* Muestra el valor del item */}
      {item.value}

      {/* Boton para activar el modo edicion */}
      <button onClick={() => editItem(item)}>Editar</button>

      {/* Boton para eliminar el item */}
      <button onClick={() => deleteItem(item.id)}>Eliminar</button>
    </li>
  );
}

export default Item;