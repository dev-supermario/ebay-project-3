import { WishListBtn } from "../extras/wishlistbtn"
import FacebookIcon from '@mui/icons-material/Facebook';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

export const ButtonGroup = ({ setShowDetails }) => {
    return(
        <>
            <div className="d-flex justify-content-between w-100">
                <div>
                    <button type="button" className="btn btn-light" onClick={()=>{setShowDetails(false)}}>
                        <ArrowBackIosNewIcon/>List
                    </button>
                </div>
                <div className="">
                    <button className="btn btn-light" 
                        type="button"
                    ><FacebookIcon/></button>
                    <WishListBtn/>
                </div>
            </div>
        </>
    )
}