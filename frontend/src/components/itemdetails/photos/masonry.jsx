import { Photo } from "./photo"

export const Masonry = ({ URLs }) => {
    // console.log(URLs)
    return(
        <>
            <div className="container">
                <div 
                    className="d-sm-grid w-100 pt-10 m-0"
                    style={{
                        gridTemplateRows : "masonry",
                        gridTemplateColumns : "auto auto auto",
                        rowGap : "10px"
                    }}
                >
                    {
                        URLs ?
                        URLs.map(url => {
                            return(
                                <>
                                    <Photo key={String(url)} imageURL = {url} />
                                </>
                            )
                        })
                        :
                        <></>
                    }
                </div>
            </div>
        </>
    )
}