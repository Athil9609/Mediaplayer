import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function Videos() {
  return (
    <>
    <div className='border border-3 p-5'>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://i.ytimg.com/vi/RLzC55ai0eo/maxresdefault.jpg" />
      <Card.Body>
        <Card.Title>Heeriye</Card.Title>
        
        <Button variant="btn"><i className="fa-solid fa-trash" style={{color: "#ff0000",}} /></Button>
      </Card.Body>
    </Card>

    </div>
    </>
  )
}

export default Videos