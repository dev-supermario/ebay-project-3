import SearchIcon from '@mui/icons-material/Search';
import ClearAllIcon from '@mui/icons-material/ClearAll';

export default function ButtonGroup({
    handleSearchClick,
    handleClearClick
}){
    return(
        <>
            <div className="col-12">
                <button className="btn btn-light" 
                    type="button"
                    onClick={()=>handleSearchClick()}
                ><SearchIcon/>Search</button>
                <button className="btn btn-light ms-35"
                    type="button"
                    onClick={()=>{
                        console.log("clear")
                        handleClearClick()
                    }}
                ><ClearAllIcon/>Clear</button>
            </div>
        </>
    )
}