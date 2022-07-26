import React from 'react';
import { Link } from 'react-router-dom';

function TailNavBar({user}) { 
    const logout = () =>{
        localStorage.removeItem('token')
        localStorage.removeItem('loged')
        window.location.replace('/')
    }
    return (
        <div className="flex md:flex-row md:space-x-5 flex-col p-1 space-x-3 items-center  bg-gray-900">
            <div className="">
                <p className='text-3xl text-white font-light font-body uppercase'>car city</p>
            </div>
            <div className="flex  justify-center flex-1">
                {
                    user && user.admin &&
                    <Link to="/admin" type="button" className="tail-button">admin</Link>
                }
                <Link to="/" type="button" className="tail-button">Home</Link>
                <Link to="/cars" type="button" className="tail-button">Cars</Link>
            </div>
            <div className="flex justify-end">
                {
                    user &&
                    <>
                        <Link to="/profile" className="tail-button">{user.name}</Link>
                        <Link to="/dashboard" type="button" className="tail-button">dashboard</Link>
                        <button onClick={logout} type="button" className="log-register">logout</button>
                    </>
                }
                {
                    !user &&
                    <>
                        <Link to="/login" type="button" className="log-register">login</Link>
                        <Link to="/register" type="button" className="log-register">register</Link>
                    </>
                }
            </div>
        </div>
    );
}

export default TailNavBar;