
import SearchPage from "./components/searchpage";
import { Results } from "./components/results";
import { AppContext } from "./utils/context";
import { useEffect, useState } from "react";
import { TabsContainer } from "./components/extras/resultbtngroup";
import Spacer from "./components/extras/spacer";
import { WishList } from "./components/wishlist";
import { DetailsBtnContainer } from "./components/extras/detailsbtn";
import { ItemDetails } from "./components/itemdetails";
import { ProgressBar } from "./components/extras/progressbar";
import { useRequest } from "./utils/requests";
import { NoResults } from "./components/extras/noresults";

export default function App(){

    const { getAllFavourites } = useRequest()
    
    const [resultsWishListBtn,setResultsWishListBtn] = useState(true)
    const [showDetails,setShowDetails] = useState(false)
    const [popup,setPopup] = useState(false)

    const [searched,setSearched] = useState("NO")

    const [itemDetails,setItemDetails] = useState(null)
    const [results,setResults] = useState([])
    const [favourites,setFavourites] = useState([])

    useEffect(()=>{
        getAllFavourites()
        .then(res => {
            // console.log(res)
            setFavourites(res.length==0 ? [] : res)
        })
    },[])

    return(
        <>
            <AppContext.Provider value={
                {
                    search: { results,setResults },
                    favourites: {
                        data : favourites,
                        setData : setFavourites
                    },
                    image : {
                        popup:popup,
                        setPopup:setPopup
                    },
                    item : {
                        show : showDetails,
                        enableShow : setShowDetails,
                        data : itemDetails,
                        setData : setItemDetails,
                    }
                }
            } >
                <div className="d-flex flex-column align-items-center py-20 px-10 px-sm-200"
                >
                        <SearchPage
                            setSearched={setSearched}
                        />
                        <Spacer horizontalSpacing={0} verticalSpacing={10} />
                        <TabsContainer 
                            toggle={resultsWishListBtn} 
                            setToggle={setResultsWishListBtn} 
                        />
                        <Spacer horizontalSpacing={0} verticalSpacing={10} />
                        {
                            searched === "PENDING" ?
                            <ProgressBar/>
                            :
                            <></>
                        }
                </div>
                {
                    (results || favourites) && !showDetails ?
                    <>
                        {
                            resultsWishListBtn ?
                            <>
                                {
                                    results.length != 0 ? 
                                    <>
                                        <div className="px-sm-180">
                                            <DetailsBtnContainer 
                                                disabled={itemDetails==null} 
                                                setShowDetails={setShowDetails}
                                            />
                                        </div>
                                    </>
                                    :
                                    <></>
                                }
                            </>
                            :
                            <>
                                {
                                    favourites.length != 0 ? 
                                    <>
                                        <div className="px-sm-180">
                                            <DetailsBtnContainer 
                                                disabled={itemDetails==null} 
                                                setShowDetails={setShowDetails}
                                            />
                                        </div>
                                    </>
                                    :
                                    <></>
                                }
                            </>
                        }
                        <div className="d-flex flex-column align-items-center py-20 px-10 px-sm-230"
                        >
                            {
                                resultsWishListBtn ?
                                <>
                                    {
                                        searched === "YES" ?
                                        <>
                                            {
                                                results.length != 0 ?
                                                <Results/>
                                                :
                                                <NoResults/>
                                            }
                                        </>  
                                        :
                                        <></>
                                    }
                                </>
                                :
                                <>
                                    {
                                        favourites.length != 0 ?
                                        <WishList/>
                                        :
                                        <NoResults/>
                                    }
                                </>
                            }
                        </div>
                    </>
                    :
                    <>
                        <div className="d-flex flex-column align-items-center  px-10 px-sm-230">
                                <ItemDetails setShowDetails={setShowDetails}/>
                        </div>
                    </>
                }
            </AppContext.Provider>
        </>
    )
}