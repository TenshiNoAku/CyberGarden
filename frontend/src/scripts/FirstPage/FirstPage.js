import React, { useEffect, useRef, useState } from "react";
import Header from "./Header/Header"
import SecondBlock from "./SeconBlock/SecondBlock";
import {ThridBlock} from "./ThridBlock/ThridBlock";
import Block4 from "./FouthBlock/Block4";
import Block5 from "./FifthBlock/Block5";
import Block6 from "./SixthBlock/Block6";
import Block7 from "./SeventhBlock/Block7";
import "./FirstPageStyles.css"

const Context1 = React.createContext('')
const Context2 = React.createContext('')
const Context3 = React.createContext('')
const Context4 = React.createContext('')
const Context5 = React.createContext('')
const Context6 = React.createContext('')

function FirstPage() {
    const [tmp1, SetTmp1] = useState(0)
    const [tmp2, SetTmp2] = useState(0)
    const [tmp1Prev, SetTmp1Prev] = useState(0)
    const [tmp2Prev, SetTmp2Prev] = useState(0)

    const ref1 = useRef(null)
    const ref2 = useRef(null)

    useEffect(() => {
        if(tmp1 > tmp1Prev) {
            SetTmp1Prev(tmp1Prev + 1)
            ref1.current.scrollIntoView({block: "center", behavior: "smooth"})
        }
        if(tmp2 > tmp2Prev) {
            SetTmp2Prev(tmp2Prev + 1)
            ref2.current.scrollIntoView({block: "center", behavior: "smooth"})
        }
    }, [tmp1, tmp2])

    return(
        <div className="main">
            <Context5.Provider value={tmp1}>
                <Context6.Provider value={tmp2}>
                    <Context1.Provider value={SetTmp1}>
                        <Context2.Provider value={SetTmp2}>
                            <Header />
                        </Context2.Provider>
                    </Context1.Provider>
                </Context6.Provider>
            </Context5.Provider>
            <SecondBlock />
            <Block4 />
            <Context3.Provider value={ref1}>
                <ThridBlock />
            </Context3.Provider>
            <Block5 />
            <Context4.Provider value={ref2}>
                <Block6 />
            </Context4.Provider>
            <Block7 />
        </div>
    )
}

export {FirstPage, Context1, Context2, Context3, Context4, Context5, Context6}