import { useContext, useState } from "react"
import { AppContext } from "../../utils/context"
import { ButtonGroup } from "./buttongroup"
import { Tabs } from "./tabs"
import { ProductTab } from "./product"
import { Photos } from "./photos"
import { Shipping } from "./shipping"
import { Seller } from "./seller"
import { SimilarProducts } from "./similarproducts"


export const ItemDetails = ({ itemType ,setShowDetails }) => {

    const context = useContext(AppContext)
    const resultsItem = context.item.results.data ? context.item.results.data : null
    const favItem = context.item.favourite.data ? context.item.favourite.data : null
    const item = itemType ? resultsItem : favItem 
    const [selected,setSelected] = useState("Product")
    // console.log(item)


    return(
        <>
            {
                item ?
                <>
                    <div className="w-100 text-center">
                        <p>{item.title}</p>
                        <ButtonGroup item={item} setShowDetails={setShowDetails}/>
                        <Tabs selected={selected} setSelected={setSelected} />
                        {
                            selected=="Product" ?
                            <>
                                <ProductTab item = {item} />
                            </>
                            :
                            <></>
                        }
                        {
                            selected=="Photos" ?
                            <>
                            <Photos keyword = {item.title} layout="masonry"/>
                            </>
                            :
                            <></>
                        }
                        {
                            selected=="Shipping" ?
                            <>
                                <Shipping item = {item} />
                            </>
                            :
                            <></>
                        }
                        {
                            selected=="Seller" ?
                            <>
                                <Seller item = {item} />
                            </>
                            :
                            <></>
                        }
                        {
                            selected=="Similar Products" ?
                            <>
                                <SimilarProducts id={item.id ? item.id : item["_id"]} />
                            </>
                            :
                            <></>
                        }

                    </div>
                </>
                :
                <>

                </>
            }
        </>
    )
}