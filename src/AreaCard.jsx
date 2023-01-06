import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import blue from '@mui/material/colors/blue';

export default function AreaCard({ area }) {
	return (
		<Box m={2}>
		<Card sx={{ maxWidth: 345 }}>
			<CardHeader
				avatar={<Avatar sx={{ bgcolor: blue[500] }}  >{`${area['state abbreviation']}`}</Avatar>}
				title={`${area['place name']}`}
			/>
			  <CardMedia
        component="img"
        height="100"
        image="/src/post.jpg"
        alt="Image of an envelope with the gps icon lay over the top"
      />
			<CardContent>
				<Typography variant="body2" color="text.secondary">
					Latitude: {`${area.latitude}`}
				</Typography>
				<Typography variant="body2" color="text.secondary">
					Longitude: {`${area.longitude}`}
				</Typography>
				<Typography variant="body2" color="text.secondary">
					State:{`${area.state}`}
				</Typography>
			</CardContent>
		</Card>
		</Box>
	);
}
