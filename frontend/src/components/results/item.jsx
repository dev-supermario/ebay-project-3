import { useContext, useEffect, useState } from "react"
import { WishListBtn } from "../extras/wishlistbtn"
import { ItemImage } from "../extras/itemimage"
import { useRequest } from "../../utils/requests"
import { AppContext } from "../../utils/context"



export const Item = (props) => {

    const { getItemDetails } = useRequest()
    const context = useContext(AppContext)
    const setItemDetails = context.item.results.setData
    const data = context.item.results.data
    const enableShowDetailsBtn = context.enableShow

    // console.log(data)

    const [currItem,setCurrItem] = useState(null)

    useEffect(()=> {
        getItemDetails({ id:props.item.id })
        .then(res => {
            setCurrItem({
                ...props.item,
                images: res.PictureURL,
                location: res.Location,
                returnPolicy : res.ReturnPolicy ? res.ReturnPolicy : "",
                itemSpecifics : res.ItemSpecifics.NameValueList,
            })
        })
    },[props.selected])

    return(
        <>
            {
                currItem ?
                <>
                    <div className="d-flex py-15 item" data-type={(props.index%2==0) ? "even" : "odd"} style={{
                                minWidth:"100%",
                                width: "fit-content",
                                borderBottom:"2px solid #2a2e34",
                                backgroundColor : (props.selected == props.index || (data ? data.id == props.id : false) ? "#b0b2b6" : "")

                            }}

                            onClick={(e)=>{
                                e.stopPropagation()
                                // console.log("click")
                                setItemDetails(currItem)
                                props.setSelected(props.index)
                            }}
                        >
                            
                        <p className="text-center ps-sm-20 pe-sm-60" style={{
                            minWidth:"40px",
                            maxWidth:"40px"
                        }}>{props.index}</p>
                        
                        <ItemImage imageURL = {props.item.imageURL} />

                        <p className="ps-10 me-sm-80 custom-tooltip" style={{minWidth:"380px",maxWidth:"380px",maxHeight:"20px",textDecoration:"none",color:"#1657b4",cursor:"pointer"}} onClick={()=> {
                            setItemDetails(currItem)
                            enableShowDetailsBtn(true)
                        }} >
                            {currItem.title.length > 35 ? props.item.title.slice(0,35) + " ..." : props.item.title}
                            <span className="custom-tooltiptext">{props.item.title}</span>
                        </p>
                        
                        <p className="ps-20 me-sm-50" style={{minWidth:"90px"}}>${props.item.price}</p>
                        <p className="text-wrap me-sm-40" style={{minWidth:"130px",maxWidth:"130px"}}>{props.item.shippingType} Shipping</p>
                        <p className="me-sm-30" style={{minWidth:"70px",maxWidth:"70px"}}>{props.item.zipcode}</p>

                        <div className="ps-10 pe-20" style={{minWidth:"80px"}}>
                            <WishListBtn
                                item = {currItem}
                            />
                        </div>
                    </div>
                </>
                :
                <></>
            }
        </>
    )
}