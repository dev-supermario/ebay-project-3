import express from "express"
import axios from "axios"
import { client } from "../utils/dbconnect"


const router = express.Router()
const db = client.db("hw3")
const collection = db.collection("favourites")

router.get("/getAll",async (req,res)=>{
    collection.find({}).toArray()
    .then(data => res.status(200).send(data))
    .catch(e => res.status(400).send(e))
})

router.post("/add",async (req,res)=>{
    const id = req.query.id
    const imageURL = req.query.imageURL
    const title = req.query.title
    const price = req.query.price
    const shipping = req.query.shipping

    const document = {
        "_id":id,
        "imageURL":imageURL,
        "title":title,
        "price":price,
        "shipping":shipping
    }

    collection.insertOne(document)
    .then(()=> res.status(200).send({"message":"document added successfully"}))
    .catch((e)=>res.status(400).send(e))
})

router.delete("/remove",async (req,res)=>{
    const id = req.query.id
    collection.deleteOne({_id:id})
    .then(()=> res.status(200).send({"message":"document removed successfully"}))
    .catch((e)=>res.status(400).send(e))
})

export default router