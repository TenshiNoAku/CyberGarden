import React, { useEffect, useState, useRef } from "react";
import "../styles/Range.css"

function Range(props) {
    const [rangeValue, setRangeValue] = useState(0)
    const range = useRef(null)

    function ShowRangeValue(e) {
        setRangeValue(e.target.value)
    }

    useEffect(() => {
        range.current.value = 0
    }, [])

    return(
        <div className="rangeBlock">
            <input type="range" className="RangeStyles" min={0} max={100} step={2} onInput={ShowRangeValue} ref={range}/>
            <p className="txt">Range value:{rangeValue}</p>
        </div>
    )
}

export default Range