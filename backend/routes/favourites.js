import express from "express"
import axios from "axios"
import { client } from "../utils/dbconnect.js"


const router = express.Router()
const db = client.db("hw3")
const collection = db.collection("favourites")

router.get("/getAll",async (req,res)=>{
    collection.find({}).toArray()
    .then(data => res.status(200).send(data))
    .catch(e => res.status(400).send(e))
})

router.post("/add",async (req,res)=>{

    
    let document = req.body
    
    const {id,...rest} = document

    collection.insertOne({_id:id,...rest})
    .then(()=> res.status(200).send({"message":"document added successfully"}))
    .catch((e)=>res.status(400).send({"data":{...rest}}))
})

router.delete("/remove",async (req,res)=>{
    const id = req.query.id
    collection.deleteOne({_id:id})
    .then(()=> res.status(200).send({"message":"document removed successfully"}))
    .catch((e)=>res.status(400).send(e))
})

export default router