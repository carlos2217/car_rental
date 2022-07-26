import { Formik } from 'formik';
const FormikForm = ({initialValues,validationSchema,onSubmit,children}) => {
    return ( 
        <div>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={value => onSubmit(value)}
            >
                {children}   
            </Formik>
        </div>
     );
} 
 
export default FormikForm;