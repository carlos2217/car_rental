import { useState, useEffect } from 'react'

import {useParams} from 'react-router-dom'

import {getOneCar} from '../../server/carServer'


const CarDetails = () => {
    const {id} = useParams()
    const [car,setCar] = useState(null)
    const getCar = async () =>{
        try {
            const {data:car} = await getOneCar(id)
            setCar(car)
        } catch (ex) {
            console.log(ex.message);
        }
    }
    useEffect(() =>{
        getCar()
    },[])
    return ( 
        <div className="w-full overflow-hidden relative">
            <img className="object-cover hover:scale-125 duration-700" style={{height:"660px", width:"100%"}} src="/pexels-yurii-hlei-1545743.jpg" alt="" />
            {
                car &&
                <div className="absolute top-0 bg-red-300 p-6 max-w-6xl  rounded-lg shadow-lg m-5">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-white text-center">{car.model}</h5>
                    <div className="grid grid-cols-3 gap-5">
                        <div className="text-white text-center border-2 border-white p-3 rounded-md">
                            <span className="text-lg font-bold font-body capitalize">Name</span>
                            <span className="block text-lg font-light font-body">{car.name}</span>
                        </div>
                        <div className="text-white text-center border-2 border-white p-3 rounded-md">
                            <span className="text-lg font-bold font-body capitalize">city</span>
                            <span className="block text-lg font-light font-body">{car.city}</span>
                        </div>
                        <div className="text-white text-center border-2 border-white p-3 rounded-md">
                            <span className="text-lg font-bold font-body capitalize">Price</span>
                            <span className="block text-lg font-light font-body">${car.price}</span>
                        </div>
                        
                    </div>
                </div>
            }
        </div>
     );
}
 
export default CarDetails;