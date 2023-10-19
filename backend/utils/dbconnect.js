import dotenv from "dotenv"

dotenv.config()

import { MongoClient, ServerApiVersion } from "mongodb"

const URL = process.env.DB_URL

export const client = new MongoClient(URL, {
  serverApi: {
    version: ServerApiVersion.v1,
    deprecationErrors: true,
  }
});

export async function DBConnect() {
    await client.connect()
    .then(()=>console.log("Database connected."))
    .catch(()=>console.error("Couldn't connect database."))
}

export async function DBClose(){
    await client.close();
}