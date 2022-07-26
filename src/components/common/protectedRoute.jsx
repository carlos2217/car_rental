import { Navigate } from 'react-router-dom'
const ProtectedRoute = ({loged,children}) => {
    if(!loged) return <Navigate to='/login' replace />
    return children
}
 
export default ProtectedRoute;