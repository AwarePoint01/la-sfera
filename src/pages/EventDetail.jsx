import {
	Typography,
	Button,
	Grid,
	Box,
	Dialog,
	DialogTitle,
	DialogContent,
	DialogActions,
	TextField,
} from "@mui/material";
import { useLanguage } from "../context/LanguageContext.jsx";
import { useNavigate, useParams } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useState } from "react";

function EventDetail() {
	const { route } = useParams();
	const navigate = useNavigate();
	const { data, language } = useLanguage();
	const locale = language === "gb" ? "en-GB" : language;

	const [open, setOpen] = useState(false);
	const [selectedEvent, setSelectedEvent] = useState(null);

	const event = data.events?.details.find(
		(event) => event.route === route
	);

	if (!event) {
		return <Typography>Event not found</Typography>;
	}

	const formatDate = (date) => {
		return new Intl.DateTimeFormat(locale, {
			day: "numeric",
			month: "long",
			year: "numeric",
		}).format(new Date(date));
	};

	const handleEnroll = (info, location) => {
		console.log("Enroll clicked for:", info, location);
		setSelectedEvent({
			...info,
			location: location.name,
		});

		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
		setSelectedEvent(null);
	};

	return (
		<>
			<Box
				sx={{
					backgroundImage: `url(${event.image})`,
					height: "50vh",
					backgroundSize: "cover",
					backgroundPosition: "center",
					position: "fixed",
					top: 0,
					left: 0,
					width: "100%",
					zIndex: -1,
				}}
			/>

			<Grid
				container
				spacing={5}
				sx={{
					backgroundColor: "white",
					mt: "50vh",
					mb: 4,
					px: { xs: 2, md: 4 },
				}}
			>
				<Grid size={{ xs: 12 }}>
					<Button
						variant="contained"
						sx={{
							height: 50,
							mt: 3,
							mb: 3,
						}}
						onClick={() => navigate(-1)}
					>
						<ArrowBackIcon sx={{ mr: 1 }} />
						Back
					</Button>
				</Grid>

				<Grid size={{ xs: 12, md: 6 }}>
					<Grid container direction="column" spacing={3}>
						<Grid>
							<Typography variant="h2" pb={3}>
								{event.title}
							</Typography>
						</Grid>

						<Grid>
							<Typography variant="h5">
								{event.description}
							</Typography>
						</Grid>
					</Grid>
				</Grid>

				{/* Event dates */}
				<Grid size={{ xs: 12, md: 6 }}>
					<Grid container direction="column" spacing={5}>
						<Grid>
							<Typography
								variant="h3"
								sx={{
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
									mb: 2,
								}}
							>
								{data.events?.subtitle}
							</Typography>
						</Grid>

						{event.info.map((info, index) => (
							<Grid key={index} sx={{ mb: 2, width: "100%" }} >
								<Typography variant="h6" sx={{ mb: 1 }}>
									{info.recurring
										? info.day
										: formatDate(info.day)}, {info.time}
								</Typography>

								{info.locations.map((location, locationIndex) => (
									<Grid
										key={locationIndex}
										container
										alignItems="center"
										justifyContent="space-between"
										sx={{
											py: 1,
											borderBottom: "1px solid rgba(0, 0, 0, 0.1)",

										}}
									>
										<Typography variant="body1">
											{location.name}
										</Typography>

										<Button
											sx={{ fontSize: "0.875rem", }}
											onClick={() => handleEnroll(info, location)}

										>
											{data.events?.button}
										</Button>
									</Grid>
								))}
							</Grid>
						))}
					</Grid>
				</Grid>
			</Grid>

			<Dialog
				open={open}
				onClose={handleClose}
				fullWidth
				maxWidth="sm"
			>
				<DialogTitle>
					{data.events?.enroll}
				</DialogTitle>

				<DialogContent>
					{selectedEvent && (
						<Box sx={{ mb: 3 }}>
							<Typography variant="h5" sx={{ mb: 3 }}>
								{event.title}
							</Typography>

							<Typography variant="body1">
								{selectedEvent.recurring
									? selectedEvent.day
									: formatDate(selectedEvent.day)}
								{selectedEvent.time && ` · ${selectedEvent.time}`}
							</Typography>

							<Typography variant="body1">
								{selectedEvent.location && selectedEvent.location}
							</Typography>
						</Box>
					)}

					<Box component="form"

						sx={{
							width: "100%",
							maxWidth: 600,
							display: "flex",
							flexDirection: "column",
							gap: 2,
						}}
					>

						<TextField label="Name" name="name" fullWidth required />
						<TextField label="Email" name="email" type="email" fullWidth required />
					</Box>



				</DialogContent>

				<DialogActions>
					<Button onClick={handleClose}>
						Cancel
					</Button>

					<Button type="submit"
						//disabled={state.submitting}
						sx={{ alignSelf: "center", px: 5, }} >

						Submit
					</Button>


				</DialogActions>
			</Dialog >
		</>
	);
}

export default EventDetail;