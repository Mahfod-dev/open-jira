import { Button,Box, TextField } from "@mui/material"
import  SaveOutlinedIcon from "@mui/icons-material/SaveAltOutlined"
import AddIcon from "@mui/icons-material/AddCircleOutlineOutlined";

export const NewEntry = () => {
  return (
		<Box sx={{marginBottom:2,paddingX:1}}>

            <Button startIcon={<AddIcon/>} fullWidth variant="outlined">
                     Entry
            </Button>

            <TextField
            fullWidth
            sx={{marginTop:2,marginBottom:1}}
            placeholder="new entry"
            autoFocus
            multiline
            label="New Entry"
            helperText="Add a new entry"
            />

			<Box display='flex' justifyContent='space-between'>
				<Button
					variant="text"
					
					
				>
					Delete
				</Button>

				<Button
					variant='outlined'
					color='secondary'
					endIcon={<SaveOutlinedIcon />}
				>
					Save
				</Button>
			</Box>
		</Box>
  );
}