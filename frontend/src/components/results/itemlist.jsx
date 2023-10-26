import { useContext, useState } from "react"
import { AppContext } from "../../utils/context"
import { Item } from "./item"
import { Pagination } from "../extras/pagination"
// import { NoResults } from "../extras/noresults"

export const ItemList = ()=>{

    const context = useContext(AppContext)
    const count = context.search.results["@count"]
    const items = context.search.results ? context.search.results.item : null
    const [currentPage,setCurrentPage] = useState(0)
    const paginatedItems = items.map((item,index) => 
        <Item 
            key={item.itemId[0]}
            id = {item.itemId[0]} 
            index = {index+1}
            itemURL = {item.viewItemURL[0]}
            title = {item.title[0]}
            imageURL = {item.galleryURL[0]}
            price = {item.sellingStatus[0].currentPrice[0]["__value__"]}
            shipping={item.shippingInfo[0].shippingType[0]}
            zipcode = {item.postalCode[0]} 
        />
    )

    return(
        <>
           {
            items ?
            <>
                <div className="bg-dark text-white w-100 overflow-auto text-nowrap">
                    <div className="d-flex fw-bold pt-10 w-100" style={{
                        borderBottom:"2px solid #2a2e34"
                    }}>
                        <p className="text-center ps-sm-20 pe-sm-60" style={{
                            minWidth:"40px"
                        }}>#</p>
                        <p className="me-20 me-sm-60" style={{
                                minWidth:"120px",
                            }}
                        >Image</p>
                        <p  className="ps-10 me-sm-80"
                            style={{minWidth:"380px"}}
                        >Title</p>
                        <p className="ps-20 me-sm-50" style={{minWidth:"90px",maxWidth:"90px"}}>Price</p>
                        <p className="me-sm-40" style={{minWidth:"130px",maxWidth:"130px"}}>Shipping</p>
                        <p className="me-sm-30" style={{minWidth:"70px",maxWidth:"70px"}}>Zip</p>
                        <p className="ps-10" style={{minWidth:"80px",maxWidth:"80px"}}>Wish List</p>
                    </div>
                    {
                        paginatedItems.slice(currentPage*10,currentPage*10+10)
                    }
                    
                </div>
                <Pagination count={count} currentPage={currentPage} setCurrentPage={setCurrentPage} />
            </>
            :
            <>
                {/* <NoResults/> */}
            </>
           }
        </>
    )

}