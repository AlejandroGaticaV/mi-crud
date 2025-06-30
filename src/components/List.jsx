import React from 'react';
import Item from './Item';

// Componente que muestra la lista completa de items
function List({ items, deleteItem, editItem }) {
  return (
    <ul>
      {/* Recorre todos los items y renderiza un componente Item por cada uno */}
      {items.map((item) => (
        <Item
          key={item.id}           // Clave unica para React
          item={item}             // Objeto del item a mostrar
          deleteItem={deleteItem} // Funcion para eliminar item
          editItem={editItem}     // Funcion para editar item
        />
      ))}
    </ul>
  );
}

export default List;