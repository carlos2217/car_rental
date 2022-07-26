import { Link, NavLink } from 'react-router-dom';

const NavBarComponets = ({user}) => {
    
    const logout = () =>{
        localStorage.removeItem('token')
        localStorage.removeItem('loged')
        window.location.replace('/')
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <a className="navbar-brand" >Navbar</a>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
                        </li>
                        {
                            user &&
                            <li className="nav-item">
                                <NavLink className="nav-link" to='/dashboard' >Dashboard</NavLink>
                            </li>
                        }
                        {
                            user && user.admin &&
                            <li className="nav-item">
                                <NavLink className="nav-link" to='/admin' >Admin</NavLink>
                            </li>
                        }
                    </ul>
                <div className="d-flex">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {
                            user && 
                            <>
                                <li className="nav-item">
                                    <a className="nav-link disable">{user.name}</a>
                                </li>
                                <li className="nav-item">
                                    <a onClick={logout} className="nav-link disable">Logout</a>
                                </li>
                            </>
                        }
                        {
                            !user && 
                            <>
                                <li className="nav-item">
                                    <Link to='/login' className="nav-link ">login</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/register' className="nav-link ">register</Link>
                                </li>
                            </>
                        }
                    </ul>
                </div>
                </div>
            </div>
        </nav>
     );
}
 
export default NavBarComponets;