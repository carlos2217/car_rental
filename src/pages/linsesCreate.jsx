import React from 'react';
import * as Yup from 'yup'

import { toastError } from '../notifications/toast'
import { modalCenter } from '../notifications/swal'

import { create } from '../server/lineseServer'

import FormikForm from '../components/from/formikForm';
import FormikInput from '../components/from/formikInput';
import SubmitButton from '../components/from/submitButton';

const validationSchema = Yup.object().shape({
    number: Yup.string().label("Linese Number").required(),
    issueData: Yup.date().label("Issued Date").required(),
    expiredDate: Yup.date().label("expired Data").required(),
})
function LinsesCreate() {
    const handleFormSubmit = async (value) =>{
        try {
            await create(value)
            modalCenter('success',`Linese Created Successfyl`)
            window.location.replace('/dashboard/dashboard/update')
        } catch (ex) {
            toastError(ex.message)
            console.log(ex.message);
        }
    }
    return (
        <div className='flex justify-center'>
            <div className="w-full max-w-lg ">
                <div className="bg-white shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4">
                    <h1 className='text-gray-500 text-center capitalize font-body font-light'>add Lineses</h1>
                    <FormikForm
                        initialValues={{number: "",issueData: "",expiredDate: ""}}
                        onSubmit={(value) => handleFormSubmit(value)}
                        validationSchema={validationSchema}
                    >
                        {({handleSubmit}) => (
                            <form onSubmit={handleSubmit}>
                                <FormikInput 
                                    name='number'
                                    lable="Lineses Number"
                                    type='text'
                                />
                                <FormikInput 
                                    name='issueData'
                                    lable="Data Of Issues"
                                    type='date'
                                />
                                <FormikInput 
                                    name='expiredDate'
                                    lable="Data Of Expired"
                                    type='date'
                                />
                                <SubmitButton text="Create" />
                            </form>
                        )}
                    </FormikForm>
                </div>
            </div>
        </div>
    );
}

export default LinsesCreate;