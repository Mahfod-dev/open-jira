import { useMemo } from "react";
import { Paper,List } from "@mui/material"
import { EntryCard } from "./EntryCard"
import { EntryStatus } from '../../../interface';
import { useEntriesContext,updateEntry } from '@/context/entries';
import { useUIContext,endDragging } from "@/context/ui";


import styles from './EntryList.module.css'


interface EntryListProps {
	status: EntryStatus;
}

export const EntryList = ({ status }: EntryListProps) => {
	const { state,dispatch } = useEntriesContext();

	const {uiState,actionUI} = useUIContext();

	const {isDragging} = uiState;

	const entriesByStatus = useMemo(()=>
		state.entries.filter((entry) => entry.status === status),
		[state.entries,status]
	);

	
	const onDropEntry = (event: React.DragEvent<HTMLDivElement>) => {
		const entryId = event.dataTransfer.getData('text');

		const entry = state.entries.find((entry) => entry._id === entryId)!;

		entry.status = status;

		updateEntry(dispatch,entry)
		endDragging(actionUI)

	};

	const allowDrop = (event: React.DragEvent<HTMLDivElement>) => {
		event.preventDefault();
	};


	return (
		<div
			onDrop={onDropEntry}
			onDragOver={allowDrop}
			className={isDragging ? styles.dragging : ''}
		>
			<Paper
				sx={{
					height: 'calc(100vh - 150px)',
					overflow: 'scroll',
					backgroundColor: 'transparent',
					padding: '2px 5px',
				}}
			>
				<List sx={{ opacity: isDragging ? 0.2 :1,transition:'all .3s' }}>
					{entriesByStatus.map((entry) => (
						<EntryCard key={entry._id} {...entry} />
					))}
				</List>
			</Paper>
		</div>
	);
};