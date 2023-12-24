import React from 'react'
import * as ReactDOMClient from "react-dom/client"
import {Main} from './scripts/Main'
import "./styles/index.css"
const root = ReactDOMClient.createRoot(document.getElementById('root'))
root.render(<Main />)
