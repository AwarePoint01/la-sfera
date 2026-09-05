import { Typography } from "@mui/material";
import homeImg from "../assets/img/homepage.jpg";
import { useLanguage } from "../context/LanguageContext.jsx";
import { useTheme } from "@mui/material/styles";
import { Box } from "@mui/system";

function Home() {
	const { data } = useLanguage();
	const theme = useTheme();


	return (
		<>
			<Box sx={{
				backgroundImage: `url(${homeImg})`,
				height: "100vh",
				backgroundSize: "cover",
				backgroundPosition: "center",
				position: "fixed",
				top: 0,
				left: 0,
				width: "100%",
				zIndex: -1
			}} />
			<Box sx={{ height: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
				<Typography variant="subtitle1"
					sx={{
						color: "white",
						overflow: "hidden",
						textShadow: theme.customShadows.textStrong,
						fontWeight: "bold",
					}}>
					{data.home?.title}
				</Typography>
			</Box>

		</>

	)
}

export default Home;
