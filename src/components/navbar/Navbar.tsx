import {AppBar, Box,Toolbar, Typography} from "@mui/material";
import WelcomeMessage from "../combo_box/WelcomeMessage";

const Navbar=(props:any)=>{
    return(
        <AppBar position={"static"} color={"primary"}>
            <Toolbar>
                <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"} width={1} py={2}>
                    <Typography variant={"h6"}>My Movies</Typography>
                    <Box textAlign={"center"}>
                        <WelcomeMessage person={props.name} country={"VietNam"}/>
                    </Box>
                </Box>
            </Toolbar>
        </AppBar>
    )
}
export default Navbar;