import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../utils/context';


export const WishListBtn = (props) => {
    
    const [addedToCart,setAddedToCart] = useState(false)
    const context = useContext(AppContext)
    const favourites = context.favourites.data
    // const addToFavourites = context.favourites.setData
    // console.log(props.data)

    useEffect(()=>{
        const found = favourites.find(favourite => favourite["_id"]==props.id)
        if(found) setAddedToCart(true)
        else setAddedToCart(false)
    },[])

    return(
        <>
            <button 
                type='button' 
                className='btn'
                onClick={async ()=>{
                    if(!addedToCart){
                        const res = await props.addToFavourites()
                        setAddedToCart(res)
                    }
                    else{
                        const res = await props.removeFromFavourites()
                        setAddedToCart(res)
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