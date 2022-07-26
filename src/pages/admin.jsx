import {useEffect, useState} from 'react'
import {Link,Outlet} from 'react-router-dom'
import React from 'react';

import {count} from '../server/orderServer'
import {ReturnCount} from '../server/rentalServer'

function Admin() {
    const [countNumber,setCountNumber] =useState(null)
    const [returnNumber,setReturnNumber] =useState(null)
    const getcount = async () =>{
        try {
            const {data: ordersCount} = await count()
            setCountNumber(ordersCount)
        } catch (ex) {
            console.log(ex.message);
        }
    }
    const retunrNumber = async () =>{
        try {
            const {data: returnNumber} = await ReturnCount()
            setReturnNumber(returnNumber)
        } catch (ex) {
            console.log(ex.message);
        }
    }
    useEffect(() => {
        getcount()
        retunrNumber()
    }, [])
    return (
        <div className='grid md:grid-cols-3 bg-gray-300 py-4'>
            <div className='flex flex-col items-center justify-center py-4 px-5 space-y-4'>
                <Link to='admin/car' className='tail-list-item'>All Cars</Link>
                <Link to='admin/car/create'  className='tail-list-item'>new car</Link>
                <Link to='admin/car/orders' className='tail-list-item'>orders <sup className="bg-white text-gray text-sm text-gray-500 py-1 px-2 rounded-lg">{countNumber}</sup> </Link>
                <Link to='admin/car/return' className='tail-list-item'>return <sup className="bg-white text-gray text-sm text-gray-500 py-1 px-2 rounded-lg">{returnNumber}</sup> </Link>
            </div>
            <div className='col-span-2'>
                <Outlet />
            </div>
        </div>
    );
}

export default Admin;