
import React from 'react'
import { useEffect,useState } from 'react'
import axios from 'axios'
import "bootstrap/dist/css/bootstrap.css"; 
import Container from "react-bootstrap/Container"; 
import Modal from 'react-bootstrap/Modal';


 import Button from "react-bootstrap/Button"; 
function CompletedTask() {
    const [data,setData] = useState([])
    const [showModal, setShowModal] = useState(false);
    useEffect(()=>{
        axios.get('http://localhost:8080/completedTask')
        .then(res =>setData(res.data))
        .catch(er => console.log(er));
    },[])

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-GB'); 
      };
      const handleShow = () => setShowModal(true);
      const handleClose = () => setShowModal(false);

  return (
  <>
    <Button variant="primary" onClick={handleShow}>
   CompletedTask
  </Button>
    
        <Container>
    
        <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Completed Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>


    <table className='table'>
                <thead className='table table-sm table-dark'>
                    <tr>
                        
                        <th>title</th>
                        <th>description</th>
                        <th>due date</th>
                        <th>status</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((user,index) =>(
                                <tr key={index}>
                                    <td>{user.title}</td>
                                    <td>{user.description}</td>
                                    <td>{formatDate(user.due_Date)}</td>
                                    <td>Completed</td>
                                   
                                    
                                </tr>
                            )
                            )
                    }
                </tbody>
        </table>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
        </Container>
       
        </>

  )
  
}

export default CompletedTask