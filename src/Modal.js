// src/Modal.js
import React, { useEffect, useState } from 'react';
import './Modal.css';

const Modal = ({ isOpen, onClose, onSave, todoText }) => {
  const [inputText, setInputText] = useState(todoText);

  useEffect(() => {
    setInputText(todoText);
  }, [todoText]);

  
  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(inputText);
    setInputText('');
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Edit Todo</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            required
          />
          <button type="submit">Save</button>
          <button className='cbtn' type="button" onClick={onClose}>Cancel</button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
