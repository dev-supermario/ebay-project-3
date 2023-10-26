
const darkBtn = {
    color : "white",
    backgroundColor : "black"
}

const lightBtn = {
    color : "black",
    backgroundColor : "white"
}

export const Tabs = ({ selected,setSelected }) => {


    return(
        <>
            <div className="d-flex flex-wrap justify-content-end w-100 border-bottom border-1">
                <Button 
                    status={selected} 
                    setStatus={setSelected}
                    text={"Product"}
                />
                <Button 
                    status={selected} 
                    setStatus={setSelected}
                    text={"Photos"}
                />
                <Button 
                    status={selected} 
                    setStatus={setSelected}
                    text={"Shipping"}
                />
                <Button 
                    status={selected} 
                    setStatus={setSelected}
                    text={"Seller"}
                />
                <Button 
                    status={selected} 
                    setStatus={setSelected}
                    text={"Similar Products"}
                />
            </div>
        </>
    )
}

const Button = ({ status,text,setStatus }) => {
    return(
        <>
            <button
                style={ status==text ? darkBtn : lightBtn}  
                className="border-0 px-7 px-sm-20 py-6 py-sm-8 rounded-top"
                onClick={()=>setStatus(text)}
            >
                {text}
            </button>
        </>
    )
}