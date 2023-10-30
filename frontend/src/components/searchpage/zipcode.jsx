import { useState } from "react"


export const Zipcode = ({ text,setZipcodeText,setZipcodeInput,setZipcodes }) => {
    const [backgroundColor,setBackgroundColor] = useState("white")

    return(
        <>
            <p className="ps-10 px-10" 
                style={{backgroundColor:backgroundColor}} 
                onMouseEnter={()=>setBackgroundColor("gray")} 
                onMouseLeave={()=>setBackgroundColor("white")} 
                onClick={(e)=>{
                    setZipcodeText(e.target.textContent)
                    setZipcodeInput(e.target.textContent)
                    setZipcodes([])

                }}
            >{text}</p>
        </>
    )
}