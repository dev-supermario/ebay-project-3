import { Attribute } from "./attribute"
import { FeedbackPercent } from "./feedbackpercent"
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
import { FeedbackRatingStar } from "./feedbackrating";

export const Seller = ({ item,itemURL }) => {
    const sellerInfo = item.sellerInfo
    const storeInfo = item.storeInfo
    console.log(sellerInfo)
    return(
        <>
            <div className="w-100 text-white">
                {
                    storeInfo ?
                    <>
                        <h2 className="text-center">{storeInfo.StoreName}</h2>
                    </>
                    :
                    <>
                    </>
                }
                <Attribute name="Feedback Score" value={sellerInfo.feedbackScore[0]} />
                <Attribute name="Popularity" value={
                    <>
                        <FeedbackPercent value={sellerInfo.positiveFeedbackPercent[0]} />
                    </>
                } />
                <Attribute name="Feedback Rating Star" value={
                    <>
                        <FeedbackRatingStar value={sellerInfo.feedbackRatingStar} />
                    </>
                } />

                <Attribute name="Top Rated" value={ sellerInfo.topRatedSeller[0]==true ? <><DoneIcon color="success" /></> : <><CloseIcon color="warning" /></> } />
                {
                    storeInfo.StoreName ?
                    <Attribute name="Store Name" value={storeInfo.StoreName} />
                    :
                    <></>
                }
                <Attribute name="Buy Product At" value={
                    <>
                        <a href={itemURL} className="m-0" style={{color:"#72989a",cursor:"pointer",textDecoration:"none"}}
                        >Store</a>
                    </>
                } />
            </div>
            
        </>
    )
}