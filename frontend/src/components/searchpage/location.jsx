import { useCallback, useEffect, useRef, useState } from "react";
import { useRequest } from "../../utils/requests";
import { Zipcode } from "./zipcode";


export const LocationGroup = (props) => {

    const { fetchIp,getZipcodes } = useRequest()
    const [IP,setIP] = useState("")
    const currentLocationRef = useRef(null)
    const [zipcodes,setZipcodes] = useState([])

    const fetchLocation = useCallback(async (IP) => {
        if(currentLocationRef.current.checked){
            const URL = `https://api.ipgeolocation.io/ipgeo?apiKey=77371e5d1f4644f1a38b9132c1e2cf11&ip=${IP}`
            fetch(URL)
            .then(res => res.json())
            .then(res => {
                // console.log(res)
                props.setZipcodeText(res.zipcode)
            })
        }
    },[IP])

    useEffect(() => {
        fetchIp()
        .then(data => {
            setIP(data.ip)
            return data.ip
        })
        .then((ip)=>fetchLocation(String(ip)))
    }, [props.currentLocationOrManual]);

    useEffect(()=>{
        if(props.zipcodeInput.length<5){
            props.setSelected(false)
        }
        if(!props.currentLocationOrManual && !props.selected){
            // console.log("get zip")
            getZipcodes(props.zipcodeInput)
            .then((res) => res.json())
            .then(res => setZipcodes(res))
        }
    },[props.zipcodeInput])


    





    return(
        <>
            <div className="col-12 d-sm-flex">
                <label className="form-label col-sm-4">From<span className="text-danger">*</span></label>
                <div className='col-sm-8'>
                    <div>
                        <input className="form-check-radio" 
                            ref={currentLocationRef}
                            type="radio"
                            value={props.currentLocationOrManual}
                            checked={props.currentLocationOrManual}
                            onChange={(e)=>{
                                props.setCurrentLocationOrManual(e.target.value)
                                props.setZipcodeInput("")
                                fetchLocation()
                            }}
                        />
                        <label className="form-check-label ms-5" >&lsquo;Current Location&rsquo;</label>
                    </div>
                    <div>
                        <input className="form-check-radio" 
                            type="radio"
                            value={!props.currentLocationOrManual}
                            checked={!props.currentLocationOrManual}
                            onChange={()=>{
                                props.setCurrentLocationOrManual(!props.currentLocationOrManual)
                            }}
                        />
                        <label className="form-check-label ms-5" >Other. Please specify zip code:</label>
                    </div>
                    <div>
                        <input className="form-control mt-10"
                            type="text"
                            maxLength="5" 
                            pattern="/^(\d{5})?$/"
                            disabled={props.currentLocationOrManual} 
                            value={props.zipcodeInput}
                            required
                            style={{
                                border : (!props.currentLocationOrManual && props.zipcodeInput.length==0 ? "2px solid #60232c" : "")
                                // border: "2px solid red"
                            }}
                            onChange={(e)=>{
                                props.setZipcodeText(e.target.value)
                                props.setZipcodeInput(e.target.value)
                            }}
                        />
                        {
                            !props.currentLocationOrManual && props.zipcodeInput.length==0 ?
                            <p style={{position:"absolute",fontSize:"12px",color:"#8c3f46"}}>Please enter a zip code.</p>
                            :
                            <></>
                        }
                    </div>
                    {
                        zipcodes.length > 0 && props.zipcodeInput?
                        <>
                            <div 
                                className="shadow border border-1 rounded-bottom bg-white text-black w-100 px-12 pt-10" 
                                style={{
                                    position:"absolute",
                                    minWidth:"300px",
                                    maxWidth:"480px",
                                    zIndex:"1"

                                }} 
                            >
                                {
                                    zipcodes.map(zipcode => 
                                        <Zipcode key={String(zipcode)} 
                                            text={zipcode} 
                                            setZipcodeText={props.setZipcodeText} 
                                            setZipcodeInput={props.setZipcodeInput} 
                                            setZipcodes={setZipcodes}
                                            setSelected={props.setSelected}  
                                        />   
                                    )
                                }

                            </div>
                        </>
                        :
                        <></>
                    }
                </div>
            </div>
        </>
    )
}