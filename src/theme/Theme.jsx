import { createTheme, responsiveFontSizes } from '@mui/material';


const baseTheme = createTheme({
	typography: {
		fontFamily: "Montserrat, sans-serif",
		subtitle1: {
			fontFamily: "Shadows Into Light, cursive",
			fontSize: "5rem",
			letterSpacing: "0.2em",
			fontWeight: 500,
			textAlign: "center",
			margin: "0.1em 0.5em",
		},
		h1: {
			fontSize: "5rem",
			fontWeight: 450,
			letterSpacing: "0.2em",
			marginBottom: "1rem",
			color: "black",
		},
		h2: {
			fontSize: "3rem",
			fontWeight: 450,
			color: "black",
		},
		h3: {
			fontSize: "2rem",
		},
		h4: {
			fontWeight: 600,
		},
		h5: {
			fontSize: "1.3rem",
			letterSpacing: "0.05em",

		},
		body1: {
			color: "rgba(0, 0, 0, 0.6)",
		},
		body2: {
			fontWeight: 400,
			letterSpacing: "0.2em",
			color: "rgb(255, 255, 255)",
		},

	},
	customShadows: {
		textLight: "2px 2px 4px rgba(0, 0, 0, 0.5)",
		textStrong: "4px 4px 6px rgba(0, 0, 0, 0.7)",
	},
	components: {
		MuiTypography: {
			styleOverrides: {
				root: {
					whiteSpace: "pre-line",
				},
			},
		},
		MuiButton: {
			styleOverrides: {
				root: {
					fontSize: "1.2rem",
					color: "black",
					backgroundColor: "rgba(36, 93, 119, 0.5)",
					textTransform: "none",
					height: "100%",
					"&:hover": {
						backgroundColor: "rgba(36, 93, 119, 0.3)",
					},
				},
			},
		},
		MuiAppBar: {
			styleOverrides: {
				root: {
					backgroundColor: 'rgba(64, 44, 44, 0.2)', // semitrasparente
					backdropFilter: 'blur(10px)', // sfocatura
					WebkitBackdropFilter: 'blur(10px)', // per Safari
					zIndex: (theme) => theme.zIndex.drawer + 1,

				},
			},
		},
		MuiToolbar: {
			styleOverrides: {
				root: {
					display: "flex",
					justifyContent: "center",
					flexDirection: "row",

				},
			},
		},
		MuiGrid: {
			styleOverrides: {
				root: {
					justifyContent: "center",
					alignItems: "center",
				},
			},
		},
		MuiCard: {
			styleOverrides: {
				root: ({ theme }) => ({
					boxShadow: theme.shadows[10],
					height: 450,
					borderRadius: 15,
				}),

			},
		},
		MuiCardHeader: {
			styleOverrides: {
				title: {
					fontWeight: 500,
					textAlign: "center",
				},
			},
		},
		MuiCardMedia: {
			styleOverrides: {
				root: {
					height: 140,
				},
			},
		},
	},
});


const lightTheme = createTheme({
	...baseTheme,
	palette: {
		mode: 'light',
	},
	primary: {
		main: "#384037",
	},
	secondary: {
		main: "#9c27b0",
	},
	background: {
		default: "#fafafa",
	},

});

const darkTheme = createTheme({
	...baseTheme,
	palette: {
		mode: 'dark',
	},
	primary: {
		main: "#042343ff",
	},
	secondary: {
		main: "#896e8eff",
	},
	background: {
		default: "#0b0000ff",
	},
});


export const themes = {
	light: responsiveFontSizes(lightTheme),
	dark: responsiveFontSizes(darkTheme),
};
