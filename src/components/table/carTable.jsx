import { useState } from 'react';
import { Link } from 'react-router-dom';
import Pag from '../Pag';

import {RendPaginations} from '../../util/RendPaginations'

const CarTable = ({columns,cars}) => {
    // const [currentPage, setCurrentPage] = useState(0)
    // const pageSize = 2
    // const handleChange = (num) => setCurrentPage(num)
    // const pagin = RendPaginations(cars,pageSize,currentPage)
    return ( 
      <div className='bg-white m-2 p-2 rounded-xl flex flex-col items-center'>
        <table className='table text-center'>
          <thead className='thead-dark'>
            <tr>
              {
                columns.map(column => <th key={column.lable}>{column.lable}</th>)
              }
            </tr>
          </thead>
          <tbody>
            {
              cars.map(car => (
                <tr key={car._id}>
                  <td>
                    <Link to={`/${car._id}/car/details`} >{car.name}</Link>
                  </td>
                  <td>{car.model}</td>
                  <td>{car.city}</td>
                  <td>${car.price}</td>
                  <td>{car.rented ? "True" : "False"}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
          {/* <Pag currentPage={currentPage} onChange={handleChange} itemCount={cars.length} pageSize={pageSize}/> */}
      </div>
     );
}
 
export default CarTable;