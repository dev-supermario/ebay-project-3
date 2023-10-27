
export const Attribute = ({ name,value }) => {

    return (
        <>
            <div className="d-flex flex-column flex-sm-row" style={{
                    backgroundColor:"#282a2e"
                }}>
                <div 
                    className="text-start ps-10 py-10 fw-bold"
                    style={{
                        borderBottom:"2px solid #2a2e34",
                        minHeight:"44px",
                        minWidth:"200px",
                    }}    
                >
                    {name}
                </div>
                <div 
                    className="text-start ps-10 py-10 w-100 ps-sm-250"
                    style={{
                        borderBottom:"2px solid #2a2e34",
                        minHeight:"44px",
                    }}  
                >
                    {value}
                </div>
            </div>
        </>
    )
}