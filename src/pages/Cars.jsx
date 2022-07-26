import { useState } from 'react';
import SimpleCard from '../components/cards/simpleCard';
import ErrorMesssage from '../components/from/errorMessage';
import Loading from '../components/loading';

import useAvailableCars from '../hooks/useAvailableCars'

import {search} from '../server/carServer'

function Cars({user,linese,loged}) {
    const { data: cars,error,load,setData } = useAvailableCars()

    const [key, setKey] = useState('')
    const [allCars, setAllcars] = useState(cars)

    const formSubmit = async (event) =>{
        event.preventDefault()
        try {
            const {data: getCars} = await search(key)
            setData(getCars)
        } catch (ex) {
            console.log(ex.message);
        }
    }
    return (
        <div className='mb-5'>
            {
                load && <Loading />
            }
            {
                error && <ErrorMesssage message={error} />
            }
            {
                allCars &&
                <>
                    <div className='flex justify-center'>
                        <div className="w-full max-w-lg ">
                            <div className="bg-white shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4">
                                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={formSubmit}>
                                    <div className="mb-4">
                                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="search">
                                            search
                                        </label>
                                        <input autoComplete='off' onChange={(e) => setKey(e.target.value)} value={key} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="search" type="text" placeholder="Search"/>
                                    </div> 
                                    <div className="flex items-center justify-between">
                                        <input type="submit"  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <SimpleCard user={user} data={cars} loged={loged} linese={linese} />
                </>
            }
        </div>
    );
}

export default Cars;