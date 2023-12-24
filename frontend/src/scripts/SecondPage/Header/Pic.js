import React from "react";
import "./Header.css"
import pic from "./UserCopy.png"
import pic2 from "./AsteriskCopy.png"

function Pic(props) {

    if(props.value >= props.figure && props.flag == false) {
        return(
            <div className="Pic">
                <img className="Pict" src={pic} />
            </div>
        )
    } else if (props.value >= props.figure && props.flag == true) {
        return(
            <div className="Pic">
                <img className="Pict" src={pic2} />
            </div>
        )
    } else {
        <></>
    }

}

export default Pic