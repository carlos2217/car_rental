import React from 'react';
import * as Yup from 'yup'

import { login } from '../server/userService'
import {toastError} from '../notifications/toast'
import {modalCenter} from '../notifications/swal'

import SubmitButton from '../components/from/submitButton'
import FormikForms from '../components/from/formikForm'
import FormikInput from '../components/from/formikInput';

function Login() {
    const validationSchema = Yup.object().shape({
        email: Yup.string().label("Email").email().max(255).required(),
        password: Yup.string().label("Password").max(255).required(),
    })
    const formSubmit = async (data) =>{
        try {
            const res = await login(data)
            localStorage.setItem('token',res.headers['x-token'])
            localStorage.setItem('loged',true)
            modalCenter('success','Loged In Successful')
            window.location.replace('/')
        } catch (ex) {
            toastError('User Name Or Password Is Unvalid')
            console.log(ex.message);
        }
    }
    return (
        <div className='flex justify-center'>
            <div className="w-full max-w-lg ">
                <div className="bg-white shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4">
                    <FormikForms
                            initialValues={{email: '',password: ''}}
                            onSubmit={value => formSubmit(value)}
                            validationSchema={validationSchema}
                        >
                            {({handleSubmit}) => (
                            <form onSubmit={handleSubmit}>
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
                                    <div className="d-flex justify-content-center mt-3">
                                        <SubmitButton text="Login" />
                                    </div>
                            </form>
                            )}
                    </FormikForms>
                </div>
            </div>
        </div>
    );
}

export default Login;