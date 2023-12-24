import React, { useContext, useRef, useState } from "react";
import "./ThirdBlockStyles.css"
import BlockText from "./BlockText";
import ExampleHide from "./ExampleHide";
import pic1 from "./User1.png"
import pic2 from "./ 1.png"
import TextBlock from "./TextBlock"
import { Context3 } from "../FirstPage";

const Context = React.createContext(null)

function ThridBlock() {
    const [flaf, setFlag] = useState(0)
    const ref1 = useRef(null)
    const ref2 = useRef(null)
    const [style, setStyle] = useState("CircleUp")
    const ref = useContext(Context3)
    const [tmp, setTmp] = useState(0)

    function Click1() {
        setTmp(0)
        setStyle("CircleUp")
    }

    function Click2() {
        setTmp(1)
        setStyle("CircleDown")
    }

    return(
        <div className="ThridBlock" ref={ref}>
            <BlockText />
            <Context.Provider value={tmp}>
                <ExampleHide />
            </Context.Provider>
            <div className="TwoButtons">
                <div className={style}></div>
                <div className="Data" ref={ref1} onClick={Click1}>
                    <img className="picData" src={pic1}/>
                </div>
                <div className="Data2" ref={ref2} onClick={Click2}>
                    <img className="picData" src={pic2}/>
                </div>
            </div>
            <TextBlock />
        </div>
    )
}

export {ThridBlock, Context}