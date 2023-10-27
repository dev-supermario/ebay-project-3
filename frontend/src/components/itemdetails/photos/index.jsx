import { useEffect, useState } from "react"
import { useRequest } from "../../../utils/requests"
import { Masonry } from "./masonry"

export const Photos = ({ keyword }) => { 

    const { getPhotos } = useRequest()
    const [URLs,setURLs] = useState([])


    useEffect(() => {
        getPhotos({keyword})
        .then((res) => setURLs(res.images ? res.images : []))
    },[keyword])


    return(
        <>
             <Masonry URLs={URLs} />
        </>
    )
}
