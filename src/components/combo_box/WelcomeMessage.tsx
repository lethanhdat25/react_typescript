import {Box} from "@mui/material";
interface MessageProps{
    person:string|null,
    country?:string|null;
}
const WelcomeMessage=(props:MessageProps)=>{
    return(
        <Box mb={1}>
            Welcome {props.person} form {props.country}
        </Box>
    )
}
export default WelcomeMessage;