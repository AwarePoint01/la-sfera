import { Typography } from '@mui/material';
import { useLanguage } from '../context/LanguageContext';
import contactImg from '../assets/img/contactpage.jpg';
import { Box, Grid } from '@mui/system';
import { useForm } from "@formspree/react";
import { Button, TextField } from '@mui/material';

function Contact() {
	const { data } = useLanguage();
	const [state, handleSubmit] = useForm("mzepjpdp");
	const contact = data.contact;

	if (state.succeeded) {
		return (
			<Box sx={{
				minHeight: "100vh",
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
				textAlign: "center",
				p: 3,
			}} >
				<Typography variant="h4" gutterBottom> {contact?.success} </Typography>
				<Typography variant="body1"> {contact?.successMessage} </Typography>
			</Box>
		);
	}

	return (
		<Grid container
			sx={{
				minHeight: "100vh",
				width: "100%",
				display: "flex",
				justifyContent: "center",
				alignItems: "stretch",
				backgroundColor: "background.default",

			}}>
			<Grid size={{ xs: 12, md: 6 }} sx={{ textAlign: "center", }}>
				<Box
					component="img"
					src={contactImg}
					alt="Contact Image"
					sx={{
						width: "100%",
						height: "100%",
						objectFit: "cover",
					}}
				/>
			</Grid>
			<Grid size={{ xs: 12, md: 6 }}
				sx={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
					textAlign: "center",
					mt: 15,
					height: "100%",
				}}>
				<Typography variant="h1">
					{data.contact?.title}
				</Typography>
				<Typography variant="h5" >
					{data.contact?.description}
				</Typography>

				<Box sx={{
					width: "100%",
					display: "flex",
					justifyContent: "center",
					pt: 5,
				}} >
					<Box component="form"
						onSubmit={handleSubmit}
						sx={{
							width: "100%",
							maxWidth: 600,
							display: "flex",
							flexDirection: "column",
							gap: 2,
							padding: 2,
						}}
					>

						<TextField label={contact?.name} name="name" fullWidth required />
						<TextField label={contact?.email} name="email" type="email" fullWidth required />
						<TextField label={contact?.message} name="message" multiline rows={6} fullWidth required />
						<Button type="submit"
							variant="contained"
							disabled={state.submitting}
							sx={{ alignSelf: "center", px: 5, }} > {state.submitting ? contact?.sending : contact?.send} </Button>
						{state.errors && (<Typography color="error" textAlign="center" > {contact?.error} </Typography>)}
					</Box>
				</Box>

				<Box sx={{ mt: 5 }}>
					{data.contact?.socials?.map((social, index) => (
						social.url && (
							<a
								key={index}
								href={social.url}
								target="_blank"
								rel="noopener noreferrer"
								style={{ marginRight: "8px" }}
							>
								{social.icon}
							</a>
						)
					))}
				</Box>
			</Grid>
		</Grid>
	);
}

export default Contact;
