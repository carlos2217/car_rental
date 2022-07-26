import {Link} from 'react-router-dom'

const SimpleCard = ({data: cars,linese,loged}) => {
    const footer = (id) =>{
        if(!loged){
            return(
                <div className="py-3 px-6 border-t border-gray-300 text-gray-600">
                    <span className='mr-1 font-body text-gray-600 text-lg'>
                        Login Or Register
                    </span> 
                </div>
            ) 
        }else if(loged && !linese){
            return(
                <div className="py-3 px-6 border-t border-gray-300 text-gray-600">
                    <span className='mr-1 font-body text-gray-600 text-lg'>Your Need To Add Your Linese First</span>
                    <Link to='/dashboard/dashboard/create'  type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Click here</Link>
                </div>
            )
        }
        return(
            <div className="py-3 px-6 border-t border-gray-300 text-gray-600">
                <Link to={`/rent/${id}`} type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Rent Car</Link>
            </div>
        )
    }
    return ( 
        <div className=''>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 p-5" >
                    {
                        cars.map(car => (
                            <div key={car._id} className="rounded-lg shadow-lg bg-white max-w-sm text-center mb-2">
                                <div className="py-3 px-6 border-b border-gray-300 font-body text-lg font-semibold text-gray-500">
                                    {car.model}
                                </div>
                                <div className="grid grid-cols-2">
                                    <div className="p-6">
                                        <h5 className="text-gray-500 text-xl font-medium mb-2 font-body ">{car.name}</h5>
                                        <p className="text-blue-500 text-lg font-bold mb-4">${car.price}</p>
                                    </div>
                                    <div className="p-6 flex flex-col justify-center items-center">
                                        <h5 className="text-gray-500 text-xl font-medium mb-2 font-body">color</h5>
                                        <div className="w-14 h-14 rounded-full" style={{backgroundColor:car.color}}></div>
                                    </div>

                                </div>
                                {footer(car._id)}
                            </div>
                        ))
                    }
            </div>
        </div>
     );
}
 
export default SimpleCard;