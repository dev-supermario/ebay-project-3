import React from "react"
import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter,RouterProvider } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.css"
import "../scss/custom.scss"
import SearchPage from "./pages/searchpage";


const router = createBrowserRouter([
    {
        path: '/',
        element: <SearchPage/>
    },
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
)