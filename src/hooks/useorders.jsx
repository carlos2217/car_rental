import { useEffect, useState } from 'react'

import { allOrders } from '../server/orderServer'


const useCurrentUser = () => {
    const [orders,setOrders] = useState(null)
    const main = async () =>{
      try {
        const {data: orders} = await allOrders()
        setOrders(orders)
      } catch (ex) {
          console.log(ex.message);
      }
    }
    useEffect(() => {
        main()
    } ,[])
    return {orders}
}
 
export default useCurrentUser;