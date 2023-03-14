import { useState } from 'react';
import { Button, Box, TextField } from '@mui/material';
import SaveOutlinedIcon from '@mui/icons-material/SaveAltOutlined';
import AddIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import { useEntriesContext,addEntry } from '@/context/entries';

export const NewEntry = () => {

	const { dispatch } = useEntriesContext();



	const [isAdding, setAdding] = useState(false);
	const [inputValue,setInputValue] = useState('')
	const [isTouched,setIsTouched] = useState(false)



	const onTextFieldChanged = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setInputValue(e.target.value)
		setIsTouched(true)
	}

	const onSave = () => {

		if(inputValue.length === 0) return
		
		addEntry(dispatch,inputValue)
		setAdding(false)
		setIsTouched(false)
		setInputValue('')

	}

	return (
		<Box sx={{ marginBottom: 2, paddingX: 1 }}>
			{isAdding ? (
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
							onClick={() => setAdding(!isAdding)}
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
					onClick={() => setAdding(!isAdding)}
					fullWidth
					variant='outlined'
				>
					Entry
				</Button>
			)}
		</Box>
	);
	
};
