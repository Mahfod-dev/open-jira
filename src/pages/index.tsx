import { Layout } from '@/components/layouts';
import { Grid, CardHeader, Card, CardContent } from '@mui/material';
import { Inter } from 'next/font/google';
import { EntryList, NewEntry } from '@/components/ui';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
	return (
		<Layout title='Home - OpenJira'>
			<Grid container spacing={2}>
				<Grid item xs={12} sm={4}>
					<Card sx={{ height: 'calc(100vh - 100px)' }}>
						<CardHeader title='Pending' />

						<NewEntry/>
						<EntryList status='pending' />
						{/* nouvelle tache */}
						{/* liste d'entre */}
					</Card>
				</Grid>
				<Grid item xs={12} sm={4}>
					<Card sx={{ height: 'calc(100vh - 100px)' }}>
						<CardHeader title='In Progress' />
						<EntryList status='in-progress' />
					</Card>
				</Grid>
				<Grid item xs={12} sm={4}>
					<Card sx={{ height: 'calc(100vh - 100px)' }}>
						<CardHeader title='Completed' />
						<EntryList status='completed' />
					</Card>
				</Grid>
			</Grid>
		</Layout>
	);
}
