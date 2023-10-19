import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


export const DetailsBtnContainer = ({ toggleDetails }) => {
    return(
        <>
            <div className="d-flex justify-content-end w-100">
                <button 
                    type="button" 
                    className="btn btn-light"
                    onClick={()=>toggleDetails(true)}
                    disabled 
                >
                    Details
                    <ArrowForwardIosIcon color="disabled" fontSize='small'/>
                </button>
            </div>
        </>
    )
}