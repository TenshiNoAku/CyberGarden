import React, { useState } from "react";
import "./Block4Styles.css"
import BgVideo from "./Video.mp4"

function Block4() {
    const [style, setStyle] = useState('Txt4')
    const [tmp, setTmp] = useState(0)

    function ShowText() {
        if(tmp == 0) {
            setTmp(1)
            setStyle('Txt4Anime')
        }
    }

    return(
        <div className="Block4Styles" onMouseEnter={ShowText}>
            <div className="BlockPic4">
                <video src={BgVideo} autoPlay loop className="Block4Pic" />
            </div>
            <div className="Block4Txt">
                <p className={style}>СОХРАНЯЙТЕ КОНФИДЕНЦИАЛЬНОСТЬ <br /> ЖЕЛАЕМЫХ ДОКУМЕНТОВ</p>
            </div>
        </div>
    )
}

export default Block4