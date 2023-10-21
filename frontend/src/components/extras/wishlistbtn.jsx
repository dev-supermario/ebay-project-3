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
        const found = favourites.find(favourite => favourite["_id"]==props.id)
        if(found) {
            console.log("found")
            setAddedToCart(true)
        }
        else {
            console.log("not found")
            setAddedToCart(false)
        }
    },[favourites])

    return(
        <>
            <button 
                type='button' 
                className='btn'
                onClick={async ()=>{
                    if(!addedToCart){
                        await setFavourites([...favourites,{
                            _id : props.id, 
                            title : props.title,
                            imageURL: props.imageURL, 
                            price : props.price,
                            shipping : props.shipping
                        }])
                        const res = await addToFavourites({...props})
                        setAddedToCart(res)
                    }
                    else{
                        await setFavourites(state => state.filter(favourite => favourite["_id"] != props.id))
                        await removeFromFavourites({...props})
                        // await setAddedToCart(res)
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