import React,{useState,useEffect} from 'react'
import { Categoryfetch,delCategory,updateCategory } from '../services/allApis'
import { toast } from 'react-toastify'
import Videocards from './Videocards'

function Categorylist({response}) {

    useEffect(()=>{
        getData()
    },[response])

    const [categoryList,setCategoryList]=useState([])



const getData=async()=>{
    const res=await Categoryfetch()
    console.log(res);
    if(res.status==200)
    {
        setCategoryList(res.data)
    }

   
    }

    const deleteCategory=async(id)=>{
        const result=await delCategory(id)
        if(result.status==200)
        {
            getData()
            toast.success('Category deleted')
        }

    
}


const dropHandler=async(e,category)=>{
    console.log('dropped');
    const vid=JSON.parse(e.dataTransfer.getData("Video"));
    category.videos.push(vid)

    const result= await updateCategory(category.id,category)
console.log(result);

if(result.status==200)
{
    toast.success(`${vid.title} video added to ${category.title}`)
    getData()
}
else{
    toast.error('Video-category adding failed')
}

    
    
}

const dragOverHandler=(e)=>{
    console.log('dragging');
    e.preventDefault()
    
}



  return (
<>
<div className='container-fluid border border-3 border-light p-2 mt-3'>
    {
        categoryList.length>0 ?
        <div >
            {
            categoryList.map(item=>(
               <div className='border'>
                    <div onDrop={(e)=>{dropHandler(e,item)}} onDragOver={(e)=>{dragOverHandler(e)}} on className=' m-2 p-3 mb-3  justify-content-between d-flex'>
                    <h5>{item.title}</h5>
                    <button onClick={(id)=>{deleteCategory(item.id)}} className='btn'>
                        <i className="fa-solid fa-trash" style={{color: "#ff0000",}} />
                    </button>
               </div>

                    <div className='border border-light'>
                        {
                            item?.videos?.length>0 &&
                            item?.videos?.map(vid=>(

                                <Videocards v={vid} cat={true}/>
                            ))
                        }
                        </div>
                </div>

            ))
        }
        </div>
        :
        <h2>No Categories</h2>
    }
</div>
</>
  )
}

export default Categorylist