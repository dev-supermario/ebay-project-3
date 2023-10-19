import React from "react"
import * as ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.css"
import "../scss/custom.scss"
import App from "./App";


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
)