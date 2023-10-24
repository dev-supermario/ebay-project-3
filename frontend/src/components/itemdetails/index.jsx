import { useContext, useState } from "react"
import { AppContext } from "../../utils/context"
import { ButtonGroup } from "./buttongroup"
import { Tabs } from "./tabs"
import { ProductTab } from "./product"


export const ItemDetails = ({ setShowDetails }) => {

    const context = useContext(AppContext)
    const item = context.item.data ? context.item.data : []
    const [selected,setSelected] = useState("Product")
    // console.log(item)


    return(
        <>
            <div className="w-100 text-center">
                <p>{item.Title}</p>
                <ButtonGroup setShowDetails={setShowDetails}/>
                <Tabs selected={selected} setSelected={setSelected} />
                {
                    selected=="Product" ?
                    <>
                        <ProductTab item={item} />
                    </>
                    :
                    <></>
                }

            </div>
        </>
    )
}