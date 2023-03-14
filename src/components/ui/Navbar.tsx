import { AppBar, IconButton, Toolbar, Typography } from "@mui/material"
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { useUIContext,sideOpenBar } from "@/context/ui";

export const Navbar = () => {

const {actionUI} = useUIContext();

return (
    <AppBar position="sticky">

   <Toolbar>
    <IconButton size="large" edge='start' onClick={()=>sideOpenBar(actionUI)}>
        <MenuOutlinedIcon/>
    </IconButton>

    <Typography variant='h6' component='h1'>OpenJira</Typography>

   </Toolbar>


    </AppBar>
  )
}