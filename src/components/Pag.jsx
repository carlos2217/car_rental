import React from 'react';
import _ from 'lodash'
function Pag({itemCount,pageSize,onChange,currentPage}) {
    const pageCount = Math.ceil(itemCount / pageSize)
    const pages =_.range(1,pageCount+1)
    
    if(pages == 1) return null
    return (
        <div className=''>
            <div className='flex justify-around space-x-3 items-center'>
                {
                    pages.map(page => (
                        <div className={page === currentPage ? "bg-gray-900 p-1 rounded-full text-white" :  " border-2 border-gray-900 p-1 rounded-full text-gray-500"} key={page} onClick={() =>onChange(page)}>{page}</div>
                    ))
                }
            </div>
        </div>
    );
}

export default Pag;