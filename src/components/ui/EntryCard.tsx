
import { startDragging,endDragging,useUIContext } from "@/context/ui";
import { Card, CardActionArea, CardActions, CardContent, Typography } from "@mui/material"

export const EntryCard = ({ description, _id }: { description: string,_id:string }) => {


	const {actionUI} = useUIContext();





	const onDragStart = (event: React.DragEvent<HTMLDivElement>) => {
		console.log(event.dataTransfer)

		event.dataTransfer.setData('text', _id);


		startDragging(actionUI);

	};

	const onDragEnd = (event: React.DragEvent<HTMLDivElement>) => {
		event.dataTransfer.clearData();

		endDragging(actionUI);
	};

	return (
		<Card sx={{ marginBottom: 1 }} draggable onDragStart={onDragStart} onDragEnd={onDragEnd}>
			<CardActionArea>
				<CardContent>
					<Typography sx={{ whiteSpace: 'pre-line' }}>
						{description}
					</Typography>
				</CardContent>

				<CardActions
					sx={{
						display: 'flex',
						justifyContent: 'end',
						paddingRight: 2,
					}}
				>
					<Typography variant='body2'>Actions 30 mins</Typography>
				</CardActions>
			</CardActionArea>
		</Card>
	);
};