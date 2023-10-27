import { CircularProgress } from "@mui/material"


export const FeedbackPercent = ({ value }) => {
    return(
        <>
            <CircularProgress variant="determinate" thickness="2" color="success" value={value} >{value}</CircularProgress>
        </>
    )
}