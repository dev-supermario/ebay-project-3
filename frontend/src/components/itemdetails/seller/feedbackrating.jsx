import StarsIcon from '@mui/icons-material/Stars';

export const FeedbackRatingStar = ({ value }) => {
    return(
        <>
            <StarsIcon 
                // fontSize='60px' 
                htmlColor={value} 
            />
        </>
    )
}