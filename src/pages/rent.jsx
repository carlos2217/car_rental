import {useParams,useNavigate} from 'react-router-dom'
import * as Yup from 'yup'
import Swal from 'sweetalert2'

import useOneCar from '../hooks/useOneCar'
import useCurrentUser from '../hooks/useCurrentUser'

import { modalCenter } from '../notifications/swal'
import { toastError } from '../notifications/toast'

import { create } from '../server/rentalServer'

import FormikForm from '../components/from/formikForm'
import FormikInput from '../components/from/formikInput'
import SubmitButton from '../components/from/submitButton'


const validationSchema = Yup.object().shape({
    days: Yup.number().label("Days").min(3).required()
})
const Rent = () => {
    const nav = useNavigate()
    const {id} = useParams() 
    const {data:car} = useOneCar(id)
    const {user} = useCurrentUser()

    const rentCar = async (value) =>{
        await create(value,user._id,id)
    }
    const rent = async (value) =>{
        try {
            await rentCar(value)
            modalCenter('success','Thanks')
            nav('/cars')
        } catch (ex) {
            toastError("Can't rent another car")
        }
    }
    const handleFormSubmit = async (value) =>{
        try {
            Swal.fire({
                icon: "question",
                title: "Confirm Rent",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: '#d33',
                confirmButtonText: "Yes, Rent !it"
              }).then((result) => {
                if (result.isConfirmed) {
                    rent(value)
                }
              })
        } catch (ex) {
            console.log(ex.message);
        }
    }

    return ( 
        <div className='mt-3' >
            {
                car &&
                <>
                <div className="bg-blue-400 border-l-4 border-blue-800 text-white p-4 mt-2 mx-96 my-5" role="alert">
                    <span className='text-lg'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste odit blanditiis sunt, velit neque corporis rerum hic illum eveniet eius eaque. Provident odio soluta delectus doloremque quae ipsum, in modi!
                    </span>
                </div>
                <div className='flex justify-center'>
                    <div className="w-full max-w-lg ">
                        <div className="bg-white shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4">
                            <h1 className='text-gray-500 text-center capitalize font-body font-light'>Rent <span className='font-bold'>{car.name}</span></h1>
                            <FormikForm
                                initialValues={{days: ''}}
                                onSubmit={value => handleFormSubmit(value)}
                                validationSchema={validationSchema}      
                            >
                                {({handleSubmit}) => (
                                    <form onSubmit={handleSubmit}>
                                        <FormikInput 
                                            lable="Number Of Days"
                                            name="days"
                                            type='number'
                                        />
                                        <SubmitButton  text="Rent" />
                                    </form>
                                )}
                            </FormikForm>
                        </div>
                    </div>
                </div>
                </>
            }
        </div>
     );
}
 
export default Rent;