import { useFormikContext } from "formik";
import ErrorMesssage from "./errorMessage";
const FormikInput = ({lable,name,type,placeholder,autoComplete,autoCapitalize,disabled}) => {
    const {handleChange,handleBlur,values,errors,touched} = useFormikContext()
    return ( 
        <div className="form-group mt-3">
            {lable && <label className="font-light text-gray-500 text-lg capitalize" >{lable}</label>}
            <input 
                disabled={disabled}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values[name]}
                name={name}
                type={type}
                placeholder={placeholder !== "" ? placeholder : ''}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                autoComplete={autoComplete}
                autoCapitalize={autoCapitalize}
            />
            {errors[name] && touched[name] && <ErrorMesssage message={errors[name]} />}
        </div>
     );
}
FormikInput.defaultProps = {
    label: 'Lable',
    type:'text',
    name: 'lable',
    autoComplete: "off",
    autoCapitalize: "off",
    disabled: false
}
export default FormikInput;