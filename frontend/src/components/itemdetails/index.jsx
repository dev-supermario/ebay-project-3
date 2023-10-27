import { useContext, useState } from "react"
import { AppContext } from "../../utils/context"
import { ButtonGroup } from "./buttongroup"
import { Tabs } from "./tabs"
import { ProductTab } from "./product"
import { Photos } from "./photos"
import { Shipping } from "./shipping"
import { Seller } from "./seller"


export const ItemDetails = ({ itemType ,setShowDetails }) => {

    const context = useContext(AppContext)
    const resultsItem = context.item.results.data ? context.item.results.data : []
    const favItem = context.item.favourite.data ? context.item.favourite.data : []
    const item = itemType ? resultsItem : favItem  
    const [selected,setSelected] = useState("Product")
    console.log(item)
    console.log(selected)


    return(
        <>
            <div className="w-100 text-center">
                <p>{item.title}</p>
                <ButtonGroup setShowDetails={setShowDetails}/>
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
                        <Seller item = {item} itemURL = {item.itemURL} />
                    </>
                    :
                    <></>
                }

            </div>
        </>
    )
}