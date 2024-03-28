import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

function TodoCrud() {
  const [todos, setTodos] = useState([]);
  const [todoText, setTodoText] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const handleAddTodo =  () => {
    if (todoText.trim() !== '') {
      setTodos([...todos, { text: todoText }]);
      setTodoText('');
    }
  };

  const handleEditTodo = (index) => {
    setEditIndex(index);
    setTodoText(todos[index].text);
    setIsEditing(true);
    setShowModal(true);
  };

  const handleUpdateTodo = () => {
    const updatedTodos = [...todos];
    updatedTodos[editIndex].text = todoText;
    setTodos(updatedTodos);
    setIsEditing(false);
    setEditIndex(null);
    setShowModal(false);
    setTodoText('');
  };

  const handleDeleteTodo = (index) => {
    const updatedTodos = todos.filter((todo, i) => i !== index);
    setTodos(updatedTodos);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setIsEditing(false);
    setEditIndex(null);
    setTodoText('');
  };

  return (
    <div className="container mt-5 text-center" style={{ maxWidth: '400px' }}>
      <div className="mb-3 d-flex justify-content-center">
        <input
          type="text"
          className="form-control me-2"
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
          placeholder="Enter todo"
          style={{ width: '150px' }}
        />
        <button
          className="btn btn-primary"
          onClick={isEditing ? handleUpdateTodo : handleAddTodo}
          style={{ width: '100px' }}
        >
          {isEditing ? 'Update' : 'Add'}
        </button>
      </div>
      <ul className="list-group">
        {todos.map((todo, index) => (
          <li className="list-group-item d-flex justify-content-between" key={index}>
            <span>{todo.text}</span>
            <div>
              <button
                className="btn btn-warning me-2"
                onClick={() => handleEditTodo(index)}
              >
                Edit
              </button>
              <button
                className="btn btn-danger"
                onClick={() => handleDeleteTodo(index)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>{isEditing ? 'Edit Todo' : 'Add Todo'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="todoText">
              <Form.Label>Todo Text</Form.Label>
              <Form.Control
                type="text"
                value={todoText}
                onChange={(e) => setTodoText(e.target.value)}
                style={{ width: '100%' }}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={isEditing ? handleUpdateTodo : handleAddTodo}>
            {isEditing ? 'Update' : 'Add'}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default TodoCrud;
