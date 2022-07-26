import {useFormikContext} from 'formik'

const SubmitButton = ({text}) => {
    const {isSubmitting} = useFormikContext()
    if(!isSubmitting) return <button type="submit"  className=" d-flex justify-content-center btn btn-primary mt-3">{text}</button>
    return (
        <button className=" d-flex justify-content-center btn btn-primary mt-3" type="button" disabled>
            <span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
            Loading...
        </button>
    )
}

export default SubmitButton;    