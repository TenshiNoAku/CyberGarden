import React, { useEffect, useState } from "react";
import "./Header.css"
import Pic from "./Pic";
import Line from "./Line";

function LeftBar() {
    const [value, setValue] = useState(0)
    const [flag, setFlag] = useState(false)
    const [flag2, setFlag2] = useState(false)
    const [tmp, setTmp] = useState(0);
    

    useEffect(() => {
        setTmp( (tmp + 1) % 28)
        if(tmp == 15) {
            setFlag2(true)
        } else if (tmp  == 0) {
            setFlag2(false)
        }

        if(value == 0) {
            setFlag(false)
        } else if (value == 5) {
            setFlag(true)
        }

        if(flag == false ) {
            const interval = setInterval(() => {
                setValue((value + 1));
              }, 1000);
          
              return () => clearInterval(interval);
        } else {
            const interval = setInterval(() => {
                setValue((value - 1));
              }, 500);
          
              return () => clearInterval(interval);
        }
    }, [value])

    return(
        <div className="LeftBar">
            <div className="PicsLine">
                <Pic value={value} figure={1} flag={flag2}/>
                <Pic value={value} figure={2} flag={flag2}/>
                <Pic value={value} figure={3} flag={flag2}/>
                <Pic value={value} figure={4} flag={flag2}/>
                <Pic value={value} figure={5} flag={flag2}/>
                <Line />
            </div>
            <p className="txt">DEPERSONALIZE IT!</p>
        </div>
    )
}

export default LeftBar