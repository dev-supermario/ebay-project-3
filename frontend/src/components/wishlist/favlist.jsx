import { useContext, useState } from "react"
import { AppContext } from "../../utils/context"
import { Item } from "./favourite"
import { Pagination } from "../extras/pagination"


export const FavouritesList = ()=>{

    const context = useContext(AppContext)
    // const count = resultContext.data["@count"]
    const favourites = context.favourites.data ? context.favourites.data : []
    const [currentPage,setCurrentPage] = useState(0)
    let totalPrice = 0;
    const paginatedFavourites = favourites.map((item,index) =>{
        totalPrice += parseFloat(item.price)
        return(
            <>
                <Item 
                    key={String(item._id)}
                    id = {item._id} 
                    index = {index+1}
                    title = {item.title}
                    imageURL = {item.imageURL}
                    price = {item.price}
                    shipping={item.shipping}
                />
            </>
        )
    } )


    return(
        <>
           {
            favourites.length!=0 ?
            <>
                <div className="bg-dark text-white w-100 overflow-auto text-nowrap">
                    <div key={"0"} className="d-flex fw-bold pt-10 w-100" style={{
                        borderBottom:"2px solid #2a2e34"
                    }}>
                        <p className="text-center ps-sm-20 pe-sm-60" style={{
                            minWidth:"40px"
                        }}>#</p>
                        <p className="me-20 me-sm-60" style={{
                                minWidth:"120px",
                            }}
                        >Image</p>
                        <p  className="ps-10 me-sm-100"
                            style={{minWidth:"400px"}}
                        >Title</p>
                        <p className="ps-20 me-sm-80" style={{minWidth:"90px",maxWidth:"90px"}}>Price</p>
                        <p className="me-sm-80" style={{minWidth:"130px",maxWidth:"130px"}}>Shipping Option</p>
                        <p className="px-10 " style={{minWidth:"80px",maxWidth:"80px"}}>Favourite</p>
                    </div>
                    {   
                        paginatedFavourites.splice(currentPage*10,currentPage*10+10)    
                    }
                    <div key={`${favourites.length+1}`} className="d-flex pt-10 w-100 ps-670">
                        <p className="text-wrap me-30 me-sm-80 ms-sm-270" style={{minWidth:"100px",maxWidth:"100px"}}>Total Shopping</p>
                        <p className="ps-10 ms-sm-30">${totalPrice}</p>
                    </div>
                </div>
                <Pagination count={favourites.length} currentPage={currentPage} setCurrentPage={setCurrentPage} />
            </>
            :
            <>
            </>
           }
        </>
    )

}