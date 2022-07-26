import { Navigate } from 'react-router-dom'
const ProtectedRouteAdmin = ({loged,user,children}) => {
    if(!loged) return <Navigate to='/login' replace />
    if( user && !user.admin) return <Navigate to='/unauth' replace />
    return children
}
 
export default ProtectedRouteAdmin;