import { useEffect, useState } from "react";
import { availableCars } from '../server/carServer'

const useAvailableCars = () => {
    const [data,setData] = useState([])
    const [load, setLoad] = useState(true)
    const [error, setError] = useState('')

    const main = async () =>{
        try{
            const { data: cars } = await availableCars()
            setData(cars)
            setLoad(false)
        } catch(ex){
            setLoad(false)
            setError(ex.message)
        }
    }
    useEffect(()=>{
        main()
    },[])

    return{data,load,error,setData}
}
 
export default useAvailableCars;