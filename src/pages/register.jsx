import React from 'react';
import * as Yup from 'yup'
import {useNavigate} from 'react-router-dom'

import { register } from '../server/userService'
import {toastError} from '../notifications/toast'
import {modalCenter} from '../notifications/swal'

import SubmitButton from '../components/from/submitButton'
import FormikForms from '../components/from/formikForm'
import FormikInput from '../components/from/formikInput';

function Register() {
    const nav = useNavigate()
    const validationSchema = Yup.object().shape({
        name: Yup.string().label("Name").max(255).required(),
        email: Yup.string().label("Email").email().max(255).required(),
        password: Yup.string().label("Password").max(255).required(),
        phoneNumber: Yup.string().label("Phone Number").min(8).max(15).required(),
        address: Yup.string().label("Address").max(255).required(),
        dob: Yup.date().label("Data Of Birth").required(),
    })
    const formSubmit = async (data) =>{
        try {
            await register(data)
            modalCenter('success','Your Registration went throw')
            // window.location('/loged')
            nav('/login') 
        } catch (ex) {
            toastError(`Email Is Already Registered`)
        }
    }
    return (
        <div className='flex justify-center'>
            <div className="w-full max-w-lg ">
                <div className="bg-white shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4">
                    <FormikForms
                            initialValues={{name: '',email: '',password: '',phoneNumber: '',address: '',dob: ''}}
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
                                        lable="Email"
                                        name='email'
                                        type='email'
                                    />
                                    <FormikInput 
                                        lable="Password"
                                        name='password'
                                        type='password'
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
                                    <FormikInput 
                                        lable="Date Of Birth"
                                        name='dob'
                                        type='date'
                                    />
                                    <div className="d-flex justify-content-center mt-3">
                                        <SubmitButton text="Register" />
                                    </div>
                            </form>
                            )}
                    </FormikForms>
                </div>
           </div>
        </div>
    );
}

export default Register;