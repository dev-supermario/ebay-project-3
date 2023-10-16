import { useState } from 'react';
import ButtonGroup from './buttongroup';
import { handleSearchClick } from '../../fetch';



export default function Form(){

    const [keyword,setKeyword] = useState("")
    const [categoryOptions,setCategoryOptions] = useState("AllCategories")
    const [conditionNew,setConditionNew] = useState(false)
    const [conditionUsed,setConditionUsed] = useState(false)
    const [conditionUnspecified,setConditionUnspecified] = useState(false)
    const [localPickup,setLocalPickup] = useState(false)
    const [freeShipping,setFreeShipping] = useState(false)
    const [distance,setDistance]  = useState("10")
    const [currentLocation,setCurrentLocation] = useState(false)
    const [zipcodeRadio,setZipcodeRadio] = useState(false)
    const [zipcodeText,setZipcodeText] = useState("")


    const handleClearClick = ()=>{
        setKeyword("")
        setCategoryOptions("AllCategories")
        setConditionNew(false)
        setConditionUsed(false)
        setConditionUnspecified(false)
        setLocalPickup(false)
        setFreeShipping(false)
        setDistance("10")
        setCurrentLocation(false)
        setZipcodeRadio(false)
        setZipcodeText("")
    }


    return(
        <>
            <div className="row gy-20 pb-15 px-30 px-sm-300">
                <div className="col-12 d-sm-flex">
                    <label className="form-label col-sm-4">Keyword<span className="text-danger">*</span></label>
                    <input 
                        className="form-control" 
                        placeholder="Enter Product Name (eg. Iphone 8)" 
                        type="text" 
                        value={keyword} 
                        onChange={(e)=>setKeyword(e.target.value)}
                    />
                </div>
                <div className="col-12 d-sm-flex">
                    <label className="form-label col-sm-4">Category</label>
                    <div className="col-sm-3">
                        <select className="form-select"
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
                <div className="col-12 d-sm-flex">
                    <label className="form-label col-sm-4">From<span className="text-danger">*</span></label>
                    <div className='col-sm-8'>
                        <div>
                            <input className="form-check-radio" 
                                type="radio"
                                value={currentLocation}
                                checked={currentLocation && !zipcodeRadio}
                                onChange={(e)=>{
                                    setCurrentLocation(e.target.value)
                                    setZipcodeRadio(false)
                                }}
                            />
                            <label className="form-check-label ms-5" >&lsquo;Current Location&rsquo;</label>
                        </div>
                        <div>
                            <input className="form-check-radio" 
                                type="radio"
                                value={zipcodeRadio}
                                checked={!currentLocation && zipcodeRadio}
                                onChange={(e)=>{
                                    setZipcodeRadio(e.target.value)
                                    setCurrentLocation(false)
                                }}
                            />
                            <label className="form-check-label ms-5" >Other. Please specify zip code:</label>
                        </div>
                        <input className="form-control mt-10" 
                            type="text" 
                            disabled={!zipcodeRadio} 
                            value={zipcodeText}
                            onChange={(e)=>setZipcodeText(e.target.value)}
                        />
                    </div>
                </div>
                <ButtonGroup 
                    handleClearClick={handleClearClick} 
                    handleSearchClick={handleSearchClick}
                />
            </div>
        </>
    )
}