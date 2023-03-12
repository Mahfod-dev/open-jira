import { Card, CardActionArea, CardActions, CardContent, Typography } from "@mui/material"

export const EntryCard = ({ description }: { description: string }) => {
	return (
		<Card sx={{ marginBottom: 1 }}>
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