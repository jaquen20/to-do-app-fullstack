// TaskForm.js
import React, { useState } from 'react';
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const TaskForm = ({ onTaskAdded }) => {
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [due_Date, setDueDate] = useState('');
  const [Completed] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {

      const response = await axios.post('http://localhost:8080/CreateTask', {
        title:title,
        description:description,
        due_Date: due_Date,
        Completed: Completed
        
      });
      onTaskAdded(response.data); 
      setTitle('');
      setDescription('');
      setDueDate('');
      handleClose(); 

    } catch (error) {
      console.error('Error creating task:', error);
    }
  };
//   const formatDate = (dateString) => {
//     const [year, month, day] = dateString.split('-');
//     return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
//   };

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add Task
      </Button>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Task Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Enter title" value={title} onChange={(e) => setTitle(e.target.value)} />
            <input type="text" placeholder="Enter description" value={description} onChange={(e) => setDescription(e.target.value)} />
            <input type="date" placeholder="Enter due date" value={due_Date} onChange={(e) => setDueDate(e.target.value)} />
            <button type="submit">Add Task</button>
          </form> */}
           <div className="container mt-5">
      <h1>Add Task</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Title:</label>
          <input type="text" className="form-control" placeholder="Enter title" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div className="mb-3">
          <label className="form-label">Description:</label>
          <input type="text" className="form-control" placeholder="Enter description" value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>
        <div className="mb-3">
          <label className="form-label">Due Date:</label>
          <input type="date" className="form-control" value={due_Date} onChange={(e) => setDueDate(e.target.value)} />
        </div>
        <button type="submit" className="btn btn-primary">Add Task</button>
      </form>
    </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default TaskForm;
