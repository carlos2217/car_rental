import { useFormikContext } from "formik";
import ErrorMesssage from "./errorMessage";
const FormikTextearaInput = ({name,lable,rows,cols}) => {
    const {handleChange,errors,touched,values} = useFormikContext()
    return ( 
        <div className="form-group">
            {lable && <label>{lable}</label>}
            <textarea className='form-control' rows={rows} cols={cols} onChange={handleChange} name={name} value={values[name]} ></textarea>
            {errors[name] && touched[name] && <ErrorMesssage message={errors[name]} />}
        </div>
     );
}
 
FormikTextearaInput.defaultProps = {
    label: 'Lable',
    cols: 10,
    rows: 10
}
export default FormikTextearaInput;