import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Moment from 'moment';

import {oneUser} from '../server/userService'

const UserDetails = () => {
    const {id} = useParams()
    const [user,setUser] = useState(null)
    const getUser = async () =>{
        try {
            const {data:user} = await oneUser(id)
            setUser(user)
        } catch (ex) {
            console.log(ex.message);
        }
    }
    useEffect(() =>{
        getUser()
    },[])
    return ( 
        <div className="w-full overflow-hidden relative">
            <img className="object-cover hover:scale-125 duration-700" style={{height:"660px", width:"100%"}} src="/pexels-yurii-hlei-1545743.jpg" alt="" />
            {
                user &&
                <div class="absolute top-0 bg-red-300 p-6 max-w-6xl  rounded-lg shadow-lg m-5">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-white text-center">{user.user.name}</h5>
                    <div className="grid grid-cols-3 gap-5">
                        <div className="text-white text-center border-2 border-white p-3 rounded-md">
                            <span className="text-lg font-bold font-body capitalize">Email</span>
                            <span className="block text-lg font-light font-body">{user.user.email}</span>
                        </div>
                        <div className="text-white text-center border-2 border-white p-3 rounded-md">
                            <span className="text-lg font-bold font-body capitalize">Phone</span>
                            <span className="block text-lg font-light font-body">{user.user.phoneNumber}</span>
                        </div>
                        <div className="text-white text-center border-2 border-white p-3 rounded-md">
                            <span className="text-lg font-bold font-body capitalize">Address</span>
                            <span className="block text-lg font-light font-body">{user.user.address}</span>
                        </div>
                        <div className="text-white text-center border-2 border-white p-3 rounded-md">
                            <span className="text-lg font-bold font-body capitalize">Date Of birth</span>
                            <span className="block text-lg font-light font-body">{Moment(user.user.dob).format('DD-MMM-YYYY')}</span>
                        </div>
                        <div className="text-white text-center border-2 border-white p-3 rounded-md">
                            <span className="text-lg font-bold font-body capitalize">Linsess Number</span>
                            <span className="block text-lg font-light font-body">{user.lin.number}</span>
                        </div>
                        <div className="text-white text-center border-2 border-white p-3 rounded-md">
                            <span className="text-lg font-bold font-body capitalize">Expire Date</span>
                            <span className="block text-lg font-light font-body">{Moment(user.lin.expiredDate).format('DD-MMM-YYYY')}</span>
                        </div>
                    </div>
                </div>
            }
        </div>
     );
}
 
export default UserDetails;