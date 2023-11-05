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

    // console.log(favourites)

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
                className='btn p-0'
                onClick={async (e)=>{
                    e.stopPropagation()
                    if(!addedToCart){
                        const {id,...rest} = props.item
                        await setFavourites([...favourites,{_id:id,...rest}])
                        const res = await addToFavourites({_id:id,...rest})
                        setAddedToCart(res)
                    }
                    else{
                        let id = props.item.id ? props.item.id : props.item["_id"]
                        const res = await setFavourites(state => state.filter(favourite => favourite["_id"] != id))
                        await removeFromFavourites({...props.item})
                        await setAddedToCart(res)
                        // Look for a better way to accomplish this, possible redux
                    }                    
                }}
                >
                    {
                        !addedToCart ?
                        <AddShoppingCartIcon style={{
                            backgroundColor:"#f5f7f9",
                            color:"black",
                            width:"60px",height:"40px",
                            padding:"7px 7px 7px 7px",
                            borderRadius:"5px"
                        }}/>
                        :
                        <RemoveShoppingCartIcon style={{
                            backgroundColor:"#f5f7f9",
                            color:"#cb9d06",
                            width:"60px",height:"40px",
                            padding:"7px 7px 7px 7px",
                            borderRadius:"5px"
                        }}/>
                    }
                </button>
        </>
    )
}