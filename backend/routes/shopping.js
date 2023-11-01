import express from "express"
import axios from "axios"
import { OAuthToken } from "../utils/ebay_oauth_token.js";
import { categoryMap } from "../utils/extra.js"

const router = express.Router()
const client_id = process.env.API_APPID;
const client_secret = process.env.API_CERTID;
const oauthToken = new OAuthToken(client_id, client_secret);


router.get('/getItems',(req,res)=>{
    let URL = `https://svcs.ebay.com/services/search/FindingService/v1?OPERATION-NAME=findItemsAdvanced&SERVICE-VERSION=1.0.0&SECURITY-APPNAME=${process.env.API_APPID}&RESPONSE-DATA-FORMAT=JSON&REST-PAYLOAD=true`

    const keyword = req.query.keyword
    const itemsPerPage = req.query.itemsPerPage
    const buyerZipcode = req.query.buyerZipcode
    const distance = req.query.distance
    const itemNew = req.query.itemNew
    const itemUsed = req.query.itemUsed
    const itemUnspecified = req.query.itemUnspecified
    const freeShipping = req.query.freeShipping
    const localPickup = req.query.localPickup
    const category = req.query.category

    let itemFilterCount = 0

    // Evaluating mandatory conditions

    if(itemsPerPage) URL += `&paginationInput.entriesPerPage=${itemsPerPage}`
    if(keyword) URL += `&keywords=${keyword}`
    if(buyerZipcode) URL += `&buyerPostalCode=${buyerZipcode}`

    // Category

    if(category && category!="allCategories"){
        URL += `&categoryId=${categoryMap[category]}`
    }

    // max distance

    if(distance){
        URL += `&itemFilter(${itemFilterCount}).name=MaxDistance&itemFilter(${itemFilterCount}).value=${distance}`

        itemFilterCount += 1
    }

    // Shipping type

    if(freeShipping){
        URL += `&itemFilter(${itemFilterCount}).name=FreeShipping&itemFilter(${itemFilterCount}).value=${freeShipping}`

        itemFilterCount += 1
    }

    if(localPickup){
        URL += `&itemFilter(${itemFilterCount}).name=LocalPickupOnly&itemFilter(${itemFilterCount}).value=${localPickup}`

        itemFilterCount += 1
    }

    // Item Condition

    if(itemNew || itemUsed || itemUnspecified){

        URL += `&itemFilter(${itemFilterCount}).name=Condition`
        let conditionCount = 0;

        if(itemNew){
            URL += `&itemFilter(${itemFilterCount}).value(${conditionCount})=New`
            conditionCount += 1
        }
        if(itemUsed){
            URL += `&itemFilter(${itemFilterCount}).value(${conditionCount})=Used`
            conditionCount += 1
        }
        if(itemUnspecified){
            URL += `&itemFilter(${itemFilterCount}).value(${conditionCount})=Unspecified`
            conditionCount += 1
        }

        itemFilterCount += 1

    }
    // Hide duplicate items

    URL += `&itemFilter(${itemFilterCount}).name=HideDuplicateItems&itemFilter(${itemFilterCount}).value=true`

    // Seller and Store info

    URL += "&outputSelector(0)=SellerInfo&outputSelector(1)=StoreInfo"

    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    // console.log(URL)

    axios.get(URL,config)
    .then(res => res.data)
    .then(data => res.status(200).send(data.findItemsAdvancedResponse[0].searchResult[0]))
    .catch(error => res.status(400).send(error))

})

router.get('/getSingleItem',(req,res)=>{
    let URL = `https://open.api.ebay.com/shopping?callname=GetSingleItem&responseencoding=JSON&siteid=0&version=967&appid=${process.env.API_APPID}`

    const itemID = req.query.itemID
    const needDescription = req.query.needDescription

    if(needDescription) URL += "&IncludeSelector=Description,ItemSpecifics,ShippingCosts"

    URL += `&itemID=${itemID}`

    oauthToken.getApplicationToken()
    .then(accessToken => {
        const headers = { 
            "X-EBAY-API-IAF-TOKEN": accessToken
        }
        const config = {
            headers: headers
        }
        axios.get(URL,config)
        .then(res => res.data)
        .then(data => res.status(200).send(data.Item))
        .catch(error => res.status(400).send(error))
    })
    .catch(error => res.status(400).send(error))

})

router.get('/getSimilarProducts',(req,res)=>{

    const itemID = req.query.itemID

    let URL = `https://svcs.ebay.com/MerchandisingService?OPERATION-NAME=getSimilarItems&SERVICE-NAME=MerchandisingService&SERVICE-VERSION=1.1.0&CONSUMER-ID=${process.env.API_APPID}&RESPONSE-DATA-FORMAT=JSON&REST-PAYLOAD&itemId=${itemID}&maxResults=20`

    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    axios.get(URL,config)
    .then(res => res.data)
    .then(data => res.status(200).send(data.getSimilarItemsResponse.itemRecommendations.item))
    .catch(error => res.status(400).send(error))
})




export default router