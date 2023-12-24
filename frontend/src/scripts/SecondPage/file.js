import React, { useEffect, useRef, useState } from "react"
import "./file.css"
import pic1 from "./1.svg"
import pic2 from "./Document.png"

function InputFile(props) {
    const [data, setData] = useState(null)
    const [binUrl, setBinUrl] = useState(null)
    const [pdfUrl, setPdfUrl] = useState(null);
    const [style, setStyle] = useState("btn")
    const [index, setIndex] = useState(0)
    const ref = useRef(null)
    const [style2, setStyle2] = useState("hide")
    const [style3, setStyle3] = useState("hide")

    const mass = ['http://127.0.0.1:8000/upload_file/auto', 'http://127.0.0.1:8000/upload_file/snils', 'http://127.0.0.1:8000/upload_file/document']

    function ShowFile(event) {
        setData(event.target.files[0])
        console.log(props.index)
        console.log(event.target.files[0])
        setPdfUrl(null)
        const tmp = event.target.files[0].type
        switch(tmp) {
            case "application/pdf": setIndex(0);
                ref.current.disabled = false
                setStyle3("hide")
                setStyle("btn2")
                break;
            case "image/png": setIndex(1);
                setStyle3("hide")
                ref.current.disabled = false
                setStyle("btn2")
                break;
            case "image/jpeg": setIndex(1);
                setStyle3("hide")
                ref.current.disabled = false
                setStyle("btn2")
                break;
            case "image/jpg": setIndex(1);
                setStyle3("hide")
                ref.current.disabled = false
                setStyle("btn2")
                break;
            case "application/vnd.openxmlformats-officedocument.wordprocessingml.document": setIndex(2);
                setStyle3("hide")
                ref.current.disabled = false
                setStyle("btn2")
                break;
            default: 
                    setStyle3("show2")
                    setStyle2("btn")
                    ref.current.disabled = true
                break;

        }
    }

    const SubmitFrom = async (event) => {
        event.preventDefault()
        const formData = new FormData()
        formData.append('file_upload', data)
        try {
            if(props.index >= 0) {
                ref.current.disabled = false
                setStyle2("hide")
                const endpoint = mass[props.index]
                await fetch(endpoint, {
                    method: 'POST',
                    headers: {
                        'Access-Control-Allow-Credentials': true
                    },
                    body: formData
                }).then(response => response.blob())
                .then(blob => {
                  const url = new Blob([blob]);
                  setBinUrl(url);
                })
            } else {
                ref.current.disabled = true
                setStyle("btn")
                setStyle2("show")
            }
        } catch(error) {
            console.error(error)
        }

    }

    const file = useRef(null)

    const convertToPdf = () => {
        if (binUrl) {
          const reader = new FileReader();
          reader.onload = (e) => {
            const data = new Uint8Array(e.target.result);
            const blob = new Blob([data], { type: 'application/pdf' });
            const url = URL.createObjectURL(blob);
            setPdfUrl(url)
          };
          reader.readAsArrayBuffer(binUrl);
        }
      };
    
      const convertToPng = () => {
        if (binUrl) {
          const reader = new FileReader();
          reader.onload = (e) => {
            const data = new Uint8Array(e.target.result);
            const blob = new Blob([data], { type: 'image/png' });
            const url = URL.createObjectURL(blob);
            setPdfUrl(url)
          };
          reader.readAsArrayBuffer(binUrl);
        }
      };

      const convertToDocx = () => {
        if (binUrl) {
          const reader = new FileReader();
          reader.onload = (e) => {
            const data = new Uint8Array(e.target.result);
            const blob = new Blob([data], { type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document" });
            const url = URL.createObjectURL(blob);
            setPdfUrl(url)
          };
          reader.readAsArrayBuffer(binUrl);
        }
      };      

      useEffect(() => {
        if(index == 0) {
            convertToPdf()
        } else if (index == 1) {
            convertToPng()
        } else {
            convertToDocx()
        }
    }, [binUrl])

    return(
        <div className="blockFile">
            <form onSubmit={SubmitFrom}>
                <input className="fileInput" type="file" onChange={ShowFile} id="fileInput" ref={file}/>
                <label for="fileInput" className="FileLabel" onClick={() => {file.current.focus()}}>Добавить файл</label>
                <button type="submit" className={style} ref={ref}>Загрузить файл</button>
            </form>
            <div className={style2}>Выберите тип документа</div>
            <div className={style3}>Не правильный формат</div>
            {pdfUrl && 
                <a href={pdfUrl} download="file23">
                    <div className="getData">
                    <div className="imgLoad1"></div>
                    <p className="downloadTxt">Загрузить ответ сервера</p>
                    <div className="imgLoad2"></div>
                    </div>
                </a>
            }

            

        </div>
    )
}

export default InputFile