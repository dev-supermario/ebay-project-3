import { useContext } from "react"
import { ResultsContext } from "../../utils/context"
import { Item } from "./item"
import { NoResults } from "../extras/noresults"

export const ItemList = ()=>{

    const resultContext = useContext(ResultsContext)
    // const count = resultContext.data["@count"]
    const items = resultContext.data.item

    // control width of each element from here

    return(
        <>
           {
            items ?
            <>
                <div className="bg-dark text-white w-100 overflow-auto text-nowrap">
                    <div className="d-flex fw-bold pt-10 w-100">
                        <p className="text-center ps-sm-20 pe-sm-60" style={{
                            minWidth:"40px"
                        }}>#</p>
                        <p className="me-sm-60" style={{
                                minWidth:"100px",
                            }}
                        >Image</p>
                        <p  className="ps-10 me-sm-100"
                            style={{minWidth:"400px"}}
                        >Title</p>
                        <p className="ps-20 me-sm-50" style={{minWidth:"90px",maxWidth:"90px"}}>Price</p>
                        <p className="me-sm-40" style={{minWidth:"130px",maxWidth:"130px"}}>Shipping</p>
                        <p className="me-sm-30" style={{minWidth:"70px",maxWidth:"70px"}}>Zip</p>
                        <p className="ps-10" style={{minWidth:"80px",maxWidth:"80px"}}>Wish List</p>
                    </div>
                    {
                        items.map((item,index) => 
                        <Item 
                            key={index.toString()} 
                            index = {index+1}
                            title = {item.title}
                            imageURL = {item.galleryURL}
                            price = {item.sellingStatus[0].currentPrice[0]["__value__"]}
                            shipping={item.shippingInfo[0].shippingType}
                            zipcode = {item.postalCode} 
                        />)
                    }
                </div>
            </>
            :
            <>
                <NoResults/>
            </>
           }
        </>
    )

}