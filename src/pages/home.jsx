import { Link } from 'react-router-dom';

import useAvailableCars from '../hooks/useAvailableCars'

function Home() {
    const { data: cars,error,load } = useAvailableCars()
    return (
        <div className='flex flex-col'>
            <div className="">
                <div className="max-w-full relative">
                    <img style={{height:"560px", width:"100%"}} className="object-cover" src="/pexels-mike-b-170811.jpg" alt="" />
                    <div className="absolute top-0  p-6 max-w-sm  rounded-lg shadow-md flex flex-col items-center ">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white text-center">Noteworthy technology acquisitions 2021</h5>
                        </a>
                        <p className="mb-3 text-lg leading-2 text-white font-bold dark:text-gray-400 text-center">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex nobis obcaecati deleniti autem quas eius iusto veniam modi qui, nulla cum. Repudiandae itaque obcaecati voluptas ratione vitae suscipit adipisci assumenda?    
                        </p>
                        <Link to="/cars" className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Find Car
                        </Link>
                    </div>
                </div>
            </div>
            <div className='grid lg:grid-cols-2'>
                <div className="w-full h-max overflow-hidden relative">
                    <img style={{height:"560px", width:"100%"}} className="object-cover hover:rotate-12 hover:scale-125 duration-700" src="/pexels-jeshootscom-13861.jpg" alt="" />
                    <div className="p-6 max-w-sm  rounded-lg shadow-md flex flex-col items-center absolute bottom-0 right-0">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white text-center">Noteworthy technology acquisitions 2021</h5>
                        </a>
                        <p className="mb-3 text-lg leading-2 text-white font-bold dark:text-gray-400 text-center">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex nobis obcaecati deleniti autem quas eius iusto veniam modi qui, nulla cum. Repudiandae itaque obcaecati voluptas ratione vitae suscipit adipisci assumenda?    
                        </p>
                    </div>
                </div>
                <div className="w-full overflow-hidden relative">
                    <img style={{height:"560px", width:"100%"}} className="object-cover hover:scale-125 duration-700 hover:ease-in-out" src="/pexels-sarmad-mughal-305070.jpg" alt="" />
                    <div className="p-6 max-w-sm  rounded-lg shadow-md flex flex-col items-center absolute top-0 left-0">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white text-center">Noteworthy technology acquisitions 2021</h5>
                        </a>
                        <p className="mb-3 text-lg leading-2 text-white font-bold dark:text-gray-400 text-center">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex nobis obcaecati deleniti autem quas eius iusto veniam modi qui, nulla cum. Repudiandae itaque obcaecati voluptas ratione vitae suscipit adipisci assumenda?    
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;