
import Head from 'next/head';
import { Navbar } from '../ui';
import { Box } from '@mui/material';

export const Layout = ({children,title='OpenJira'}:{children:React.ReactNode,title?:string}) => {
	return (
		<Box
			sx={{
				flexFlow: '1',
			}}
		>
            <Head>
            <title>{title}</title>


            </Head>

            <Navbar/>
            {/* sidebar */}
            <Box sx={{
                padding:'0.25rem 1.4rem',
            }}>
                {children}

            </Box>


        </Box>
	);
};
