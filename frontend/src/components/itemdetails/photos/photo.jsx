export const Photo = ({ imageURL }) => {

    return(
        <>
            <div 
                className="col-12 col-sm-4 p-0 text-center h-auto"
                style={{
                    minWidth:"320px",
                    // maxWidth:"400px",
                }}
            >
                <img 
                    className="w-100 h-auto"
                    style={{
                        display:"inline-block",
                        border:"12px solid rgba(33,37,41)"
                    }} 
                    src={imageURL} />
            </div>
        </>
    )
}