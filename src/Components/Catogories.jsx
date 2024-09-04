import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { addCategories } from '../services/allApis';
import { toast } from 'react-toastify';
import Categorylist from './Categorylist';

function Catogories() {
  const [categoryResponse,setCategoryResponse]=useState("")

  const [addCategory,setAddCategory]=useState({
    categoryId:'',title:'',videos:[]
  })

  const handleCategory=async()=>{

    const {categoryId,title}=addCategory
    if(!categoryId||!title)
    {
      toast.warning('Enter valid input')
    }
    else{
      const res=await addCategories(addCategory)
      console.log(res);
      if(res.status==201)
      {
        handleClose()
        setAddCategory({
          categoryId:'',title:'',videos:[]
        })

        toast.success("Category Added")
        setCategoryResponse(res)

      }
      else{
        toast.error('Category Adding Failed')
      }
      
    }
    console.log(addCategory);
    
  }

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (

    <>
    <div onClick={handleShow} className='d-grid'><button className='btn btn-success'>Add Category</button></div>

    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add category</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <FloatingLabel
        controlId="floatingInput"
        label="Category Id"
        className="mb-3"
      >
        <Form.Control onChange={(e)=>{setAddCategory({...addCategory,categoryId:e.target.value})}} type="email" placeholder="name@example.com" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Category Title">
        <Form.Control onChange={(e)=>{setAddCategory({...addCategory,title:e.target.value})}} type="text" placeholder="Password" />
      </FloatingLabel>
         
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={handleCategory} variant="success">Add</Button>
        </Modal.Footer>
      </Modal>
      <Categorylist response={categoryResponse}/>
    </>
  )
}

export default Catogories