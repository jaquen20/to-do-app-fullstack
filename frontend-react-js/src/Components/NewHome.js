import React from 'react'
import { useEffect,useState } from 'react'
import axios from 'axios'
import "bootstrap/dist/css/bootstrap.css"; 
import Container from "react-bootstrap/Container"; 
import Row from "react-bootstrap/Row"; 
import Col from "react-bootstrap/Col"; 
 import Button from "react-bootstrap/Button"; 
import TaskForm from './TaskForm';
import CompletedTask from './CompletedTask';


 
function NewHome() {
    const [data,setData] = useState([])
  
    const [editId,setEditId] = useState('-1')
    const [Completed,setCompleted] = useState('')

    const [newtitle,updateTitle] = useState('')
    const [newdescription,updateDescription] = useState('')
    const [newdue_Date,updateDueDate] = useState('')
    const [updateCompleted] = useState('')
    
    useEffect(()=>{
        axios.get('http://localhost:8080/home')
        .then(res =>setData(res.data))
        .catch(er => console.log(er));
    },[])

      
        const handleEdit=(id) =>{
            axios.get('http://localhost:8080/user/' +id)
            .then(res =>{
                    updateTitle(res.data.title)
                    updateDescription(res.data.description)
                    updateDueDate(res.data.due_Date)
                     updateCompleted(res.data.Completed)
            })
                
                
            .catch(er => console.log(er));
            setEditId(id)

        }
        const handleUpdate=()=>{
            axios.put('http://localhost:8080/edit/' +editId,{id:editId,title:newtitle,description:newdescription,due_Date:newdue_Date})
            .then(res=>{
                console.log(res);
                window.location.reload();
                setEditId(-1);
            }).catch(er =>console.log(er))
        }
        const handleDelete=(id)=>{

            axios.delete('http://localhost:8080/delete/' +id)
            .then(res =>{
                window.location.reload()
                    // updateTitle(res.data.title)
                    // updateDescription(res.data.description)
                    // updateDueDate(res.data.due_Date)
            })
                
                
            .catch(er => console.log(er));

        }
        const handleToggle = (id) => {
            setCompleted(!Completed);
            axios.post('http://localhost:8080/updateStatus/' +id)
            .then(res =>{
                window.location.reload()
                    
            }).catch(er => console.log(er));

          }

          const formatDate = (dateString) => {
            const date = new Date(dateString);
            return date.toLocaleDateString('en-GB'); 
          };

          const handleTaskAdded = (newTask) => {
            setData((prevData) => [...prevData, newTask]);
          };
         
          const handleShow = (newTask) => {
            setData((prevData) => [...prevData, newTask]);
          };

  return (
    <div>
         <Container>
        <Row 
                    style={{ 
                        display: "flex", 
                        justifyContent: "center", 
                        alignItems: "center", 
                        fontSize: "3rem", 
                        fontWeight: "bolder", 
                    }} 
                > 
                    TODO LIST 
                </Row> 
  
        
        <hr /> 
     
<nav className="navbar navbar-light bg-light">
  <a className="navbar-brand" href="#">
  <TaskForm onTaskAdded={handleTaskAdded} />
  <CompletedTask onTaskAdded={handleShow} />

  
  
  </a>
</nav>
                <Row> 
                    <Col md={{ span: 10, offset: 2 }}> 
            
             
                    </Col> 
                </Row>
        

<table className='table'>
                <thead className='table table-sm table-dark'>
                    <tr>
                        
                        <th>title</th>
                        <th>description</th>
                        <th>due date</th>
                        <th>status</th>
                        <th>action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((user,index) =>(
                                user.id===editId ?
                                <tr>
                     <td> <input type='text'value={newtitle} onChange={e=>updateTitle(e.target.value)}/></td>
                     <td> <input type='text'value={newdescription} onChange={e=>updateDescription(e.target.value)}/></td>
                     <td> <input type='date'value={newdue_Date} onChange={e=>updateDueDate(e.target.value)}/></td>
                     {/* <td> <input type='text'value={newCompleted}/></td> */}
                     <td><Button variant = "dark" onClick={handleUpdate}>update</Button></td>
                                    

                                </tr>

                                :
                                <tr key={index}>
                                  
                                   
                                    <td>{user.title}</td>
                                    <td>{user.description}</td>
                                    <td>{formatDate(user.due_Date)}</td>
                                    {/* <td>{user.Completed}</td> */}
                                    <td><Button onClick={()=>handleToggle(user.id)}>Finish!!</Button></td>
                                    <td>
                                        <Button variant = "light" onClick={() => handleEdit(user.id)}>edit</Button>
                                        <Button variant = "light" onClick={() => handleDelete(user.id)}>delete</Button>
                                    </td>
                                    
                                </tr>
                            )
                            )
                    }
                </tbody>
        </table>
        

        </Container>

    </div>
  )
}

export default NewHome