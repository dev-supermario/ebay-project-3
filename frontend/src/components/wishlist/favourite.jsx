import { useState } from 'react';
import { WishListBtn } from '../extras/wishlistbtn';
import { ItemImage } from '../extras/itemimage';


export const Item = (props) => {
    const [backgroundColor,setBackgroundColor] = useState((props.index%2==0) ? "#212529":"#282a2e")

    return(
        <>
            <div className="d-flex py-15" style={{
                    minWidth:"100%",
                    width: "fit-content",
                    backgroundColor:backgroundColor,
                    borderBottom:"2px solid #2a2e34"
                }}

                // Potentially use onmouseover for propogation of event
                onMouseEnter={()=>{
                    setBackgroundColor("#2c2e32")
                }}
                onMouseLeave={()=>{
                    setBackgroundColor((props.index%2==0) ? "#212529":"#282a2e")
                }}
                onClick={()=>{console.log("click")}}
                
                >
                <p className="text-center ps-sm-20 pe-sm-60" style={{
                    minWidth:"40px"
                }}>{props.index}</p>
                <ItemImage imageURL={props.imageURL} />

                <p className="ps-10 text-truncate me-sm-100" style={{minWidth:"400px",maxWidth:"400px"}}>{props.title}</p>
                <p className="ps-20 me-sm-80" style={{minWidth:"90px"}}>${props.price}</p>
                <p className="text-wrap me-sm-80" style={{minWidth:"130px",maxWidth:"130px"}}>{props.shipping} Shipping</p>
                
                <div className="pe-10" style={{minWidth:"80px"}}>
                    <WishListBtn
                        {...props}
                    />
                </div>
            </div>
        </>
    )
}