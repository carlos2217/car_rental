import {useFormikContext} from 'formik'
const FormikSelectInput = ({lable,name,options,multiple}) => {
    const {values,handleChange} = useFormikContext()
    return ( 
        <div className="form-group">
                {lable && <label>{lable}</label>}
                <select 
                    multiple={multiple}
                    className="form-control" 
                    name={name}
                    onChange={handleChange}
                    value={values[name]}
                >
                    {
                        options.map(option => <option key={option.id} value={option.name}>{option.name}</option> )
                    }
            </select>
        </div>
     );
}
 
export default FormikSelectInput;