  import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import List from './components/List';
import './App.css'

function App() {
  // Estado que guarda la lista de items
  const [items, setItems] = useState([]);

  // Estado que guarda el item que se esta editando (si hay uno)
  const [itemToEdit, setItemToEdit] = useState(null);

  // Al iniciar la app, se cargan los items desde localStorage
  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem('items')) || [];
    setItems(storedItems);
  }, []);

  // Cada vez que cambia la lista de items, se actualiza en localStorage
  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);

  // Funcion que agrega un nuevo item o actualiza uno existente
  const addOrUpdateItem = (value) => {
    if (itemToEdit) {
      // Si hay un item en edicion, se actualiza
      setItems(items.map(item =>
        item.id === itemToEdit.id
          ? { ...item, value } // actualiza el valor
          : item // los demas quedan igual
      ));
      setItemToEdit(null); // limpia el estado de edicion
    } else {
      // Si no hay item en edicion, se agrega uno nuevo
      setItems([...items, { id: Date.now(), value }]);
    }
  };

  // Funcion que elimina un item segun su ID
  const deleteItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  // Funcion que selecciona un item para editar
  const editItem = (item) => {
    setItemToEdit(item);
  };

  return (
    <div className="App">
      <h1>CRUD con LocalStorage</h1>

      {/* Componente del formulario para agregar o editar items */}
      <Form
        addOrUpdateItem={addOrUpdateItem}
        itemToEdit={itemToEdit}
      />

      {/* Componente que muestra la lista de items */}
      <List
        items={items}
        deleteItem={deleteItem}
        editItem={editItem}
      />
    </div>
  );
}

export default App;