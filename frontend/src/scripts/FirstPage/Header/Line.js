import React, { useContext, useEffect, useState } from "react";

function Line() {
    const [index, setIndex] = useState(0)

    const mass = ['show', 'hide'];

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((index + 1) % 2);
          }, 500);
      
          return () => clearInterval(interval);
    }, [index])

    return(
        <div className="Pic">
            <div className={mass[index]}></div>
        </div>
    )
}

export default Line