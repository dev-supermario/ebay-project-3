import SearchIcon from '@mui/icons-material/Search';
import ClearAllIcon from '@mui/icons-material/ClearAll';
import { useContext } from 'react';
import { AppContext } from '../../utils/context';


export default function ButtonGroup(props){

    const context = useContext(AppContext)

    return(
        <>
            <div className="col-12">
                <button className="btn btn-light" 
                    type="button"
                    disabled={props.searchDisabled}
                    onClick={async ()=>{
                        const data = await props.handleSearchClick()
                        props.setSearched(true)
                        setTimeout(()=>{
                            context.search.setResults(data)
                            props.setSearched(false)
                        },1000)
                    }}
                ><SearchIcon/>Search</button>
                <button className="btn btn-light ms-35"
                    type="button"
                    onClick={()=>{
                        props.handleClearClick()
                        context.search.setResults(null)
                    }}
                ><ClearAllIcon/>Clear</button>
            </div>
        </>
    )
}