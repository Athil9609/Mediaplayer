import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
function Addvedio() {
  const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    
    <>
    <button className='btn' onClick={handleShow}> <i className='fa-solid fa-circle-plus' style={{color:'#ffd438'}}/> </button>

    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add video</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
        <FloatingLabel
        controlId="Vid"
        label="VideoID"
        className="mb-3"
      >
        <Form.Control type="number" placeholder="name@example.com" />
      </FloatingLabel>
      <FloatingLabel controlId="vtitle" label="Video Title"  className="mb-3">
        <Form.Control type="text" placeholder="Password" />
      </FloatingLabel>
       <FloatingLabel controlId="vtitle" label=" Image URL"  className="mb-3">
        <Form.Control type="text" placeholder="Password" />
      </FloatingLabel>
       <FloatingLabel controlId="vtitle" label="Video URL"  className="mb-3">
        <Form.Control type="text" placeholder="Password" />
      </FloatingLabel>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success">Upload</Button>
        </Modal.Footer>
      </Modal>

    </>
  )
}

export default Addvedio