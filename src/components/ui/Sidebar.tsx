import {
	Drawer,
	Box,
	Typography,
	List,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Divider,
} from '@mui/material';
import InboxOutlinedIcon from '@mui/icons-material/InboxOutlined';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';

const menuItems: string[] = ['Inbox', 'Starred', 'Send Email', 'Draf'];

export const Sidebar = () => {
	return (
		<Drawer
			anchor='left'
			open={true}
			onClose={() => console.log('cerrando')}
		>
			<Box sx={{ width: '250px' }}>
				<Box sx={{ padding: '5px 10px' }}>
					<Typography variant='h4'>Menu</Typography>
				</Box>

				<List>
					{menuItems.map((item, index) => (
						<ListItemButton key={item}>
							<ListItemIcon>
								{index % 2 === 0 ? (
									<InboxOutlinedIcon />
								) : (
									<MailOutlinedIcon />
								)}
							</ListItemIcon>
							<ListItemText primary={item} />
						</ListItemButton>
					))}
				</List>

				<Divider />

				<List>
					{menuItems.map((item, index) => (
						<ListItemButton key={item}>
							<ListItemIcon>
								{index % 2 === 0 ? (
									<InboxOutlinedIcon />
								) : (
									<MailOutlinedIcon />
								)}
							</ListItemIcon>
							<ListItemText primary={item} />
						</ListItemButton>
					))}
				</List>
			</Box>
		</Drawer>
	);
};
