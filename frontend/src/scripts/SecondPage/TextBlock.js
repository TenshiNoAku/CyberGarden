import React from "react";
import "./SeconPageStyles.css"

function TextBlock(props) {
    const func = props.func

    return(
        <div className="FilesTxt">
            <p className="types">Выберите тип документа</p>
            <div className="formBlock">
                <div className="radioBlock">
                    <input type="radio" name="FileType" id="pasport" className="radio" onClick={() => func(0)}/>
                    <label for="pasport" className="radioLable">Водительские права</label>
                </div>
                <div className="radioBlock">
                    <input type="radio" name="FileType" id="snils" className="radio" onClick={() => func(1)}/>
                    <label for="snils" className="radioLable">Снилс</label>
                </div>
                <div className="radioBlock">
                    <input type="radio" name="FileType" id="doc" className="radio" onClick={() => func(2)}/>
                    <label for="doc" className="radioLable">Договора</label>
                </div>
            </div>
        </div>
    )
}

export default TextBlock