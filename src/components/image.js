import React from 'react-dom'
import myimg from '../images/me.png'
function Image(props){
    return(
        <div className="myimage navbar-light bg-light" >
            <img src={myimg} className="img-fluid "/>
            
        </div>
    )
}
export default  Image