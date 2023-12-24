import React, { createContext, useState } from "react";
import {FirstPage} from "./FirstPage/FirstPage";
import SecondPage from "./SecondPage/SecondPage";
const MyContext = React.createContext(0);

function Main(props) {

    const [value, setValue] = useState(0)

    console.log(value)

    if(value == 0) {
        return(
            <MyContext.Provider value={setValue}>
                <FirstPage />
            </MyContext.Provider>
        )
    } else if (value == 1) {
        return(
            <MyContext.Provider value={setValue}>
                <SecondPage />
            </MyContext.Provider>
        )
    }
}

export {Main, MyContext}