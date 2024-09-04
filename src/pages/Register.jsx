import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { checkEmailID,registerApi } from '../services/allApis'


function Register() {

    const nav=useNavigate()

    const [user,setUser]=useState({
        email:'',username:'',password:''
    })


    const handleRgister=async()=>{

        const{email,username,password}=user

        if(!email || !username || !password){
            toast.warning('Enter valid inputs !!')

        }
        else{
            console.log(user);
            
             const res=await checkEmailID(email)
             console.log(res);

             if(res.data.length>0)
             {
                 toast.warning("Email already in use")
             }
             else{

                const result=await registerApi(user)
                if(result.status=201)
                {
                setUser({        email:'',username:'',password:''
                })
                 toast.success("Sign up completed")
                 nav('/login')
             }
             else{
                toast.error("Registration failed")
             }
            
            }
            
        }
    }



    return (
        <>
            <div className='d-flex justify-content-center align-items-center ' style={{ height: '80vh' }}>
                <div className='w-75 border border-3 border-primary p-5 bg-light'>
                    <h3 className='mb-3'>Sign up</h3>
                    <input type='text' onChange={(e)=>{setUser({...user,email:e.target.value})}} className='form-control mb-3' placeholder='Enter your e-mail id' />
                    <input type='text'onChange={(e)=>{setUser({...user,username:e.target.value})}} className='form-control mb-3' placeholder='Enter your username' />
                    <input type='password' onChange={(e)=>{setUser({...user,password:e.target.value})}} className='form-control mb-3' placeholder='Enter your Password' />
                    <div className='d-flex justify-content-between' >
                        <    button className='btn btn-success' onClick={handleRgister}>Signup</button>
                        <Link className='btn btn-primary ms-3' to={'/login'}>Already a user?</Link>
                    </div>
                </div>
            </div></>
            )
}

export default Register