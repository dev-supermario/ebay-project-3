import { useContext, useState } from 'react';
import ButtonGroup from './buttongroup';
import { LocationGroup } from './location';
import { useRequest } from '../../utils/requests';
import { AppContext } from '../../utils/context';




export default function Form({ setSearched,setResultsWishListBtn }){

    const context = useContext(AppContext)
    const setShowDetails = context.enableShow
    const { handleSearch } = useRequest()
    const [keyword,setKeyword] = useState("")
    const [categoryOptions,setCategoryOptions] = useState("AllCategories")
    const [conditionNew,setConditionNew] = useState(false)
    const [conditionUsed,setConditionUsed] = useState(false)
    const [conditionUnspecified,setConditionUnspecified] = useState(false)
    const [localPickup,setLocalPickup] = useState(false)
    const [freeShipping,setFreeShipping] = useState(false)
    const [distance,setDistance]  = useState("10")
    const [currentLocationOrManual,setCurrentLocationOrManual] = useState(true)
    const [zipcodeText,setZipcodeText] = useState("")
    const [zipcodeInput,setZipcodeInput] = useState("")
    const [selected,setSelected] = useState(false)



    const handleClearClick = ()=>{
        setKeyword("")
        setCategoryOptions("AllCategories")
        setConditionNew(false)
        setConditionUsed(false)
        setConditionUnspecified(false)
        setLocalPickup(false)
        setFreeShipping(false)
        setDistance("10")
        setCurrentLocationOrManual(true)
        setZipcodeInput("")
        setShowDetails(false)
        setResultsWishListBtn(true)
    }

    const validateForm = () => {
        if(parseFloat(distance)<0){
            alert("Distance cannot be negative")
            return false
        }

        return true
    }



    return(
        <>
            <div className="row gy-20 pb-15 px-30 px-sm-300">
                <div className="col-12 d-sm-flex">
                    <label className="form-label col-sm-4">Keyword<span className="text-danger" htmlFor="keyword">*</span></label>
                    <input
                        id='keyword' 
                        className="form-control" 
                        placeholder="Enter Product Name (eg. Iphone 8)" 
                        type="text" 
                        value={keyword} 
                        onChange={(e)=>setKeyword(e.target.value)}
                    />
                </div>
                <div className="col-12 d-sm-flex">
                    <label className="form-label col-sm-4" htmlFor='category'>Category</label>
                    <div className="col-sm-3">
                        <select
                            id='category' 
                            className="form-select"
                            value={categoryOptions}
                            onChange={(e)=>setCategoryOptions(e.target.value)}
                        >
                            <option value="AllCategories">All Categories</option>
                            <option value="Art">Art</option>
                            <option value="Baby">Baby</option>
                            <option value="Books">Books</option>
                            <option value="Clothing">Clothing, Shoes & Accessories</option>
                            <option value="Computers">Computers/Tablets & Networking</option>
                            <option value="Health">Health & Beauty</option>
                            <option value="Music">Music</option>
                            <option value="Video">Video Games & Consoles</option>
                        </select>
                    </div>
                </div>
                <div className="col-12 d-sm-flex">
                        <label className="form-label col-12 col-sm-4">Condition</label>
                        <div className="col-12 d-flex">
                            <div className="col-sm-3 w-auto">
                                <input className="form-check-input" 
                                    type="checkbox"
                                    value={conditionNew}
                                    onChange={(e)=>setConditionNew(e.target.value)} 
                                />
                                <label className="form-check-label ms-5" >New</label>
                            </div>
                            <div className="col-sm-3 w-auto ms-10">
                                <input className="form-check-input" 
                                    type="checkbox"
                                    value={conditionUsed}
                                    onChange={(e)=>setConditionUsed(e.target.value)} 
                                />
                                <label className="form-check-label ms-5" >Used</label>
                            </div>
                            <div className="col-sm-3 w-auto ms-10">
                                <input className="form-check-input" 
                                    type="checkbox"
                                    value={conditionUnspecified}
                                    onChange={(e)=>setConditionUnspecified(e.target.value)} 
                                />
                                <label className="form-check-label ms-5" >Unspecified</label>
                            </div>
                        </div>
                </div>
                <div className="col-12 d-sm-flex">
                        <label className="form-label col-12 col-sm-4">Shipping Options</label>
                        <div className="col-12 d-flex">
                            <div className="d-flex col-sm-3">
                                <input className="form-check-input" 
                                    type="checkbox"
                                    value={localPickup}
                                    onChange={(e)=>setLocalPickup(e.target.value)}
                                />
                                <label className="form-check-label ms-5" >Local Pickup</label>
                            </div>
                            <div className="d-flex col-sm-3 ms-10 ms-sm-0">
                                <input className="form-check-input" 
                                    type="checkbox"
                                    value={freeShipping}
                                    onChange={(e)=>setFreeShipping(e.target.value)} 
                                />
                                <label className="form-check-label ms-5" >Free Shipping</label>
                            </div>
                        </div>
                </div>
                <div className="col-12 d-sm-flex">
                    <label className="form-label col-sm-4">Distance (Miles)</label>
                    <div className="col-sm-3">
                        <input className="form-control" 
                            type="number" 
                            placeholder="10" 
                            value={distance}
                            onChange={(e)=>setDistance(e.target.value)}
                        />
                    </div>
                </div>
                <LocationGroup
                    currentLocationOrManual={currentLocationOrManual}
                    setCurrentLocationOrManual={setCurrentLocationOrManual} 
                    zipcodeText={zipcodeText}
                    setZipcodeText={setZipcodeText}
                    zipcodeInput={zipcodeInput}
                    selected={selected}
                    setSelected={setSelected}
                    setZipcodeInput={setZipcodeInput}
                />
                <ButtonGroup 
                    handleClearClick={handleClearClick}
                    searchDisabled = {keyword==""}
                    setSearched={setSearched}
                    validateForm={validateForm}
                    handleSearch={handleSearch(
                        {
                            keyword,
                            categoryOptions,
                            conditionNew,
                            conditionUsed,
                            conditionUnspecified,
                            localPickup,
                            freeShipping,
                            distance,
                            zipcodeText
                        }
                    )}
                />
            </div>
        </>
    )
}