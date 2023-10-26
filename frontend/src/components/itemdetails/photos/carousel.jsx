
export const Carousel = ({ URLs,setCarouselView }) => {
    // console.log(URLs)
    return (
        <>
            {
                URLs ?
                <>
                    <div style={{
                        top:"0",
                        left:"0",
                        width:"100vw",
                        height:"100vh",
                        position:"fixed",
                        display:"flex",
                        justifyContent:"center",
                        alignItems:"center",
                    }}>
                        <div className="container bg-white" style={{
                                minWidth:"320px",
                                maxWidth:"500px"
                            }} 
                        >
                            <div className='w-100 d-flex justify-content-between'>
                                <p>Product Images</p>
                                {/* <CloseIcon/> */}
                                <button type="button" className="btn-close" aria-label="Close" onClick={()=>{setCarouselView(false)}} />
                            </div>
                            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                                <div className="carousel-inner">
                                    {
                                        URLs.map((url,index) => {
                                            
                                            let className = "carousel-item "
                                            if(index==0) className += "active"

                                            return (
                                                <>
                                                <div key={index} className={className}>
                                                    <img src={url} className="d-block w-100" />
                                                </div>
                                                </>
                                            )
                                        }    
                                        )
                                    }
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    {/* <span className="visually-hidden">Previous</span> */}
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    {/* <span className="visually-hidden">Next</span> */}
                                </button>
                            </div>
                            <div className='d-flex justify-content-end'>
                                <button type="button" className="btn btn-secondary" onClick={()=>{setCarouselView(false)}}>Close</button>
                            </div>
                        </div>
                    </div>
                </>
                :
                <></>
            }
        
        </>
    )
}