import { useState } from "react"


export const Attribute = ({ index,name,value }) => {

    const [backgroundColor,setBackgroundColor] = useState((index%2==0) ? "#212529":"#282a2e")
    return (
        <>
            <div className="d-flex flex-column flex-sm-row" style={{
                    backgroundColor:backgroundColor
                }}>
                <div 
                    className="text-start ps-10 py-10 fw-bold"
                    style={{borderBottom:"2px solid #2a2e34",minHeight:"44px"}}    
                >
                    {name}
                </div>
                <div 
                    className="text-start ps-10 py-10"
                    style={{borderBottom:"2px solid #2a2e34",minHeight:"44px"}}  
                >
                    {value}
                </div>
            </div>
        </>
    )
}