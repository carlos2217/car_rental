import {useState,useEffect} from 'react'

import {linseeWithUser} from '../server/lineseServer'

const useUserLinese = () => {
    const [linese, setLinese] = useState(null)

    const main = async () =>{
        try {
            const {data: linese} = await linseeWithUser()
            setLinese(linese)
        } catch (ex) {}
    }
    useEffect(()=>{
        main()
    },[])
    return {linese}
}
 
export default useUserLinese;