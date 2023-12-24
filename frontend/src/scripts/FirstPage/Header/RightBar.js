import React, { useContext } from "react";
import "./Header.css"
import { MyContext } from "../../Main";

function RightBar() {

    const func = useContext(MyContext)

    function HidePage() {
        func(1)
    }

    return(
        <div className="RightBar" onClick={HidePage}>
            Обезличить
        </div>
    )
}

export default RightBar