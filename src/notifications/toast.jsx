import { toast } from 'react-toastify'

const toastError = (message) =>{
    toast.error(message)
}
const toastSuccess = (message) =>{
    toast.success(message)
}
const toastInfo = (message) =>{
    toast.info(message)
}
const toastWarning = (message) =>{
    toast.warning(message)
}
const toastDarkg = (message) =>{
    toast.dark(message)
}

export {
    toastError,
    toastSuccess,
    toastInfo,
    toastWarning,
    toastDarkg,
}