import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as Yup from 'yup'
import _ from 'lodash'

import {oneUser,update} from '../server/userService'

import FormikForm from '../components/from/formikForm';
import FormikInput from '../components/from/formikInput';
import SubmitButton from '../components/from/submitButton';

import {modalCenter} from '../notifications/swal'
import {toastError} from '../notifications/toast'

const validationSchema = Yup.object().shape({
    name: Yup.string().label("Name").max(255).required(),
    email: Yup.string().label("Email").email().max(255).required(),
    phoneNumber: Yup.string().label("Phone Number").min(8).max(15).required(),
    address: Yup.string().label("Address").max(255).required(),
})

function EditUser(props) {
    const {id} = useParams()
    const [user, setUser] = useState(null)
    const getUser = async () =>{
        try {
            const {data: user} = await oneUser(id)
            setUser(user.user)
        } catch (ex) {
            console.log(ex.message);
        }
    }

    const formSubmit = async (value) =>{
        try {
            try {
                await update(id,_.omit(value,['_id','__v','admin']))
                modalCenter('success','linese Updated Successful')
                window.location.reload()
            } catch (ex) {
                toastError(ex.message)
            }
        } catch (ex) {
            console.log(ex.message);
        }
    }

    useEffect(() => {
        getUser()
    }, [])
    
    return (
        <>
            {
                user &&
                <div className='flex justify-center'>
                    <div className="w-full max-w-lg ">
                        <div className="bg-white shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4">
                            <FormikForm
                                    initialValues={user}
                                    onSubmit={value => formSubmit(value)}
                                    validationSchema={validationSchema}
                                >
                                    {({handleSubmit}) => (
                                    <form onSubmit={handleSubmit}>
                                            <FormikInput 
                                                lable="User Name"
                                                name='name'
                                                type='text'
                                            />
                                            <FormikInput 
                                                lable="Phone Number"
                                                name='phoneNumber'
                                                type='text'
                                            />
                                            <FormikInput 
                                                lable="Address"
                                                name='address'
                                                type='text'
                                            />
                                            <div className="d-flex justify-content-center mt-3">
                                                <SubmitButton text="Update" />
                                            </div>
                                    </form>
                                    )}
                            </FormikForm>
                        </div>
                </div>
                </div>
            }
        </>
        
    );
}

export default EditUser;