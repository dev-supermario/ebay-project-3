import { Attribute } from "./attribute"
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';

export const Shipping = ({ item }) => {
    const shippingInfo = item.shippingInfo
    const returnsAccepted = item.returnsAccepted[0]
    // console.log(shippingInfo)
    return(
        <>
            <div className="w-100 text-white">
                <Attribute name="Shipping Cost" value={ shippingInfo.shippingServiceCost[0]=="Free" ? "Free Shipping" : shippingInfo.shippingServiceCost[0]["__value__"] } />
                <Attribute name="Shipping Locations" value={shippingInfo.shipToLocations[0]} />
                <Attribute name="Handling Time" value={ shippingInfo.handlingTime[0] +  (shippingInfo.handlingTime[0] <= 1 ? " day" : " days") } />
                <Attribute name="Expedited Shipping" value={ shippingInfo.expeditedShipping[0]==true ? <><DoneIcon color="success" /></> : <><CloseIcon color="warning" /></> } />
                <Attribute name="One Day Shipping" value={ shippingInfo.oneDayShippingAvailable[0]==true ? <><DoneIcon color="success" /></> : <><CloseIcon color="warning" /></> } />
                <Attribute name="Returns Accepted" value={ returnsAccepted==true ? <><DoneIcon color="success" /></> : <><CloseIcon color="warning" /></> } />
            </div>
        </>
    )
}
