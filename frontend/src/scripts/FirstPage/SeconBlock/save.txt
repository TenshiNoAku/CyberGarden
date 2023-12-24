import React, { useEffect, useState } from "react";
import "./SecondBlockStyles.css"

function ChangeTxt() {
    const [contentIndex, setContentIndex] = useState(0)
    

    const mass = [{content: 'ПАСПОРТ', color: 'white'}, {content: 'СНИЛС', color: 'white'},
    {content: 'ВОДИТЕЛЬСКИЕ ПРАВА', color: 'white'}, {content: 'ДОКУМЕНТЫ', color: 'white'}, {content: 'ЧТО УГОДНО', color: 'white_red'}]

    useEffect(() => {
        if(contentIndex < 4) {
            const interval = setInterval(() => {
                setContentIndex((contentIndex + 1) % 5);
              }, 2000);
          
              return () => clearInterval(interval);
        }
      
    }, [contentIndex])

    return(
        <p className={mass[contentIndex].color}> <br/> {mass[contentIndex].content}</p>
    )

}

export default ChangeTxt