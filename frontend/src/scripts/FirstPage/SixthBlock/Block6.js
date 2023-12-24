import React, { useContext } from "react";
import "./Block6Styles.css"
import pic1 from "./1.png"
import pic2 from "./2.png"
import pic3 from "./3.png"
import { Context4 } from "../FirstPage";

function Block6() {
    const ref = useContext(Context4)

    return(
        <div className="Block6" ref={ref}>
            <p className="inscr1">МЫ — WEB GENIUS</p>
            <p className="inscr2">Молодая компания парней, которых собрал вместе хакатон</p>
            <div className="pics">
                <div className="elem">
                    <img className="ProgPic" src={pic3}/>
                    <p className="ProgName">МИХАИЛ</p>
                    <p className="ProgJob">front-end</p>
                    <a href="https://vk.com/professorrrrrrrrr" target="_blank">
                        <div className="vkpic"></div>
                    </a>
                </div>
                <div className="elem" >
                    <img className="ProgPic" src={pic1}/>
                    <p className="ProgName">ИВАН</p>
                    <p className="ProgJob">back-end</p>
                    <a href="https://vk.com/maybewhat" target="_blank">
                        <div className="vkpic"></div>
                    </a>
                </div>
                <div className="elem">
                    <img className="ProgPic" src={pic2}/>
                    <p className="ProgName">МИХАИЛ</p>
                    <p className="ProgJob">ui/ux designer</p>
                    <a href="https://vk.com/chalk_bro" target="_blank">
                        <div className="vkpic"></div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Block6