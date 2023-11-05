import { useContext, useState } from "react"
import { AppContext } from "../../utils/context"
import { Item } from "./item"
import { Pagination } from "../extras/pagination"

export const ItemList = ()=>{

    const context = useContext(AppContext)
    const items = context.search.results ? context.search.results : []
    const [selected,setSelected] = useState(0)
    const [currentPage,setCurrentPage] = useState(0)
    const paginatedItems = items.map((item,index) => {
            const itemDetails = {
                id: item.itemId[0], 
                itemURL: item.viewItemURL[0],
                title : item.title[0],
                imageURL : item.galleryURL ? item.galleryURL[0]  : "https://csci571.com/hw/hw6/images/ebay_default.jpg",
                price : item.sellingStatus[0].currentPrice[0]["__value__"],
                shippingType : item.shippingInfo[0].shippingType[0],
                zipcode : item.postalCode[0],
                shippingInfo: item.shippingInfo[0],
                returnsAccepted : item.returnsAccepted ? item.returnsAccepted : "",
                sellerInfo: item.sellerInfo ? item.sellerInfo[0] : "",
            }

            return(
                <>
                    <Item 
                        key={String(item.itemId[0])}
                        id = {item.itemId[0]}
                        index = {index+1}
                        item = {itemDetails}
                        selected={selected}
                        setSelected={setSelected}
                    />
                </>
            )
        }
    )

    return(
        <>
           {
            items.length > 0 ?
            <>
                <div className="bg-dark text-white w-100 overflow-auto text-nowrap">
                    <div key={0} className="d-flex fw-bold pt-10 w-100" style={{
                        borderBottom:"2px solid #2a2e34"
                    }}>
                        <p className="text-center ps-sm-20 pe-sm-60" style={{
                            minWidth:"40px",
                            maxWidth:"40px"
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
                <Pagination count={items.length} currentPage={currentPage} setCurrentPage={setCurrentPage} />
            </>
            :
            <>
                {/* <NoResults/> */}
            </>
           }
        </>
    )

}