export const Pagination = ({ count,currentPage,setCurrentPage }) => {
    
    const noOfPages = parseInt(count/10) + (count%10 > 0 ? 1 : 0)
    // console.log(noOfPages)

    const renderPageNos = () => {
        const pages = []
        for (let index = 1; index <= noOfPages; index++) {
            pages.push(
                <>
                    <button 
                        className="border-0" 
                        style={{
                            backgroundColor:(currentPage+1==index ? "#229be3":"white"),

                        }} 
                        onClick={()=> setCurrentPage(index-1)}
                        onMouseEnter={(e)=>{
                            if(currentPage+1!=index){
                                const target = e.target
                                target.style.backgroundColor = "lightgray"
                                target.style.textDecoration = "underline"
                            }
                        }}
                        onMouseLeave={(e)=>{
                            if(currentPage+1!=index){
                                const target = e.target
                                target.style.backgroundColor = "white"
                                target.style.textDecoration = ""
                            }
                        }}
                    >
                        {index}
                    </button>
                </>
            )
        }
        return pages
    }
    
    return(
        <>
            {
                noOfPages > 1 ?
                <>
                    <div className="d-flex mt-10">
                        <button 
                            className="border-0" 
                            disabled={currentPage<1 || noOfPages==1} 
                            onClick={()=>setCurrentPage(state => state - 1)}
                            onMouseEnter={(e)=>{
                                
                                    const target = e.target
                                    target.style.backgroundColor = "lightgray"
                                    target.style.textDecoration = "underline"
                            }}
                            onMouseLeave={(e)=>{
                                    const target = e.target
                                    target.style.backgroundColor = "white"
                                    target.style.textDecoration = ""
                            }}
                        >
                                &laquo;  Previous
                            </button>
                            {
                                renderPageNos()
                            }
                        <button 
                            className="border-0" 
                            disabled={currentPage==noOfPages-1 || noOfPages==1} 
                            onClick={()=>setCurrentPage(state => state + 1)}
                            onMouseEnter={(e)=>{
                                const target = e.target
                                target.style.backgroundColor = "lightgray"
                                target.style.textDecoration = "underline"
                            }}
                            onMouseLeave={(e)=>{
                                    const target = e.target
                                    target.style.backgroundColor = "white"
                                    target.style.textDecoration = ""
                            }}
                        >Next   &raquo;
                        </button>
                    </div>
                </>
                :
                <></>
            }
        </>
    )
}