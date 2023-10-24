import { Attribute } from "./attribute"

export const ProductTab = ({ item }) => {
    // console.log(item)
    const itemSpecifics = item.ItemSpecifics.NameValueList
    return (
        <>
            <div className="w-100 text-white">

                <Attribute index="1" name={"Product Images"} value={
                    <>
                        <p className="m-0" style={{color:"#72989a"}}>View Product Images</p>
                    </>
                } />
                <Attribute index="2" name={"Price"} value={`$${item.ConvertedCurrentPrice.Value}`} />
                <Attribute index="3" name={"Location"} value={item.Location} />
                <Attribute index="4" name={"Return Policy"} 
                    value={item.ReturnsPolicy ? (item.ReturnPolicy.ReturnsAccepted ? item.ReturnPolicy.ReturnsAccepted: "") + (item.ReturnPolicy.ReturnsWithin ? item.ReturnPolicy.ReturnsWithin : "") : ""} 
                />
                {
                    itemSpecifics.map((attribute,index) => {
                        console.log(attribute)
                        return(
                            <>
                                <Attribute key={index+5} index={index} name={attribute.Name} value={attribute.Value[0]} />
                            </>
                        )
                    }
                    
                    )
                }
            </div>
        </>
    )
}