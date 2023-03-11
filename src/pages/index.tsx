import { Layout } from '@/components/layouts';
import { Typography } from '@mui/material';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
	return <Layout>

    <Typography variant='h1' color='primary'>Hello world</Typography>

  </Layout>;
}
