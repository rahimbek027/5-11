import './App.css';

// src/App.js
import React, { useContext, useState } from 'react';
import { TodoProvider, TodoContext } from './context/TodoContext';
import './App.css';
import Modal from './Modal';

const App = () => {
  return (
    <TodoProvider>
      <TodoApp />
    </TodoProvider>
  );
};

const TodoApp = () => {
  const { todos, addTodo, updateTodo, deleteTodo } = useContext(TodoContext);
  const [todoText, setTodoText] = useState('');
  const [editId, setEditId] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo({ id: Date.now(), text: todoText });
    setTodoText('');
  };

  const openModal = (todo) => {
    setTodoText(todo.text);
    setEditId(todo.id);
    setModalOpen(true);
  };

  const handleUpdate = (text) => {
    updateTodo(editId, { id: editId, text });
    setEditId(null);
    setModalOpen(false); 
  };

  const handleDelete = (id) => {
    const confirmDelete = window.confirm("Malumotni o'chirishga ishonchingiz komilmi?");
    if (confirmDelete) {
      deleteTodo(id);
    }
  };

  return (
    <div className="container">
      <h1>TO DO List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
          required
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={todo.id}>
            {index + 1}. {todo.text}
            <div className='btns'>
              <button className='edit-btn' onClick={() => openModal(todo)}>Edit</button>
              <button onClick={() => handleDelete(todo.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        onSave={handleUpdate}
        todoText={todoText}
      />
    </div>
  );
};

export default App;
