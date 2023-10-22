import { useContext } from "react"
import { AppContext } from "../../utils/context"

export const ItemImage = (props) => {

    const context = useContext(AppContext)

    return (
        <>
            <div 
                className="d-flex justify-content-center align-items-center pe-20 pe-sm-60"
                style={{
                    minWidth:"120px",minHeight:"120px",
                }}
                
            >
                <img 
                    src={props.imageURL} 
                    className="" 
                    style={{
                        minWidth:"120px",minHeight:"120px",
                        maxWidth:"120px" , maxHeight:"120px"
                    }}
                    onClick={()=>{
                        context.image.setPopup(true)
                    } }    
                />
            </div>
            {
                context.image.popup ?
                <div
                    style={{
                        top:"0",
                        left:"0",
                        width:"100vw",
                        height:"100vh",
                        position:"fixed",
                        display:"flex",
                        justifyContent:"center",
                        alignItems:"center",
                        backgroundColor:"#0f0f0f",
                    }}
                    onClick={()=>{
                        context.image.setPopup(false)
                    }}
                >
                    <img 
                        src={props.imageURL} 
                        className="" 
                        style={{
                            minWidth:"160px",minHeight:"160px",
                            maxWidth:"160px" , maxHeight:"160px"
                        }}
                    />

                </div>
                :
                <></>
            }
        </>
    )
}