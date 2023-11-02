import { useContext, useEffect, useState } from 'react';
import { WishListBtn } from '../extras/wishlistbtn';
import { ItemImage } from '../extras/itemimage';
import { AppContext } from '../../utils/context';


export const Item = (props) => {

    const context = useContext(AppContext)
    const setItemDetails = context.item.favourite.setData
    const data = context.item.favourite.data
    const enableShowDetailsBtn = context.enableShow

    console.log(props.id)
    console.log(data)

    const [currItem,setCurrItem] = useState(null)

    // console.log(props.item)
    useEffect(()=> {
            setCurrItem({
                ...props.item
            })
    },[props])


    return(
        <>
            {
                currItem ?
                <>
                    <div className="d-flex py-15 favourite" data-type={(props.index%2==0) ? "even" : "odd"} style={{
                        minWidth:"100%",
                        width: "fit-content",
                        backgroundColor: (props.selected == props.index || data["_id"] == props.id) ? "#b0b2b6" : "" ,
                        borderBottom:"2px solid #2a2e34"
                    }}

                        // Potentially use onmouseover for propogation of event
                        onClick={()=>{
                            setItemDetails(currItem)
                            // setBackgroundColor("#b0b2b6")
                            props.setSelected(props.index)
                        }}
                        
                        >
                        <p className="text-center ps-sm-20 pe-sm-60" style={{
                            minWidth:"40px",
                            maxWidth:"40px"

                        }}>{props.index}</p>
                        <ItemImage imageURL={currItem.imageURL} />

                        <p 
                            className="ps-10 me-sm-100 custom-tooltip" 
                            title={currItem.title} 
                            style={{minWidth:"400px",maxWidth:"400px",maxHeight:"20px",textDecoration:"none",color:"#1657b4",cursor:"pointer"}} 
                            onClick={()=> {
                                setItemDetails(currItem)
                                enableShowDetailsBtn(true)
                            }}
                            
                            >{currItem.title.length > 35 ? currItem.title.slice(0,35) + " ..." : currItem.title}
                            <span className="custom-tooltiptext">{currItem.title}</span>
                        </p>
                        <p className="ps-20 me-sm-80" style={{minWidth:"90px"}}>${currItem.price}</p>
                        <p className="text-wrap me-sm-80" style={{minWidth:"130px",maxWidth:"130px"}}>{currItem.shippingType} Shipping</p>
                        
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