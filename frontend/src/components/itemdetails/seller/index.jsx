import { Attribute } from "./attribute"
import { FeedbackPercent } from "./feedbackpercent"
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
import { FeedbackRatingStar } from "./feedbackrating";

export const Seller = ({ item }) => {
    const sellerInfo = item.sellerInfo
    const storeInfo = item.storeInfo
    // console.log(storeInfo)
    return(
        <>
            <div className="w-100 text-white mt-10">
                {
                    storeInfo ?
                    <>
                        <div className="text-center pt-10 pb-20" style={{
                            backgroundColor:"#282a2e",
                            borderBottom:"2px solid #2a2e34",
                            minHeight:"44px",
                            minWidth:"200px",
                        }}  
                        >
                            <p className="text-center mb-0">{String(storeInfo.storeName).toUpperCase()}</p>
                        </div>
                    </>
                    :
                    <>
                    </>
                }
                <Attribute name="Feedback Score" value={sellerInfo.feedbackScore[0]} bgColor={"#212529"} />
                <Attribute name="Popularity" value={
                    <>
                        <FeedbackPercent value={sellerInfo.positiveFeedbackPercent[0]} />
                    </>
                }
                bgColor={"#282a2e"}
                />
                <Attribute name="Feedback Rating Star" value={
                    <>
                        <FeedbackRatingStar value={sellerInfo.feedbackRatingStar} />
                    </>
                }
                bgColor={"#212529"} 
                />

                <Attribute name="Top Rated" bgColor={"#282a2e"} value={ sellerInfo.topRatedSeller[0]==true ? <><DoneIcon color="success" /></> : <><CloseIcon color="warning" /></> } />
                <Attribute name="Store Name" value={storeInfo.storeName[0]} bgColor={"#212529"}/>
                <Attribute name="Buy Product At" bgColor={"#282a2e"} value={
                    <>
                        <a href={storeInfo.storeURL[0]} target="_blank" rel="noreferrer" className="m-0" style={{color:"#72989a",cursor:"pointer",textDecoration:"none"}}
                        >Store</a>
                    </>
                } />
            </div>
            
        </>
    )
}