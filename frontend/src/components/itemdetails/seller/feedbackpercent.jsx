import { CircularProgress } from "@mui/material"
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';



function CircularProgressWithLabel(props) {
  return (
    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      <CircularProgress color="success" variant="determinate" {...props} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography
          variant="caption"
          component="div"
          color="white"
        >{Math.round(props.value)}</Typography>
      </Box>
    </Box>
  );
}


export const FeedbackPercent = ({ value }) => {
    return(
        <>
            <CircularProgressWithLabel value={value} />
        </>
    )
}