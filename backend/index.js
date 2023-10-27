import express,{ json } from "express"
import utilRoutes from "./routes/utils.js"
import shoppingRoutes from "./routes/shopping.js"
import favouriteRoutes from "./routes/favourites.js"
import cors from "cors"
import { DBConnect } from "./utils/dbconnect.js"


const PORT = process.env.PORT || 3001
const app = express()

DBConnect()
app.use(cors())
app.use(express.json())
app.use('/utils',utilRoutes)
app.use('/shopping',shoppingRoutes)
app.use('/favourites',favouriteRoutes)
app.get('/', async (req,res) => {
    res.status(201).send({message: "Working"})
})
app.listen(PORT,() => console.log(`Working on ${PORT}`));