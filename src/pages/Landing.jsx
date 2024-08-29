import React from 'react'
import { Row,Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Landing() {
  return (
    <>
    <div className='container-fluid d-flex align-items-center' style={{height:'100vh'}}>
      <Row>
        <Col className='p-5' sm={12} md={6}>
       <h2 className='mt-md-5'><i className="fa-brands fa-youtube " style={{color:"#d70909"}}></i> {' '} Media player</h2>
       <p style={{textAlign:'justify'}} className='mt-md-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis quaerat aperiam quia repellat vero? Obcaecati doloremque quisquam quasi ratione adipisci laborum fugit amet ab nesciunt? Quae consequuntur in nesciunt! Ratione.
       </p>
        <div className='d-grid'><Link to={'/home'} className='btn btn-primary mt-5 '>Lets Go</Link></div>
        </Col>
        <Col sm={12} md={6} className='px-5'>
        <img src="https://cdn-icons-png.flaticon.com/512/4647/4647453.png" alt="Intro image" className='img-fluid ms-md-5  ' />
        </Col>
      </Row>
    </div>
    <div className='container-fluid mb-5'>
      <h3 className='text-center'>Features</h3>
    <div className='p-5 d-flex justify-content-around'>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" height={'200px'} src="https://cdn.dribbble.com/users/3943049/screenshots/14032596/media/9e39cf22d33b4d2b77e9f270f2f06f6e.gif" />
        <Card.Body>
          <Card.Title className='text-white'>Fast and Secure</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" height={'200px'} src="https://cdn.dribbble.com/users/3873964/screenshots/16998621/media/a14b8b0ec5708cd75a99977c616c7ca3.gif" />
        <Card.Body>
          <Card.Title className='text-white'>Upload youtube videos</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" height={'200px'} src="https://cdn.dribbble.com/users/2395254/screenshots/4954611/youtube-mobile.gif" />
        <Card.Body>
          <Card.Title className='text-white'>Add and Manage Catogries</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
    </div>

    <div className='p-5'>
      <Row>
        <Col sm={12} md={7}>
        <h4>Simple and Faster</h4>
      <p style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

        </Col>
        <Col sm={12} md={5}>
        <iframe width="600" height="414" src="https://www.youtube.com/embed/MHn66JJH5zs?list=PLSsAz5wf2lkK_ekd0J__44KG6QoXetZza" title="React For Beginners 1 : Introduction To React" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

        </Col>
      </Row>
    </div>


    </>
  )
}

export default Landing