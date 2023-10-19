const darkBtn = {
    color : "white",
    backgroundColor : "black"
}

const lightBtn = {
    color : "black",
    backgroundColor : "white"
}


export const TabsContainer = (props)=>{

    return(
        <>
            <div className="">
                <button type="button" 
                    style={props.toggle ? darkBtn : lightBtn}  
                    className="btn border-0"
                    onClick={()=>props.setToggle(true)}
                
                >Results</button>
                <button type="button" 
                    style={props.toggle ? lightBtn : darkBtn} 
                    className="btn border-0"
                    onClick={()=>props.setToggle(false)}
                >Wish List</button>
            </div>
        </>
    )
}