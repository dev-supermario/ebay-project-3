import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import { useState } from 'react';

export const WishListBtn = () => {
    
    const [addToCart,setAddToCart] = useState(true)

    return(
        <>
            <button 
                type='button' 
                className='btn'
                onClick={()=>setAddToCart(!addToCart)}
                >
                    {
                        addToCart ?
                        <AddShoppingCartIcon style={{backgroundColor:"white",color:"black",width:"60px",height:"40px",padding:"7px 10px 7px 10px",borderRadius:"5px"}}/>
                        :
                        <RemoveShoppingCartIcon style={{backgroundColor:"white",color:"#cb9d06",width:"60px",height:"40px",padding:"7px 10px 7px 10px",borderRadius:"5px"}}/>
                    }
                </button>
        </>
    )
}