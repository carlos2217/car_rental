import React, { useState, useEffect } from 'react';
import Moment from 'moment';

import {myCar} from '../server/carServer'

function MyCar(props) {
    const [car, setCar] = useState(null)
    const getMyCar = async () =>{
        try {
            const {data: car} = await myCar()
            setCar(car)
        } catch (ex) {}
    }
    useEffect(() => {
        getMyCar()
    }, [])
    
    return (
        <>
            {
                car &&
                <div className='mx-5' >
                    <div className="rounded-lg shadow-lg bg-gray-800 max-w-sm text-center mb-2">
                        <div className="py-3 px-6 border-b border-gray-300 font-body text-lg font-semibold text-gray-500 flex justify-center">
                            {/* <div className='w-36 h-36 bg-red-400 rounded-full ' /> */}
                        </div>
                        <div className="grid grid-cols-2">
                            <div className="p-6">
                                <h5 className="lable ">Name</h5>
                                <p className="info">{car.car.name}</p>
                            </div>
                            <div className="p-6">
                                <h5 className="lable ">Rent Date</h5>
                                <p className="info">{Moment(car.rentalData).format('DD-MMM-YYYY')}</p>
                            </div>
                            <div className="p-6">
                                <h5 className="lable ">Return Date</h5>
                                {
                                    car.rentalData == null ? 
                                    <p className="info">{Moment(car.returnData).format('DD-MMM-YYYY')}</p>
                                    :
                                    < p className="text-xs text-white">Company Didn't Confirmed yet</p>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            }
            {
                !car &&
                <div className='mx-5' >
                    <div className="rounded-lg shadow-lg bg-white max-w-sm text-center mb-2">
                        <div className="py-3 px-6 border-b border-gray-300 font-body text-lg font-semibold text-gray-500 flex justify-center">
                            <p className='text-xl font-body font-bold text-gray-400 capitalize'> You Haven't rent car </p>
                        </div>
                    </div>
                </div>

            }
        </>
    );
}

export default MyCar;