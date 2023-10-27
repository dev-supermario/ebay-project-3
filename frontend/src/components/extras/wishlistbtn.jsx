import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../utils/context';
import { useRequest } from '../../utils/requests';



export const WishListBtn = (props) => {
    
    const { addToFavourites,removeFromFavourites } = useRequest()
    const [addedToCart,setAddedToCart] = useState(false)
    const context = useContext(AppContext)
    const favourites = context.favourites.data
    const setFavourites = context.favourites.setData

    useEffect(()=>{
        let id
        if(props.item){
            id = props.item.id ? props.item.id : props.item["_id"]
        }
        // console.log(id)
        const found = favourites.find(favourite => favourite["_id"]==id)
        // console.log(found)

        if(found) {
            // console.log("inside")
            setAddedToCart(true)
        }
    },[favourites,props])

    return(
        <>
            <button 
                type='button' 
                className='btn'
                onClick={async ()=>{
                    if(!addedToCart){
                        await setFavourites([...favourites,props.item])
                        const res = await addToFavourites(props.item)
                        setAddedToCart(res)
                    }
                    else{
                        const res = await setFavourites(state => state.filter(favourite => favourite["_id"] != props.item.id))
                        await removeFromFavourites({...props.item})
                        await setAddedToCart(res)
                        // Look for a better way to accomplish this, possible redux
                    }                    
                }}
                >
                    {
                        !addedToCart ?
                        <AddShoppingCartIcon style={{backgroundColor:"white",color:"black",width:"60px",height:"40px",padding:"7px 10px 7px 10px",borderRadius:"5px"}}/>
                        :
                        <RemoveShoppingCartIcon style={{backgroundColor:"white",color:"#cb9d06",width:"60px",height:"40px",padding:"7px 10px 7px 10px",borderRadius:"5px"}}/>
                    }
                </button>
        </>
    )
}