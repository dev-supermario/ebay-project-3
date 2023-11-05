import { WishListBtn } from "../extras/wishlistbtn"
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import FacebookIcon from "./Facebook_icon_2013.svg"

export const ButtonGroup = ({ item,setShowDetails }) => {
    return(
        <>
            <div className="d-flex justify-content-between w-100">
                <div>
                    <button type="button" className="btn btn-light" style={{whiteSpace:"nowrap"}} onClick={()=>{setShowDetails(false)}}>
                        <ArrowBackIosNewIcon/>List
                    </button>
                </div>
                <div className="w-100 text-end">
                    <button 
                        className="btn btn-light p-0" 
                        type="button"
                        onClick={()=>{
                            // console.log("click")
                            window.FB.ui({
                                method: 'share',
                                href: item.itemURL,
                              }, ()=>{
                                // console.log("shared")
                            });
                        }}

                    ><img className="img-fluid" style={{width:"40px"}} src={FacebookIcon} /></button>
                    <WishListBtn item={item}/>
                </div>
            </div>
        </>
    )
}