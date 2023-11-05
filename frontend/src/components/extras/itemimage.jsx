
export const ItemImage = (props) => {


    return (
        <>
            <div 
                className="d-flex justify-content-center align-items-center pe-20 pe-sm-60"
                style={{
                    minWidth:"120px",minHeight:"120px",
                }}
                
            >
                <a href={props.imageURL} target="_blank" rel="noreferrer">
                    <img 
                        src={props.imageURL} 
                        className="" 
                        style={{
                            minWidth:"160px",minHeight:"160px",
                            maxWidth:"160px" , maxHeight:"160px"
                        }}
                    />
                </a>
            </div>
        </>
    )
}