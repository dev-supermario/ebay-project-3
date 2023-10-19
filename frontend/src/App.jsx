
import SearchPage from "./components/searchpage";
import { Results } from "./components/results";
import { ResultsContext } from "./utils/context";
import { useState } from "react";
import { TabsContainer } from "./components/extras/resultbtngroup";
import Spacer from "./components/extras/spacer";
import { WishList } from "./components/wishlist";
import { DetailsBtnContainer } from "./components/extras/detailsbtn";
import { ItemDetails } from "./components/itemdetails";
import { ProgressBar } from "./components/extras/progressbar";

export default function App(){

    const [data,setData] = useState("")
    const [resultsWishListBtn,setResultsWishListBtn] = useState(true)
    const [showDetails,setShowDetails] = useState(false)
    const [searched,setSearched] = useState(false)

    return(
        <>
            <ResultsContext.Provider value={{data,setData}} >
                <div className="d-flex flex-column align-items-center py-20 px-10 px-sm-100">
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
                            searched ?
                            <ProgressBar
                                setSearched={setSearched}
                            />
                            :
                            <></>
                        }
                </div>
                <Spacer verticalSpacing="10" />
                {
                    data ?
                    <>
                        <div className="px-sm-250">
                            <DetailsBtnContainer 
                                toggleDetails={setShowDetails} 
                            />
                        </div>
                        <div className="d-flex flex-column align-items-center py-20 px-10 px-sm-320">
                            {
                                resultsWishListBtn && !showDetails ?
                                <Results/>
                                :
                                <WishList/>
                            }
                            {
                                showDetails && !resultsWishListBtn?
                                <ItemDetails/>
                                :
                                <></> 
                            }
                        </div>
                    </>
                    :
                    <></>
                }
            </ResultsContext.Provider>
        </>
    )
}