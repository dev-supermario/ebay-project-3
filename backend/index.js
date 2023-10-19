import express,{ json } from "express"
import utilRoutes from "./routes/utils.js"
import shoppingRoutes from "./routes/shopping.js"
import cors from "cors"
const PORT = process.env.PORT || 3001
const app = express()

app.use(cors())
app.use('/utils',utilRoutes)
app.use('/shopping',shoppingRoutes)
app.get('/', async (req,res) => {
    res.status(201).send({message: "Working"})
})
app.listen(PORT,() => console.log(`Working on ${PORT}`));