import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Grid, Box, useMediaQuery, useTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import eventImg from "../assets/img/eventspage.jpg";
import { useLanguage } from "../context/LanguageContext.jsx";
import AddCircleIcon from '@mui/icons-material/AddCircle';

function Events() {
	const { data } = useLanguage();
	const navigate = useNavigate();
	const theme = useTheme();

	const handleClickOpen = (route) => {
		navigate(`/la-sfera/events/${route}`);
	};

	const isMdUp = useMediaQuery(theme.breakpoints.up('md'));

	return (

		<Box
			sx={{
				position: "relative",
				minHeight: "100vh",
				width: "100%",
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
				p: 3,
				backgroundColor: "background.default",
				zIndex: 0,
				"&::before": {
					content: '""',
					position: "absolute",
					inset: 0,
					backgroundImage: `url(${eventImg})`,
					backgroundSize: "cover",
					backgroundPosition: "center",
					backgroundRepeat: "no-repeat",
					filter: "sepia(20%) contrast(60%)",
					opacity: 0.5,
					zIndex: -1,

				},
			}}
		>
			<Typography variant="h1" sx={{ paddingTop: 20, }} >
				{data.events?.title}
			</Typography>

			<Grid container spacing={{ xs: 2, lg: 10 }} sx={{ margin: 5 }} justifyContent="center">
				{data.events?.details.map((event, index) => (
					<Grid size={{ xs: 12, md: 4, lg: 3 }} key={index}>
						<Card
							key={index}
							onClick={() => handleClickOpen(event.route)}
							sx={{
								transition: "transform 0.30s ease, box-shadow 0.30s ease",
								"&:hover": {
									transform: "scale(1.1)",
									boxShadow: 12,
								},
								cursor: "pointer",
								overflow: "hidden",
								display: "flex",
								flexDirection: "column",
								width: { xs: "100%", sm: "90%", md: "100%" },
								height: { xs: "auto", sm: 400, md: 450 },
							}}>
							<CardHeader
								title={event.title}
							/>
							<CardMedia component="img" image={event?.image} />
							{isMdUp ? (
								<>

									<CardContent>
										<Typography variant="body1" >
											{event.subtitle}
										</Typography>
									</CardContent>
									<CardContent sx={{ mt: "auto", textAlign: "center" }}>
										<Typography variant="body1" sx={{ fontWeight: 600 }}>
											{event.next}{event.info[0].date}
										</Typography>
									</CardContent>
								</>
							) : (
								<CardContent sx={{ mt: "auto", textAlign: "end" }}>
									<AddCircleIcon fontSize="small" />
								</CardContent>
							)}
						</Card>
					</Grid>
				))}
			</Grid>
		</Box>
	);
}
export default Events;