import {useState,useEffect} from 'react'

import { toastError } from '../notifications/toast'
import { modalCenter } from '../notifications/swal'

import { allCars } from '../server/carServer'

const useAllCars = () => {
    const [data, setData] = useState(null)
    const [load, setLoad] = useState(true)
    const [error, setError] = useState('')

    const main = async () =>{
        try {
            const {data:cars} = await allCars()
            setData(cars)
            setLoad(false)
        } catch (ex) {
            setLoad(false)
            setError(ex.message)
            console.log(ex.message);
        }
    }

    useEffect(() => {
        setTimeout(() => {
            main()
        }, 2000);
    } ,[])

    return {data,load,error}
}
 
export default useAllCars;