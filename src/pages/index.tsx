import { Layout } from '@/components/layouts';
import { Typography, Grid, CardHeader, Card, CardContent } from '@mui/material';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
	return (
		<Layout title='Home - OpenJira'>
			<Grid container spacing={2}>
				<Grid item xs={12} sm={4}>
					<Card sx={{ height: 'calc(100vh - 100px)' }}>
						<CardHeader title='Pending' />

          <CardContent>
            {/* nouvelle tache */}
            {/* liste d'entre */}
          </CardContent>
          
					</Card>
				</Grid>
				<Grid item xs={12} sm={4}>
					<Card sx={{ height: 'calc(100vh - 100px)' }}>
						<CardHeader title='In Progress' />
					</Card>
				</Grid>
				<Grid item xs={12} sm={4}>
					<Card sx={{ height: 'calc(100vh - 100px)' }}>
						<CardHeader title='Completed' />
					</Card>
				</Grid>
			</Grid>
		</Layout>
	);
}
