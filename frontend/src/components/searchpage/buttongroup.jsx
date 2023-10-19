import SearchIcon from '@mui/icons-material/Search';
import ClearAllIcon from '@mui/icons-material/ClearAll';
import { useContext } from 'react';
import { ResultsContext } from '../../utils/context';


export default function ButtonGroup(props){

    const resultsContext = useContext(ResultsContext)

    return(
        <>
            <div className="col-12">
                <button className="btn btn-light" 
                    type="button"
                    onClick={async ()=>{
                        const data = await props.handleSearchClick()
                        props.setSearched(true)
                        setTimeout(()=>{
                            resultsContext.setData(data)
                            props.setSearched(false)
                        },1000)
                    }}
                ><SearchIcon/>Search</button>
                <button className="btn btn-light ms-35"
                    type="button"
                    onClick={()=>{
                        props.handleClearClick()
                        resultsContext.setData(null)
                    }}
                ><ClearAllIcon/>Clear</button>
            </div>
        </>
    )
}