import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
import { addHistory } from '../services/allApis';
import { deleteVedios } from '../services/allApis';
import { toast } from 'react-toastify';

function videocard({v,response,cat}) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = async() => {
      setShow(true);
      const dt=new Date()
      const data={videoId:v.videoId,title:v.title,url:v.videoUrl,date:dt}
      console.log(data);
      
      const  result=await addHistory(data)
      console.log(result)
    }

   

    const delVedio=async()=>{
      const del=await deleteVedios(v.id)
      if(del.status==200){
        toast.success('Vedio deleted ')
        response(del)
      }
      else{
        toast.error('Deletion failed!')
      }


      
      
  
    }

    const draghandler=(e)=>{
      console.log(e);
      console.log(v);

      e.dataTransfer.setData('Video',JSON.stringify(v))
      
      
      

    }
  return (
    <>
    <Card onDragStart={(e)=>{draghandler(e)}} className='m-3'  style={{ width: '90%' }} draggable>
      <Card.Img variant="top" height={'200'} src={v?.imageUrl}  style={{cursor:'pointer'}} onClick={handleShow} />
      <Card.Body>
        <Card.Title>{v?.title}</Card.Title>
        
        <Button onClick={delVedio} variant="btn"><i className="fa-solid fa-trash" style={{color: "#ff0000",}} /></Button>
      </Card.Body>
    </Card>

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="560" height="315" src={v.videoUrl} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </Modal.Body>
        
      </Modal>

    </>  )
}

export default videocard