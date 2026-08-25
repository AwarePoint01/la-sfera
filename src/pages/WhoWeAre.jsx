import { Box, Typography } from "@mui/material";
import { useLanguage } from "../context/LanguageContext.jsx";
import { Grid } from '@mui/material';

function WhoWeAre() {
	const { data } = useLanguage();
	return (
		<Grid container
			sx={{
				minHeight: "100vh",
				width: "100%",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				backgroundColor: "background.default",

			}}>
			<Grid size={{ xs: 12, md: 8 }} sx={{ textAlign: "center", mt: 15, }}>
				<Typography variant="h1">
					{data.whoWeAre?.title}
				</Typography>
				<Typography variant="h5" sx={{ lineHeight: 1.8, padding: { xs: 2, md: 4 }, }}>
					{data.whoWeAre?.description}
				</Typography>
			</Grid>
		</Grid >
	);
}

export default WhoWeAre;
