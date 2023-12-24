import React from "react";
import "./SecondBlockStyles.css"
import ChangeTxt from "./ChangeText";
import BgVideo from "./Bg.mp4"

function SecondBlock() {
    return(
        <div className="SecondBlock"> 
            <div className="gif">
                <video src={BgVideo} autoPlay loop className="video"/>
            </div>        
            <p className="ConstTxt">ОБЕЗЛИЧИВАЙТЕ</p>
            <ChangeTxt />
        </div>
    )
}

export default SecondBlock