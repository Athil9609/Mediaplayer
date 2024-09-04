import axios from 'axios'

const base_url='https://mediaplayerserver-n56n.onrender.com'

export const  addVideos=async(data)=>{
    return await axios.post(`${base_url}/Video`,data)
}

export const getVideos=async()=>{
    return await axios.get(`${base_url}/Video`)
}

export const deleteVedios=async(id)=>{
    return axios.delete(`${base_url}/Video/${id}`)
}

export const addCategories=async(data)=>{
    return axios.post(`${base_url}/Catogory`,data)
}

export const Categoryfetch=async()=>{
    return axios.get(`${base_url}/Catogory`)
}

export const delCategory=async(id)=>{
    return await axios.delete(`${base_url}/Catogory/${id}`)
}

export const addHistory=async(data)=>{
    return await axios.post(`${base_url}/History`,data)
}

export const getHistory=async()=>{
    return await axios.get(`${base_url}/History`)
}

export const deleteHistory=async(id)=>{
    return await axios.delete(`${base_url}/History/${id}`)
}

export const updateCategory=async(id,data)=>{
    return await axios.put(`${base_url}/Catogory/${id}`,data)
}

export const checkEmailID=async(email)=>{
    return axios.get(`${base_url}/Users?email=${email}`)
}

export const registerApi=async(data)=>{
    return axios.post(`${base_url}/Users`,data)
}

export const loginApi=async(email,password)=>{

    return axios.get(`${base_url}/Users?email=${email}&password=${password}`)

}