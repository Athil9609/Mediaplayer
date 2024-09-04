import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { addVideos } from '../services/allApis'
import { toast } from 'react-toastify';
function Addvedio({response}) {
  const [show, setShow] = useState(false);
  const [Video, setVideo] = useState({
    videoId: '', title: '', imageUrl: '', videoUrl: ''
  })

  const handleUpload = async () => {
    console.log(Video);
    const { videoId, title, imageUrl, videoUrl } = Video
    if (!videoId || !title || !imageUrl || !videoUrl) {
      // alert('Please enter valid input')
      toast.warning('Please enter valid input')
    }
    else {

      try {

        const vurl = videoUrl.split("v=")[1]


        const eurl = `https://www.youtube.com/embed/${vurl}?si=R6ypWjMwqNbJ39mV&autoplay=1`

        Video.videoUrl = eurl
        const res = await addVideos(Video)

        if (res.status == 201) {
          // alert('upload successfull')
          toast.success('upload successfull')
          response(res)
          handleClose()

        }
        else {
          // alert('upload failed')
          toast.error('upload failed')
        }

      }
      catch (err) {

        console.log(err);

        // alert('upload failed')
        toast.error('upload failed')

      }


    }
  }

  const handleClose = () => {
    setVideo({ videoId: '', title: '', imageUrl: '', videoUrl: '' })
    setShow(false);
  }
  const handleShow = () => setShow(true);


  return (

    <>
      <button className='btn' onClick={handleShow}> <i className='fa-solid fa-circle-plus fs-4' style={{ color: '#ffd438' }} /> </button>

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
            <Form.Control type="number" placeholder="name@example.com" onChange={(e) => { setVideo({ ...Video, videoId: e.target.value }) }} />
          </FloatingLabel>
          <FloatingLabel controlId="vtitle" label="Video Title" className="mb-3">
            <Form.Control type="text" placeholder="Password" onChange={(e) => { setVideo({ ...Video, title: e.target.value }) }} />
          </FloatingLabel>
          <FloatingLabel controlId="imgurl" label=" Image URL" className="mb-3">
            <Form.Control type="text" placeholder="Password" onChange={(e) => { setVideo({ ...Video, imageUrl: e.target.value }) }} />
          </FloatingLabel>
          <FloatingLabel controlId="vurl" label="Video URL" className="mb-3">
            <Form.Control type="text" placeholder="Password" onChange={(e) => { setVideo({ ...Video, videoUrl: e.target.value }) }} />
          </FloatingLabel>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" onClick={handleUpload}>Upload</Button>
        </Modal.Footer>
      </Modal>

    </>
  )
}

export default Addvedio