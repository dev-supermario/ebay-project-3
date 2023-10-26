import { useEffect, useState } from "react"
import { useRequest } from "../../../utils/requests"
import { Carousel } from "./carousel"
import { Masonry } from "./masonry"

export const Photos = ({ keyword,layout,setCarouselView }) => { 

    const { getPhotos } = useRequest()
    const [URLs,setURLs] = useState([])


    useEffect(() => {
        getPhotos({keyword})
        .then((res) => setURLs(res.images ? res.images : []))
    },[keyword])


    return(
        <>

            {
                layout == "masonry" ?
                <>
                    <Masonry URLs={URLs} />
                </>
                :
                <></>
            }
            {
                layout=="carousel"  ?
                <>
                    <Carousel URLs={URLs} setCarouselView={setCarouselView} />
                </>
                :
                <></>
            }
        </>
    )
}
