export const Product = ({product}) => {
    return(
        <>
            <div key={String(product.itemId)} className=" d-flex flex-column flex-sm-row text-start px-20 pt-15 pb-20 pb-sm-10 mt-10 rounded" style={{
                backgroundColor: "#212529"
            }}>
                <div 
                    className="pb-25 pb-sm-5 me-sm-40"
                    style={{
                        minWidth:"150px",minHeight:"150px",
                    }}
                    
                >
                    <img 
                        src={product.imageURL} 
                        className="" 
                        style={{
                            minWidth:"150px",minHeight:"150px",
                            maxWidth:"150px" , maxHeight:"150px"
                        }}
                    />
                </div>
                <div>
                    <a href={product.viewItemURL} style={{color:"#72989a",cursor:"pointer",textDecoration:"none"}} target="_blank" rel="noreferrer" ><p className="m-0">{product.title}</p></a>
                    <p className="m-0" style={{color:"#cbeec0"}} >Price: ${product.price}</p>
                    <p className="m-0" style={{color:"#d9c494"}}>Shipping Cost: ${product.shipping}</p>
                    <p className="m-0">Days Left: {product.days}</p>
                </div>
            </div>
        </>
    )
}