import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import { Menu, MenuItem, Button } from "@mui/material";
import { useLanguage } from "../context/LanguageContext.jsx";
import { useState, useEffect, } from "react";
import { useTheme } from "@mui/material/styles";
import logo from '../assets/img/la-sfera-logo.png';
import { useMediaQuery } from "@mui/material";
import CustomDrawer from "./Drawer.jsx";

function CustomBar() {
	const { language, switchLanguage, settings, data } = useLanguage();
	const theme = useTheme();

	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);
	const [activeSection, setActiveSection] = useState("home");

	const handleClick = (event) => { setAnchorEl(event.currentTarget); };
	const handleClose = (lang) => { if (lang) switchLanguage(lang); setAnchorEl(null); };
	const handleScroll = (sectionId) => {
		const section = document.getElementById(sectionId);
		if (section) {
			section.scrollIntoView({ behavior: "smooth", block: "start" });
		}
	};

	useEffect(() => {
		const sections = document.querySelectorAll("section, [id]");
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setActiveSection(entry.target.id);
					}
				});
			},
			{
				root: null,
				rootMargin: "0px",
				threshold: 0.6,
			}
		);

		sections.forEach((section) => observer.observe(section));

		return () => observer.disconnect();
	}, []);

	return (

		<AppBar position="fixed">
			<Toolbar disableGutters>
				<Box sx={{ display: "flex", flex: 1, gap: 1, mx: 2 }} >
					{data.appBar.tab.map((tab) => (
						<Button
							key={tab.label}
							onClick={() => handleScroll(tab.id)}
							sx={{
								backgroundColor: activeSection === tab.id ? theme.primary.main : "transparent",
								transition: "background-color 0.3s ease",
								opacity: activeSection === tab.id ? 0.5 : 1,
								color: activeSection === tab.id ? "white" : "black",

							}}
						>

							<Typography variant="body2" sx={{
								display: { xs: "none", md: "block" },
							}}>
								{tab.label}
							</Typography>
							<Box sx={{ flexGrow: 1, display: { xs: "block", md: "none" }, }} >
								{tab.icon}
							</Box>
						</Button>
					))}
				</Box>

				{/* <Box
					component="img"
					src={logo}
					alt="La Sfera Logo"
					sx={{
						height: 100,
						filter: "brightness(0) invert(1)",
					}}
				/> */}

				<Box sx={{ flex: 1, display: "flex", justifyContent: "flex-end", mx: 2 }}>
					<Button onClick={handleClick} sx={{ backgroundColor: "transparent" }}>
						<Box
							sx={{
								width: 28,
								height: 28,
								borderRadius: "50%",
								overflow: "hidden",
								display: "flex",
							}}
						>
							{data.appBar.language?.icon}
						</Box>
					</Button>
				</Box>
				<Menu
					anchorEl={anchorEl}
					open={open}
					onClose={() => handleClose(null)}
					anchorOrigin={{ vertical: "bottom", horizontal: "right", }}
					transformOrigin={{ vertical: "top", horizontal: "right", }} >
					{settings.languages.options.map((lang) => (
						<MenuItem
							key={lang.value}
							onClick={() => handleClose(lang.value)}
							selected={lang.value === language} >
							{lang.name}
						</MenuItem>
					))}
				</Menu>
			</Toolbar>
		</AppBar >

	)
}

export default CustomBar
