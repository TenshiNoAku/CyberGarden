import React, { useContext } from "react";
import "./Header.css"
import { MyContext } from "../../Main";

function RightBar() {

    const func = useContext(MyContext)

    function HidePage() {
        func(0)
    }

    return(
        <div className="RightBar" onClick={HidePage}>
            вернуться назад
        </div>
    )
}

export default RightBar