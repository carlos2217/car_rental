import * as Yup from 'yup'
import React from 'react';
import Moment from 'moment';
import _ from 'lodash';

import { toastError } from '../notifications/toast'
import { modalCenter } from '../notifications/swal'

import { update } from '../server/lineseServer'

import FormikForm from '../components/from/formikForm';
import FormikInput from '../components/from/formikInput';
import SubmitButton from '../components/from/submitButton';
import ErrorMesssage from '../components/from/errorMessage';

const validationSchema = Yup.object().shape({
    number: Yup.string().label("Linese Number").required(),
    issueData: Yup.date().label("Issued Date").required(),
    expiredDate: Yup.date().label("expired Data").required(),
})
function LinsesUpdate({linese}) {
    const handleFormSubmit = async (value) =>{
        try {
            await update(_.omit(value,['_id','__v','user']))
            modalCenter('success','linese Updated Successful')
            window.location.reload()
        } catch (ex) {
            toastError(ex.message)
        }
    }
    return (
        <div className='flex justify-center'>
            <div className="w-full max-w-lg ">
                <div className="bg-white shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4">
                    <h1 className='text-gray-500 text-center capitalize font-body font-light'>Update Lineses</h1>
                    {
                        !linese && <ErrorMesssage message={"Someting went wrong"} />
                    }
                    {
                        linese &&
                        <FormikForm
                        initialValues={linese}
                        onSubmit={value => handleFormSubmit(value)}
                        validationSchema={validationSchema}
                        
                    >
                        {({handleSubmit}) => (
                            <form onSubmit={handleSubmit}>
                                <FormikInput 
                                    name='number'
                                    lable="Lineses Number"
                                    type='text'
                                    disabled={true}
                                />
                                <FormikInput 
                                    name='issueData'
                                    lable="Data Of Issues"
                                    type='date'
                                />
                                    <p>Current Issue Date: {Moment(linese.issueData).format('DD-MM-YYYY')}</p>
                                <FormikInput 
                                    name='expiredDate'
                                    lable="Data Of Expired"
                                    type='date'
                                />
                                    <p>Current Expire Date: {Moment(linese.expiredDate).format('DD-MM-YYYY')}</p>
                                <SubmitButton text="Create" />
                            </form>
                        )}
                        </FormikForm>
                    }
                </div>
            </div>
        </div>
    );
}

export default LinsesUpdate