import { useContext } from "react"
import { AppContext } from "../../utils/context"
import { Item } from "./favourite"
import { NoResults } from "../extras/noresults"

export const FavouritesList = ()=>{

    const context = useContext(AppContext)
    // const count = resultContext.data["@count"]
    const favourites = context.favourites.data
    return(
        <>
           {
            favourites.length!=0 ?
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
                        <p className="ps-20 me-sm-80" style={{minWidth:"90px",maxWidth:"90px"}}>Price</p>
                        <p className="me-sm-80" style={{minWidth:"130px",maxWidth:"130px"}}>Shipping Option</p>
                        <p className="ps-10" style={{minWidth:"80px",maxWidth:"80px"}}>Favourite</p>
                    </div>
                    {
                        favourites.map((item,index) => 
                        <Item 
                            key={index.toString()}
                            id = {item._id} 
                            index = {index+1}
                            title = {item.title}
                            imageURL = {item.imageURL}
                            price = {item.price}
                            shipping={item.shipping}
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