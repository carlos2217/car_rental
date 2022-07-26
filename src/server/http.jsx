import axios from "axios";


axios.defaults.headers.common['x-token'] = localStorage.getItem('token')

axios.interceptors.response.use(null,error =>{
    const con =error.response && error.response.status >= 400 && error.response.status <= 500
    if(con){
        console.log(error.response);
    }
    if(!con) {
        console.log(error.response);
    }
    return Promise.reject(error)
})

export default{
    get: axios.get,
    post: axios.post,
    put: axios.put,
    patch: axios.patch,
    delete: axios.delete,
}