import React, { useContext } from "react";
import Txt from "./Txt";
import "./Header.css"
import { Context1, Context2,  Context5, Context6} from "../FirstPage";

function CentralBar() {
    const func1 = useContext(Context1)
    const func2 = useContext(Context2)
    const tmp1 = useContext(Context5)
    const tmp2 = useContext(Context6)

    return(
        <div className="CentralBar">
            <Txt func={func1} value={tmp1} text={'О программе'}/>
            <Txt func={func2} value={tmp2} text={'О нас'}/>
        </div>
    )
}

export default CentralBar