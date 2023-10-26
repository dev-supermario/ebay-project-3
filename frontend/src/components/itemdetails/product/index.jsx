import { useState } from "react"
import { Photos } from "../photos"
import { Attribute } from "./attribute"

export const ProductTab = ({ item }) => {
    // console.log(item)
    const itemSpecifics = item.ItemSpecifics.NameValueList
    const [viewPhotos,setViewPhotos] = useState(false)

    return (
        <>
            <div className="w-100 text-white">

                <Attribute index="1" name={"Product Images"} value={
                    <>
                        <a className="m-0" style={{color:"#72989a",cursor:"pointer"}} onClick={()=>{
                            setViewPhotos(true)
                        }} >View Product Images</a>
                    </>
                } />
                {
                    viewPhotos ?
                    <>
                        <Photos keyword={item.Title} layout="carousel" setCarouselView={setViewPhotos}/>
                    </>
                    :
                    <>
                    </>
                }
                <Attribute index="2" name={"Price"} value={`$${item.ConvertedCurrentPrice.Value}`} />
                <Attribute index="3" name={"Location"} value={item.Location} />
                <Attribute index="4" name={"Return Policy"} 
                    value={item.ReturnsPolicy ? (item.ReturnPolicy.ReturnsAccepted ? item.ReturnPolicy.ReturnsAccepted: "") + (item.ReturnPolicy.ReturnsWithin ? "Within " + item.ReturnPolicy.ReturnsWithin : "") : ""} 
                />
                {
                    itemSpecifics.map((attribute,index) => {
                        // console.log(attribute)
                        return(
                            <>
                                <Attribute key={attribute.Name} index={index} name={attribute.Name} value={attribute.Value[0]} />
                            </>
                        )
                    }
                    
                    )
                }
            </div>
        </>
    )
}