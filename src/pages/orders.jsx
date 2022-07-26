import { useEffect } from 'react';

import useorders from '../hooks/useorders'

import {consle} from '../server/orderServer'

import {modalCenter} from '../notifications/swal'

import OrderCard from '../components/cards/orderCard';

const Orders = () => {
    const {orders} = useorders()

    const consleOrder = async (id) =>{
        try {
            await consle(id)
            modalCenter('success','Order been consled')
            window.location.reload(false)
        } catch (ex) {
            console.log(ex.message);
        }
    }
    
    return ( 
        <div className='p-2'>
            {
                orders &&
                <OrderCard data={orders} consleOrder={consleOrder} />
            }
        </div>
     );
}
 
export default Orders;