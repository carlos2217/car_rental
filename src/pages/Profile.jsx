import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import {me} from '../server/userService'

function Profile(props) {
    const [currentUser, setCurrentUser] = useState(null)
    const getUser = async () =>{
        try {
            const {data: user} = await me()
            setCurrentUser(user)
        } catch (ex) {
            console.log(ex.message);
        }
    }
    useEffect(() =>{
        getUser()
    },[])
    
    return (
        <div>
            {
                currentUser &&
                <div className='flex justify-center'>
                    <div className="rounded-lg shadow-lg bg-gray-800 max-w-sm text-center my-4 ">
                        <div className="py-3 px-6 border-b border-gray-300 font-body text-lg font-semibold text-gray-500 flex justify-center">
                            <div className='w-36 h-36 bg-gray-500 rounded-full ' />
                        </div>
                        <div className="grid grid-cols-2">
                            <div className="p-6">
                                <h5 className="lable ">Name</h5>
                                <p className="info">{currentUser.name}</p>
                            </div>
                            <div className="p-6">
                                <h5 className="lable ">Email</h5>
                                <p className="info">{currentUser.email}</p>
                            </div>
                            <div className="p-6">
                                <h5 className="lable ">Contact</h5>
                                <p className="info">{currentUser.phoneNumber}</p>
                            </div>
                            <div className="p-6">
                                <h5 className="lable ">City</h5>
                                <p className="info">{currentUser.address}</p>
                            </div>
                        </div>
                        <div className="py-3 px-6 border-t border-gray-300 text-gray-600">
                            <Link to={`/profile/edit/${currentUser._id}`} type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Edit</Link>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
}

export default Profile;