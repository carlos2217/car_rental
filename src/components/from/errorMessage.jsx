const ErrorMesssage = ({message}) => {
    if(!message) return null
    // return <div className="alert alert-danger mt-1" role="alert">{message}</div>
    return(
        <div className="bg-orange-100 border-l-4 border-red-500 text-red-900 p-2.5 mt-2" role="alert">
            <p>{message}</p>
        </div>
    )
}
 
export default ErrorMesssage;