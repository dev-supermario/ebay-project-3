import { WishListBtn } from '../extras/wishlistbtn';



export const Item = (props) => {

    return(
        <>
            <div className="d-flex py-15">
                <p className="text-center ps-sm-20 pe-sm-60" style={{
                    minWidth:"40px"
                }}>{props.index}</p>
                <div 
                    className="d-flex justify-content-center align-items-center pe-sm-60" 
                    style={{
                        // minWidth:"100px",minHeight:"100px",
                    }}
                >
                    <img 
                        src={props.imageURL} 
                        className="" 
                        style={{
                            minWidth:"100px",minHeight:"100px",
                            maxWidth:"100px" , maxHeight:"100px"
                        }}    
                    />
                </div>
                <p className="ps-10 text-truncate me-sm-100" style={{minWidth:"400px",maxWidth:"400px"}}>{props.title}</p>
                <p className="ps-20 me-sm-80" style={{minWidth:"90px"}}>${props.price}</p>
                <p className="text-wrap me-sm-80" style={{minWidth:"130px",maxWidth:"130px"}}>{props.shipping} Shipping</p>
                <div className="" style={{minWidth:"80px"}}>
                    <WishListBtn
                        {...props}
                    />
                </div>
            </div>
        </>
    )
}