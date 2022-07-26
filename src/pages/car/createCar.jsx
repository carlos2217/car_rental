import * as Yup from 'yup'

import { toastError } from '../../notifications/toast'
import { modalCenter } from '../../notifications/swal'

import { create } from '../../server/carServer'

import FormikForm from "../../components/from/formikForm";
import FormikInput from '../../components/from/formikInput';
import SubmitButton from '../../components/from/submitButton';
import FormikImageUplaod from '../../components/from/formikImageUplaod';

const validationSchema = Yup.object().shape({
    name: Yup.string().label("Name").required(),
    model: Yup.string().label("Model").required(),
    color: Yup.string().label("Color").required(),
    price: Yup.number().label("price").min(2).required(),
})

const CreateCar = () => {
    const handleFormSubmit = async (value) =>{
        console.log(value);
        try {
            const res = await create(value)
            console.log(res);
            modalCenter('success',`${value.name} Created Successfyl`)
            window.location.replace('/admin/admin/car')
        } catch (ex) {
            toastError(ex.message)
        }
    }
    return ( 
        
        <div className='flex justify-center'>
            <div className="w-full max-w-lg ">
                <div className="bg-white shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4">
            <h1 className='text-gray-500 text-center capitalize font-body font-light'>add Car</h1>
            <FormikForm
                initialValues={{name: '',model: '',city: '',color: '',price: ''}}
                validationSchema={validationSchema}
                onSubmit={value => handleFormSubmit(value)}
            >
                {({handleSubmit}) => (
                    <form onSubmit={handleSubmit} >
                        <div className="row">
                            <div className="col-md-6">
                                <FormikInput
                                    lable="Name"
                                    name="name"
                                />
                            </div>
                            <div className="col-md-6">
                                <FormikInput
                                    lable="Model"
                                    name="model"
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <FormikInput
                                    lable="city"
                                    name="city"
                                    type="text"
                                />
                            </div>
                            <div className='col'>
                                <FormikInput
                                    lable="Rental Price Per Day"
                                    name="price"
                                    type='number'
                                />  
                            </div>
                        </div> 
                        <FormikInput
                            lable="color"
                            name="color"
                            type='color'
                        />  
                        <SubmitButton text="Save" />
                    </form>
                )}
            </FormikForm>
                </div>
            </div>
        </div>
     );
}
 
export default CreateCar;