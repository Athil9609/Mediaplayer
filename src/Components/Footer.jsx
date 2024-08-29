import React from 'react'
import {Row,Col} from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
    <div className='bg-light py-2 container-fluid'>
      <Row className='p-5'>

        <Col sm={12} md={5}><h3>Media Player</h3>
        <p style={{textAlign:'justify'}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit neque ex vitae fugit modi quidem est aspernatur, necessitatibus facilis non dolore quasi! Reprehenderit minima officia illum ipsum velit vitae adipisci.
          </p></Col>
        <Col sm={12} md={2} >
        <h3>Links</h3>
        <div className='d-flex flex-column text-primary '>
          <Link to={'/'}>Landing</Link>
          <Link to={'/home'}>Home</Link>
          <Link to={'/his'}>Watch history</Link>
        </div>
        </Col>
        <Col sm={12} md={5}>
        <h3>Feedback</h3>
        <textarea name="" id="" className='form-control'></textarea>
        <button className='btn btn-primary mt-3'>Send</button>
        </Col>

      </Row>
      <h6 className='text-center'>Media player &copy; 2024 All rights reserved</h6>
    </div>
    </>
  )
}

export default Footer