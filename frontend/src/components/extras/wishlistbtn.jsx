import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import { useState } from 'react';


export const WishListBtn = (props) => {
    
    const [addedToCart,setAddedToCart] = useState(false)

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