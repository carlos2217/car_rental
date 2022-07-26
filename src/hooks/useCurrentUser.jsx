import { useEffect, useState } from 'react'
import jwt from 'jwt-decode';

const useCurrentUser = () => {
    const [user,setUser] = useState(null)
    const main = async () =>{
      try {
        const token = localStorage.getItem('token')
        const decode = jwt(token)
        setUser(decode)
      } catch (ex) {}
    }
    useEffect(() => {
        main()
    } ,[])
    return {user}
}
 
export default useCurrentUser;