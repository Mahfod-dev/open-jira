import { useMemo } from "react";
import { Paper,List } from "@mui/material"
import { EntryCard } from "./EntryCard"
import { EntryStatus } from '../../../interface';
import { useEntriesContext } from '@/context/entries';

interface EntryListProps {
	status: EntryStatus;
}

export const EntryList = ({ status }: EntryListProps) => {
	const { state } = useEntriesContext();


	const entriesByStatus = useMemo(()=>
		state.entries.filter((entry) => entry.status === status),
		[state.entries,status]
	);

	

	return (
		<div>
			<Paper
				sx={{
					height: 'calc(100vh - 150px)',
					overflow: 'scroll',
					backgroundColor: 'transparent',
					padding: '1px 3px',
				}}
			>
				<List sx={{ opacity: 1 }}>
					{entriesByStatus.map((entry) => (
						<EntryCard key={entry._id} {...entry} />
					))}
				</List>
			</Paper>
		</div>
	);
};