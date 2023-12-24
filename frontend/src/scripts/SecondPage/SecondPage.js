import React, {useState} from "react";
import "./SeconPageStyles.css"
import Header from "./Header/Header";
import TextBlock from "./TextBlock";
import InputFile from "./file"
import TextBlock2 from "./TextBlock2";

function SecondPage() {
        const [endpointIndex, setEndpointIndex] = useState(-1)

    return(
        <div className="SecondPage">
            <Header />
            <TextBlock func={setEndpointIndex}/>
            <InputFile index={endpointIndex} />
            <TextBlock2 />
        </div>
    )
}

export default SecondPage