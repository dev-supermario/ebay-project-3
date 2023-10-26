import { Photo } from "./photo"

export const Masonry = ({ URLs }) => {
    // console.log(URLs)
    return(
        <>
            <div className="container">
                <div 
                    className="row w-100 pt-10 m-0 gy-10"
                    // style={{columnGap:"10px"}}
                >
                    {
                        URLs ?
                        URLs.map(url => {
                            // console.log(url)
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