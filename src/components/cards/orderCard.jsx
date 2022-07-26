import Moment from 'moment'
import * as Yup from 'yup'
import {Link} from 'react-router-dom'
import {useState} from 'react'

import {modalCenter} from '../../notifications/swal'


import { confirm } from '../../server/orderServer'

import {RendPaginations} from '../../util/RendPaginations'

import Pag from '../../components/Pag'

import FormikForm from '../from/formikForm';
import FormikInput from '../from/formikInput';
import SubmitButton from '../from/submitButton';

const validationSchema = Yup.object().shape({
    returnData: Yup.date().label("Return Data").required()
})
const OrderCard = ({data: orders,consleOrder}) => {
    // const [currentPage, setCurrentPage] = useState(0)
    // const pageSize = 2
    // const handleChange = (num) => setCurrentPage(num)
    // const pagi = RendPaginations(orders,pageSize,currentPage)
    const confirmOrder = async (value,rental,orders) =>{
        try {
            await confirm(value,rental,orders)
            modalCenter('success','Thanks')
            window.location.reload(false)
        } catch (ex) {
            console.log(ex.message);
        }
    }
    const handleFormSubmit = (value,rental,order) =>{
        confirmOrder(value,rental,order)
    }
    return ( 
        <div className='flex flex-col'>
            <div className="grid lg:grid-cols-2 gap-2">
                    {
                        orders.map(order => (
                            
                            <div className='flex justify-center' key={order._id}>
                                <div className="w-full max-w-lg ">
                                    <div className="bg-white shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4">
                                            <div className='text-center '>
                                                <h5 className="text-lg">
                                                    <Link to={`/${order.rental.car._id}/car/details`} className="text-blue-500 capitalize font-light">{order.rental.car.name} </Link> 
                                                    <span className='text-gray-500 capitalize font-bold font-body'>Car Was rented By </span>  
                                                    <Link to={`/${order.rental.user._id}/user/details`} className="text-blue-500 capitalize font-light">{order.rental.user.name}</Link> 
                                                </h5>
                                                <div className='space-y-1'>
                                                    <h5 className='text-gray-500 capitalize font-bold font-body'> Rental Data: {Moment(order.rental.rentalData).format("YYYY-MMM-DD ")}</h5>
                                                    <h6 className="text-gray-500 capitalize font-bold font-body">total Price: ${order.rental.totalPrice}</h6>
                                                    <h6 className="text-gray-500 capitalize font-bold font-body">Days: {order.rental.days}</h6>
                                                </div>
                                            </div>
                                            <div>
                                                <FormikForm
                                                    initialValues={{returnData: ''}}
                                                    onSubmit={value => handleFormSubmit(value,order.rental._id,order._id)}
                                                    validationSchema={validationSchema}
                                                >
                                                    {({handleSubmit}) => (
                                                        <form onSubmit={handleSubmit}>
                                                            <FormikInput
                                                                lable="Return Data"
                                                                name="returnData"
                                                                type='date'
                                                            />
                                                            <SubmitButton text="confirm" />
                                                        </form>
                                                    )}
                                                </FormikForm>
                                                <button className='text-lg text-white bg-red-600 py-2 px-3 rounded-lg mt-2' onClick={() => consleOrder(order._id)}>X</button>
                                            </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
            </div>
            <div className='w-14 '>
                {/* <Pag currentPage={currentPage} itemCount={orders.length} pageSize={pageSize} onChange={handleChange}  /> */}
            </div>
        </div>
     );
}
 
export default OrderCard;