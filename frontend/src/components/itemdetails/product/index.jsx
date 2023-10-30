import { useState } from "react"
import { Attribute } from "./attribute"
import CustomCarousel from "./carousel"

export const ProductTab = ({ item }) => {
    // console.log(item)
    const itemSpecifics = item.itemSpecifics
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
                        {/* <Carousel URLs={item.images} setCarouselView={setViewPhotos}/> */}
                        <CustomCarousel URLs={item.images} setCarouselView={setViewPhotos}/>
                    </>
                    :
                    <>
                    </>
                }
                <Attribute index="2" name={"Price"} value={`$${item.price}`} />
                <Attribute index="3" name={"Location"} value={item.location} />
                <Attribute index="4" name={"Return Policy"} 
                    value={item.returnPolicy ? (item.returnPolicy.ReturnsAccepted ? item.returnPolicy.ReturnsAccepted: "") + (item.returnPolicy.ReturnsWithin ? "Within " + item.returnPolicy.ReturnsWithin : "") : ""} 
                />
                {
                    itemSpecifics.map((attribute,index) => {
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