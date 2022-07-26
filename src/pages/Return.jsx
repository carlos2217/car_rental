import React, { useState,useEffect } from 'react';
import {Link} from 'react-router-dom';
import Moment from 'moment'

import {ReturnCars,Retured} from '../server/rentalServer'

function Return() {
    const [cars, setCars] = useState([])
    const handleRetrun = async (rental,car) =>{
        try {
            await Retured(rental,car)
            window.location.reload(false)
        } catch (ex) {
            console.log(ex.messsage);
        }
    }
    const returnCars = async () =>{
        try {
            const {data:cars} = await ReturnCars()
            setCars(cars)
        } catch (ex) {
            console.log(ex.messsage);
        }
    }
    useEffect(() => {
        returnCars()
    }, [])
    return (
        <div className="grid lg:grid-cols-2 gap-2">
                {
                    cars.map(car => (
                        
                        <div className='flex justify-center' key={car._id}>
                            <div className="w-full max-w-lg ">
                                <div className="bg-white shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4 ">
                                        <div className='text-center space-y-3'>
                                            <h5 className="text-lg">
                                                <Link to={`/${car.car._id}/car/details`} className="text-blue-500 capitalize font-light hover:no-underline hover:text-blue-800">{car.car.name} </Link> 
                                                <span className='text-gray-500 capitalize font-bold font-body'>Car Was rented By </span>  
                                                <Link to={`/${car.user._id}/user/details`} className="text-blue-500 capitalize font-light hover:no-underline hover:text-blue-800">{car.user.name}</Link> 
                                            </h5>
                                            <div className='space-y-1'>
                                                <h5 className='text-gray-500 capitalize font-bold font-body'> Rental Data: {Moment(car.rentalData).format("YYYY-MMM-DD ")}</h5>
                                                <h5 className='text-gray-500 capitalize font-bold font-body'> return Data: {Moment(car.returnData).format("YYYY-MMM-DD ")}</h5>
                                            </div>
                                        </div>
                                        <div>
                                            <button className='text-lg text-white bg-gray-900 py-2 px-3 rounded-lg mt-2' onClick={() => handleRetrun(car._id,car.car._id)} >Retured</button>
                                        </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
        </div>
    );
}

export default Return;