import SearchIcon from '@mui/icons-material/Search';
import ClearAllIcon from '@mui/icons-material/ClearAll';
import { useContext } from 'react';
import { AppContext } from '../../utils/context';


export default function ButtonGroup(props){

    const context = useContext(AppContext)
    // console.log(props.searchDisabled)

    return(
        <>
            <div className="col-12">
                <button className="btn btn-light" 
                    type="button"
                    disabled={props.searchDisabled}
                    onClick={async ()=>{
                        const data = await props.handleSearch()
                        // console.log(data)
                        if(props.validateForm() && Object.keys(data).length != 0){
                            props.setSearched("PENDING")
                            setTimeout(()=>{
                                context.search.setResults(data.item)
                                props.setSearched("YES")
                            },1000)
                        }
                    }}
                ><SearchIcon/>Search</button>

                <button className="btn btn-light ms-35"
                    type="button"
                    onClick={()=>{
                        // console.log("click")
                        props.handleClearClick()
                        context.search.setResults([])
                        props.setSearched("NO")
                        
                    }}
                ><ClearAllIcon/>Clear</button>
            </div>
        </>
    )
}