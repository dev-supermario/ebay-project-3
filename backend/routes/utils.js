import express from "express"
import axios from "axios"
import dotenv from "dotenv"

dotenv.config()
const router = express.Router()
router.get("/getZipcodes",(req,res)=>{
    const keyword = req.query.keyword
    const username = process.env.GEO_USERNAME
    const URL = `http://api.geonames.org/postalCodeSearchJSON?postalcode_startsWith=${keyword}&maxRows=5&username=${username}&country=US`
    console.log(URL)
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    axios.get(URL,config)
    .then(res => res.data["postalCodes"])
    .then(data => data.map(val => val.postalCode))
    .then(data => res.status(200).send(data))
    .catch((error)=>res.send(error))
})

router.get("/getPhotos",(req,res)=>{
    const keyword = req.query.keyword
    let URL = `https://www.googleapis.com/customsearch/v1?cx=${process.env.GOOGLE_SEARCH_ENGINE_ID}&key=${process.env.GOOGLE_API_KEY}&imgSize=huge&imgType=photo&num=8&searchType=image&q=${keyword}`

    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    console.log(URL)
    axios.get(URL,config)
    .then(res => res.data)
    .then(data => res.status(200).send(data))
    .catch(error => res.status(400).send(error))

})

export default router;