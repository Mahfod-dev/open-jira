import { useState } from 'react';
import { Button, Box, TextField } from '@mui/material';
import SaveOutlinedIcon from '@mui/icons-material/SaveAltOutlined';
import AddIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import { useEntriesContext,addEntry } from '@/context/entries';
import { setIsAddingEntry,useUIContext } from '@/context/ui';

export const NewEntry = () => {

	const {dispatch,state} = useEntriesContext();
	const { actionUI,uiState } = useUIContext();
	

	const {isAddingEntry} = uiState



	
	const [inputValue,setInputValue] = useState('')
	const [isTouched,setIsTouched] = useState(false)



	const onTextFieldChanged = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setInputValue(e.target.value)
		setIsTouched(true)
	}

	const onSave = () => {

		if(inputValue.length === 0) return
		
		addEntry(dispatch,inputValue)
		setIsAddingEntry(actionUI,false)
		setIsTouched(false)
		setInputValue('')

	}

	return (
		<Box sx={{ marginBottom: 2, paddingX: 1 }}>
			{isAddingEntry ? (
				<>
					<TextField
						fullWidth
						sx={{ marginTop: 2, marginBottom: 1 }}
						placeholder='new entry'
						autoFocus
						multiline
						error={isTouched && inputValue.length === 0}
						label='New Entry'
						helperText='Add a new entry'
						value={inputValue}
						onChange={onTextFieldChanged}
						onBlur={() => setIsTouched(true)}
					/>
					<Box display='flex' justifyContent='space-between'>
						<Button
							variant='text'
							onClick={() => setIsAddingEntry(actionUI,false)}
						>
							Delete
						</Button>

						<Button
							variant='outlined'
							color='secondary'
							endIcon={<SaveOutlinedIcon />}
							onClick={onSave}
						>
							Save
						</Button>
					</Box>
				</>
			) : (
				<Button
					startIcon={<AddIcon />}
					onClick={() => setIsAddingEntry(actionUI,true)}
					fullWidth
					variant='outlined'
				>
					Entry
				</Button>
			)}
		</Box>
	);
	
};
