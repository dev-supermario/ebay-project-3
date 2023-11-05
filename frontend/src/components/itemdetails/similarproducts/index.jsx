import { useEffect, useState } from "react"
import { useRequest } from "../../../utils/requests"
import { Product } from "./product"
import { Tabs } from "./tabs"
import { NoResults } from "../../extras/noresults"

export const SimilarProducts = ({ id }) => {

    const { getSimilarProducts } = useRequest()
    const [products,setProducts] = useState([])
    const [sortOrder,setSortOrder] = useState("ascending")
    const [sortBy,setSortBy] = useState("default")
    const [showMore,setShowMore] = useState(false)

    const sortedProducts =  products ? 
                                sortBy=="default" ?  
                                    sortOrder=="ascending" ? products : products.toReversed()
                                : 
                                products.sort((a,b) => sortOrder=="ascending" ? a[sortBy] - b[sortBy] : b[sortBy] - a[sortBy])
                            : 
                            []

    const paginatedProducts = sortedProducts ? sortedProducts.map( product => <Product key={product.itemId} product={product} />) : []
    

    useEffect(()=>{
        getSimilarProducts({ id })
        .then((res) => setProducts(res.map(product => {
            return({
                title : product.title,
                imageURL: product.imageURL,
                price : product.buyItNowPrice["__value__"],
                shipping : product.shippingCost["__value__"],
                days : /P(.*?)D/.exec(product.timeLeft)[1]
            })
        })))
    },[])

    return(
        <>
            {
                products ?
                <>
                    <div className="py-10">
                        <Tabs  
                            sortBy={sortBy}
                            setSortBy={setSortBy}
                            sortOrder={sortOrder}
                            setSortOrder={setSortOrder}
                        />
                        <div className="w-100 text-white ">
                            {
                                products ?
                                paginatedProducts.slice(0,(products.length > 5 ? 5 : products.length))
                                :
                                <>
                                
                                </>
                            }
                            {
                                products.length > 5 && showMore ?
                                paginatedProducts.slice(5,products.length)
                                :
                                <>
                                
                                </>
                            }
                        </div>
                        {
                            products ?
                            <div className="mt-10">
                            {
                                !showMore ?
                                <button className="btn text-white" onClick={()=>setShowMore(true)}  style={{
                                    backgroundColor: "#212529"
                                }} >Show More</button>
                                :
                                <button className="btn text-white" onClick={()=>setShowMore(false)}  style={{
                                    backgroundColor: "#212529"
                                }}>Show Less</button>
                            }
                            </div>
                            :
                            <></>
                        }
                    </div>
                </>
                :
                <>
                    <NoResults/>
                </>
            }
        </>
    )
}