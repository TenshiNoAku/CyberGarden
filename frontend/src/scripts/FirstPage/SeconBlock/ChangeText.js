import React, { useEffect, useState, useRef } from "react";
import "./SecondBlockStyles.css"

function ChangeTxt() {
    const ref = useRef(null);

    useEffect(() => {
        const interval = setInterval(() => {
            ref.current.classList.add('white_red')
          }, 5500);
      
        return () => clearInterval(interval);
    }, [])

    return(
        <ul className="txtBlock">
            <div className="block">
                <li className="white">ПАСПОРТ</li>
                <li className="white">СНИЛС</li>
                <li className="white">ВОДИТЕЛЬСКИЕ ПРАВА</li>
                <li className="white">ДОКУМЕНТЫ</li>
                <li className="white" ref={ref}>ЧТО УГОДНО</li>
            </div>
        </ul>
    )

}

export default ChangeTxt