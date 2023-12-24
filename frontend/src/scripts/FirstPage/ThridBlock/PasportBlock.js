import React, {useContext, useEffect, useRef, useState} from "react";
import "./Example.css"
import pic1 from "./Person.svg"
import { Context } from "./ThridBlock";

function PasportBlock() {
    const ref1 = useRef(null)
    const ref2 = useRef(null)
    const ref3 = useRef(null)
    const ref4 = useRef(null)
    const ref5 = useRef(null)
    const ref6 = useRef(null)
    const tmp = useContext(Context)

    useEffect(() => {
        if(tmp == 0) {
            if(ref1.current.classList.contains("PersonInfoText3")) {
                ref1.current.classList.remove("PersonInfoText3")
            }
            ref1.current.classList.add("PersonInfoText")
            if(ref2.current.classList.contains("PersonInfoText3")) {
                ref2.current.classList.remove("PersonInfoText3")
            }
            ref2.current.classList.add("PersonInfoText")
            if(ref3.current.classList.contains("PersonInfoText3")) {
                ref3.current.classList.remove("PersonInfoText3")
            }
            ref3.current.classList.add("PersonInfoText")
            if(ref4.current.classList.contains("PersonInfoText3")) {
                ref4.current.classList.remove("PersonInfoText3")
            }
            ref4.current.classList.add("PersonInfoText")
            if(ref5.current.classList.contains("PersonInfoText3")) {
                ref5.current.classList.remove("PersonInfoText3")
            }
            ref5.current.classList.add("PersonInfoText")
            if(ref6.current.classList.contains("PersonInfoText3")) {
                ref6.current.classList.remove("PersonInfoText3")
            }
            ref6.current.classList.add("PersonInfoText")
        } else {
            if(ref1.current.classList.contains("PersonInfoText")) {
                ref1.current.classList.remove("PersonInfoText")
            }
            ref1.current.classList.add("PersonInfoText3")
            if(ref2.current.classList.contains("PersonInfoText")) {
                ref2.current.classList.remove("PersonInfoText")
            }
            ref2.current.classList.add("PersonInfoText3")
            if(ref3.current.classList.contains("PersonInfoText")) {
                ref3.current.classList.remove("PersonInfoText")
            }
            ref3.current.classList.add("PersonInfoText3")
            if(ref4.current.classList.contains("PersonInfoText")) {
                ref4.current.classList.remove("PersonInfoText")
            }
            ref4.current.classList.add("PersonInfoText3")
            if(ref5.current.classList.contains("PersonInfoText")) {
                ref5.current.classList.remove("PersonInfoText")
            }
            ref5.current.classList.add("PersonInfoText3")
            if(ref6.current.classList.contains("PersonInfoText")) {
                ref6.current.classList.remove("PersonInfoText")
            }
            ref6.current.classList.add("PersonInfoText3")
        }
    }, [tmp])

    
    return(
        <div className="PasportBlock">
                <div className="ImgBlock">
                    <img src={pic1} className="PicPerson" />
                </div>
                <div className="PersonInfoBlock">
                    <div className="PersonInfo">
                        <p className="PersonInfoText2">
                        фамилия
                        </p>
                        <p className="PersonInfoText" ref={ref1}>
                            ИВАНОВ  
                        </p>
                    </div>
                    <div className="PersonInfo">
                        <p className="PersonInfoText2">
                            имя
                        </p>
                        <p className="PersonInfoText" ref={ref2}>
                            ИВАН
                        </p>
                    </div>
                    <div className="PersonInfo">
                            <p className="PersonInfoText2">
                                отчество
                            </p>
                            <p className="PersonInfoText" ref={ref3}>
                                ИВАНОВИЧ
                            </p>
                    </div>
                    <div className="PersonInfo">
                        <p className="PersonInfoText2">
                            пол
                        </p>
                        <p className="PersonInfoText" ref={ref4}>
                            МУЖ
                        </p>
                    </div>
                    <div className="PersonInfo">
                        <p className="PersonInfoText2">
                            дата рождения
                        </p>
                        <p className="PersonInfoText" ref={ref5}>
                            2.2.2002
                        </p>
                    </div>
                    <div className="PersonInfo">
                        <p className="PersonInfoText2" >
                            место рождения
                        </p>
                        <p className="PersonInfoText" ref={ref6}>
                            ЕЙСК
                        </p>
                    </div>
                </div>
        </div>
    )
}

export default PasportBlock