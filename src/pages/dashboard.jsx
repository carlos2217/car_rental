import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function Dashboard({linese}) {
    return (
        <div className='grid md:grid-cols-3 bg-gray-300 py-4'>
            <div className='flex flex-col items-center justify-center py-4 px-5 space-y-4'>
                {
                    !linese &&
                    <Link to ='dashboard/create' className='tail-list-item'>Create Linese</Link>
                }
                {
                    linese &&
                    <>
                        <Link to ='dashboard/update'  className='tail-list-item'>Update Linese</Link>
                    </>
                }
                <Link to ='dashboard/mycar'  className='tail-list-item'>My Car</Link>
            </div>
            <div className='col-span-2'>
                <Outlet />
            </div>
        </div>
    );
}

export default Dashboard;