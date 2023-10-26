import { useContext, useState } from "react"
import { WishListBtn } from "../extras/wishlistbtn"
import { ItemImage } from "../extras/itemimage"
import { useRequest } from "../../utils/requests"
import { AppContext } from "../../utils/context"



export const Item = (props) => {

    const [backgroundColor,setBackgroundColor] = useState((props.index%2==0) ? "#212529":"#282a2e")
    const { getItemDetails } = useRequest()
    const context = useContext(AppContext)
    const setItemDetails = context.item.setData
    const enableShowDetailsBtn = context.item.enableShow

    return(
        <>
            <div className="d-flex py-15" style={{
                    minWidth:"100%",
                    width: "fit-content",
                    backgroundColor:backgroundColor,
                    borderBottom:"2px solid #2a2e34"
                }}

                onMouseEnter={()=>{
                    setBackgroundColor("#2c2e32")
                }}
                onMouseLeave={()=>{
                    setBackgroundColor((props.index%2==0) ? "#212529":"#282a2e")
                }}
                onClick={()=>{
                    getItemDetails({ id:props.id })
                    .then(res => {
                        setItemDetails(res)
                    })

                }}
                >
                    
                <p className="text-center ps-sm-20 pe-sm-60" style={{
                    minWidth:"40px"
                }}>{props.index}</p>
                
                <ItemImage imageURL = {props.imageURL} />

                <p className="ps-10 text-truncate me-sm-80" style={{minWidth:"380px",maxWidth:"380px",textDecoration:"none",color:"#1657b4",cursor:"pointer"}} onClick={()=> {
                    getItemDetails({ id:props.id })
                    .then(res => {
                        setItemDetails(res)
                    })
                    .then(()=>enableShowDetailsBtn(true))
                }} >{props.title}</p>
                
                <p className="ps-20 me-sm-50" style={{minWidth:"90px"}}>${props.price}</p>
                <p className="text-wrap me-sm-40" style={{minWidth:"130px",maxWidth:"130px"}}>{props.shipping} Shipping</p>
                <p className="me-sm-30" style={{minWidth:"70px",maxWidth:"70px"}}>{props.zipcode}</p>

                <div className="" style={{minWidth:"80px"}}>
                    <WishListBtn
                        { ...props }
                    />
                </div>
            </div>
        </>
    )
}