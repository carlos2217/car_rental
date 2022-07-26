import useAllCars from '../../hooks/useAllCars'

import Loading from '../../components/loading'
import ErrorMesssage from '../../components/from/errorMessage';
import CarTable from '../../components/table/carTable';

const AllCars = () => {
    const columns =[
        {lable: "name"},
        {lable: "modle"},
        {lable: "city"},
        {lable: "price"},
        {lable: "rented"},
    ]
    const {data: cars,error,load} = useAllCars()
    return ( 
       <div>
            {
                load && <Loading color='white'/>
            }
            {
                error && <ErrorMesssage message={error} />
            }
            {
                cars && 
                <>
                    <CarTable columns={columns} cars={cars}/>
                </>
            }
       </div>
     );
}
 
export default AllCars;