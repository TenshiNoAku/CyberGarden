import React, { useRef, useState } from "react";
import "./ThirdBlockStyles.css"

function BlockText() {
    const ref1 = useRef(null)
    const ref3 = useRef(null)
    const ref2 = useRef(null)
    const [tmp,setTmp] = useState(0)

    function ShowText() {
        if(tmp == 0) {
            setTmp(1)
            ref1.current.classList.add('txt23')
            ref1.current.classList.remove('txt33')
            
            setInterval(() => {
                ref2.current.classList.add('txt23')
                ref2.current.classList.remove('txt33')
            }, 500)

            setInterval(() => {
                ref3.current.classList.add('txt23')
                ref3.current.classList.remove('txt33')
            }, 500)          
        }
    }

    return (
        <div className="Block22" onMouseEnter={ShowText}>
            <div className="txtBlock1">
                <p className="txt33" ref={ref1}>ЗАЧЕМ</p>
            </div>
            <div className="txtBlock2">
                <p className="txt33" ref={ref2}>НУЖНО</p>
            </div>
            <div className="txtBlock3">
                <p className="txt33 txtGap" ref={ref3}>ОБЕЗЛИЧИВАНИЕ?</p>
            </div>
        </div>
    )
}

export default BlockText

