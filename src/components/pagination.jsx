import _ from 'lodash'
// import PropTypes from 'prop-types'

const Pagination = ({itemCount,pageSize,onChange,currentPage}) => {

    const pageCount = Math.ceil(itemCount / pageSize)
    const pages =_.range(1,pageCount+1)
    
    if(pages == 1) return null
    return ( 
        <nav aria-label="Page navigation example bg-red-900">
            <ul className="pagination justify-content-center">
                <li className="page-item disabled">
                    <a className="page-link">Previous</a>
                </li>
                {pages.map((page) =>(
                    <li key={page} className={page === currentPage ? "page-item active" : "page-item" }>
                        <a className="page-link" onClick={() => onChange(page)}>{page}</a>
                    </li>
                ))}
                <li className="page-item">
                    <a className="page-link" href="#">Next</a>
                </li>
            </ul>
        </nav>
     );
}
 
// Pagination.propTypes={
//     itemCount: PropTypes.number.isRequired,
//     pageSize: PropTypes.number.isRequired,
//     currentPage: PropTypes.number.isRequired,
//     onChange: PropTypes.func.isRequired,

// }

export default Pagination;