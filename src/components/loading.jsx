import { Audio  } from  'react-loader-spinner'
const Loading = ({color='lightblue'}) => {
    return (
        <div className="d-flex justify-content-center">
            <Audio  height="100" width="100" color={color} ariaLabel='loading'/>
        </div>
    )
}
 
export default Loading;