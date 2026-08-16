import HomeIcon from '@mui/icons-material/Home';
import SpaIcon from '@mui/icons-material/Spa';
import EventIcon from '@mui/icons-material/Event';
import PhoneIcon from '@mui/icons-material/Phone';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import healingEnergyImg from "../assets/img/healingEnergy.jpg";
import meditationImg from "../assets/img/meditation.jpg";
import readingImg from "../assets/img/reading.jpg";
import "flag-icons/css/flag-icons.min.css";

export default {
	settings: {
		languages: {
			label: "Language",
			options: [
				{ value: "gb", name: "English" },
				{ value: "it", name: "Italiano" },
				{ value: "de", name: "Deutsch" },
			],
		},
	},
	gb: {
		appBar: {
			tab: [
				{ label: "Home", id: "home", icon: <HomeIcon /> },
				{ label: "Who We Are", id: "who-we-are", icon: <SpaIcon /> },
				{ label: "Events", id: "events", icon: <EventIcon /> },
				{ label: "Contact", id: "contact", icon: <PhoneIcon /> },
			],
			language: {
				label: "Select Language",
				icon: <span className="fi fi-gb" style={{
					width: "100%",
					height: "100%",
					display: "block",
					backgroundSize: "cover",
					backgroundPosition: "center",
				}} />,
			},
		},
		home: {
			title: "I am this, this is me",
		},
		whoWeAre: {
			title: "Who we are",
			description: "Our association shares ideas about growth and inner well-being, placing self-awareness at the center of every meeting. We offer events to help you discover your inner world, give the right value to life and people, address the big questions inherent in humanity, and recognize beauty and harmony.",
		},
		events: {
			title: "Events",
			subtitle: "Next events",
			description: "Check out our upcoming events.",
			details: [
				{
					title: "Healing energy",
					subtitle: "Rebalance your inner energy thanks to an extraordinary technique.",
					description: "Healing energy is a unique and natural approach to restoring balance and harmony, both within ourselves and in our relationships with others. This method is based on a fundamental principle: health is the natural expression of a deep balance between body, mind, and spirit. \n\nAchieving this state means learning to love ourselves authentically and to respect our natural energy flow. Only in this way is it possible to promote healing and rediscover a deep connection with ourselves.",
					route: "healing-energy",
					info: [
						{
							date: "05 Sep. 2025",
							location: "Stuttgart, Germany",
							urlmap: "https://www.google.com/maps/place/Stuttgart,+Germany/@48.7758459,9.1829321,12z/data=!3m1!4b1!4m5!3m4!1s0x4799fbbfbbd8e7c7:0x422d6cdbf2a0e0b8!8m2!3d48.7758459!4d9.1829321",
						},
						{
							date: "06 Sep. 2025",
							location: "Milan, Italy",
							urlmap: "https://www.google.com/maps/place/Milan,+Metropolitan+City+of+Milan,+Italy/@45.4642035,9.189982,12z/data=!3m1!4b1!4m5!3m4!1s0x4786c6e0d308f8e7:0x2a9cfcf8b1a0e0b8!8m2!3d45.4642035!4d9.189982",
						},
					],
					image: healingEnergyImg,
					next: "Next event: ",
				},
				{
					title: "Meditation",
					subtitle: "Stop now. Think for a moment that breathing is what allows you to live.",
					description: "Healing energy is a unique and natural approach to restoring balance and harmony, both within ourselves and in our relationships with others. This method is based on a fundamental principle: health is the natural expression of a deep balance between body, mind, and spirit. \n\nAchieving this state means learning to love ourselves authentically and to respect our natural energy flow. Only in this way is it possible to promote healing and rediscover a deep connection with ourselves.",
					route: "meditation",
					info: [
						{
							date: "05 Sep. 2025",
							location: "Stuttgart, Germany",
							urlmap: "https://www.google.com/maps/place/Stuttgart,+Germany/@48.7758459,9.1829321,12z/data=!3m1!4b1!4m5!3m4!1s0x4799fbbfbbd8e7c7:0x422d6cdbf2a0e0b8!8m2!3d48.7758459!4d9.1829321",

						},
						{
							date: "06 Sep. 2025",
							location: "Milan, Italy",
							urlmap: "https://www.google.com/maps/place/Milan,+Metropolitan+City+of+Milan,+Italy/@45.4642035,9.189982,12z/data=!3m1!4b1!4m5!3m4!1s0x4786c6e0d308f8e7:0x2a9cfcf8b1a0e0b8!8m2!3d45.4642035!4d9.189982",

						},
					],
					image: meditationImg,
					next: "Next event: ",
				},
				{
					title: "Conference",
					subtitle: "Discover the ideas of the international school of self awareness.",
					description: "TODO: Describe the conference and its objectives.",
					route: "reading",
					info: [
						{
							date: "No events currently scheduled",
							location: null,
							urlmap: null,
						},
					],
					image: readingImg,
					next: null,
				},
			]
		},
		contact: {
			title: "Contact",
			description: "Get in touch with us.",
			email: "Email: awarepoint01@gmail.com",
		},
	},

	it: {
		appBar: {
			tab: [
				{ label: "Home", id: "home", icon: <HomeIcon /> },
				{ label: "Chi Siamo", id: "who-we-are", icon: <SpaIcon /> },
				{ label: "Eventi", id: "events", icon: <EventIcon /> },
				{ label: "Contatti", id: "contact", icon: <PhoneIcon /> },
			],
			language: {
				label: "Seleziona lingua",
				icon: <span class="fi fi-it" style={{
					width: "100%",
					height: "100%",
					display: "block",
					backgroundSize: "cover",
					backgroundPosition: "center",
				}} />,
			},
		},
		home: {
			title: "Io sono questo, questo sono io",
		},
		whoWeAre: {
			title: "Chi siamo",
			description: "La nostra associazione condivide idee riguardanti la crescita e il benessere interiore, mettendo al centro di ogni incontro la consapevolezza di sé. \n\nProponiamo eventi per scoprire il proprio mondo interiore, dare il giusto valore alla vita e alle persone, occuparsi delle grandi domande insite nell’uomo, riconoscere bellezza e armonia.",
		},
		events: {
			title: "Eventi",
			subtitle: "Prossimi eventi",
			description: "Scopri i nostri eventi in programma.",
			details: [
				{
					title: "Energia risanante",
					subtitle: "Riequilibria la tua energia interiore grazie ad una tecnica straordinaria.",
					description: "Energia risanante è un approccio unico e naturale per ristabilire equilibrio e armonia, sia dentro di noi che nelle relazioni con gli altri. Questo metodo si fonda su un principio fondamentale: la salute è l’espressione naturale di un equilibrio profondo tra corpo, mente e spirito. \n\nRaggiungere questo stato significa imparare ad amarci autenticamente e a rispettare il nostro naturale flusso energetico. Solo così è possibile promuovere la guarigione e ritrovare una connessione profonda con noi stessi.",
					route: "healing-energy",
					info: [
						{
							date: "05 Sep. 2025",
							location: "Stuttgart, Germany",
							urlmap: "https://www.google.com/maps/place/Stuttgart,+Germany/@48.7758459,9.1829321,12z/data=!3m1!4b1!4m5!3m4!1s0x4799fbbfbbd8e7c7:0x422d6cdbf2a0e0b8!8m2!3d48.7758459!4d9.1829321",
						},
						{
							date: "06 Sep. 2025",
							location: "Milan, Italy",
							urlmap: "https://www.google.com/maps/place/Milan,+Metropolitan+City+of+Milan,+Italy/@45.4642035,9.189982,12z/data=!3m1!4b1!4m5!3m4!1s0x4786c6e0d308f8e7:0x2a9cfcf8b1a0e0b8!8m2!3d45.4642035!4d9.189982",
						},
					],
					image: healingEnergyImg,
					next: "Prossimo incontro: ",
				},
				{
					title: "Meditazione",
					subtitle: "Fermati ora. Pensa per un momento che il respiro è proprio ciò che ti consente di vivere.",
					description: "Ti sei mai sentito teso, rapito dalle emozioni, trascinato a destra e a sinistra dai pensieri, assente?\n Hai mai provato a chiudere semplicemente gli occhi e fare un passo dentro di te?\n\n È proprio questo passo in dentro che ti permette di prendere distanza dalle sollecitazioni della vita, sperimentando un luogo di silenzio, dove tu hai tempo di scegliere ciò che vuoi veramente.\n\n La meditazione è un allenamento che ti permette di scoprire questo luogo, di praticarlo e di portarlo con te nella vita quotidiana.",
					route: "meditation",
					info: [
						{
							date: "Non ci sono eventi in programma al momento",
							location: null,
							urlmap: null,
						},
					],
					image: meditationImg,
					next: null,
				},
				{
					title: "Conferenze e seminari",
					subtitle: "Scopri le idee dell'international school of self awareness.",
					description: "Scopri le idee dell'international school of self awareness.",
					route: "reading",
					info: [
						{
							date: "Non ci sono eventi in programma al momento",
							location: null,
							urlmap: null,
						},
					],
					image: readingImg,
					next: null,
				},
			],
		},
		contact: {
			title: "Contatti",
			description: "Mettiti in contatto con noi.",
			email: "Email: awarepoint01@gmail.com",
			socials: [
				{
					label: "Facebook",
					url: "https://www.facebook.com/profile.php?id=100092522468844",
					icon: <FacebookIcon fontSize="large" />,
				},
				{
					label: "Instagram",
					url: "https://www.instagram.com/la.sfera?igsh=NDJjNjAzeTBpc3J2",
					icon: <InstagramIcon fontSize="large" />,
				}
			]
		},
	},
	de: {
		appBar: {
			tab: [
				{ label: "Home", id: "home", icon: <HomeIcon /> },
				{ label: "Wer wir sind", id: "who-we-are", icon: <SpaIcon /> },
				{ label: "Veranstaltungen", id: "events", icon: <EventIcon /> },
				{ label: "Kontakt", id: "contact", icon: <PhoneIcon /> },
			],
			language: {
				label: "Sprache auswählen",
				icon: <span class="fi fi-de" style={{
					width: "100%",
					height: "100%",
					display: "block",
					backgroundSize: "cover",
					backgroundPosition: "center",
				}} />,
			},

		},
		home: {
			title: "Ich bin das, das bin ich",
		},
		whoWeAre: {
			title: "Wer wir sind",
			description: "Wir sind ein Team von Fachleuten, das sich der Bereitstellung der besten Lösungen für unsere Kunden widmet.",
		},
		events: {
			title: "Veranstaltungen",
			subtitle: "Nächste Veranstaltungen",
			description: "Schauen Sie sich unsere bevorstehenden Veranstaltungen an.",
			details: [
				{
					title: "Heilungsenergie",
					subtitle: "Tägliche Morgenmeditation zur Förderung von Achtsamkeit und innerem Frieden.",
					description: "Tägliche Morgenmeditation zur Förderung von Achtsamkeit und innerem Frieden.",

					route: "healing-energy",
					info: [
						{
							date: "05 Sep. 2025",
							location: "Stuttgart, Germany",
							urlmap: "https://www.google.com/maps/place/Stuttgart,+Germany/@48.7758459,9.1829321,12z/data=!3m1!4b1!4m5!3m4!1s0x4799fbbfbbd8e7c7:0x422d6cdbf2a0e0b8!8m2!3d48.7758459!4d9.1829321",
						},
						{
							date: "06 Sep. 2025",
							location: "Milan, Italy",
							urlmap: "https://www.google.com/maps/place/Milan,+Metropolitan+City+of+Milan,+Italy/@45.4642035,9.189982,12z/data=!3m1!4b1!4m5!3m4!1s0x4786c6e0d308f8e7:0x2a9cfcf8b1a0e0b8!8m2!3d45.4642035!4d9.189982",
						},
					],
					image: healingEnergyImg,
					next: "Nächste Veranstaltung: ",
				},
				{
					title: "Meditation",
					subtitle: "Tägliche Morgenmeditation zur Förderung von Achtsamkeit und innerem Frieden.",
					description: "Tägliche Morgenmeditation zur Förderung von Achtsamkeit und innerem Frieden.",
					route: "meditation",
					info: [
						{
							date: "Es sind derzeit keine Veranstaltungen geplant",
							location: null,
							urlmap: null,
						},
					],
					image: meditationImg,
					next: null,
				},
				{
					title: "Konferenz",
					subtitle: "Entdecken Sie die Ideen der International School of Self Awareness.",
					description: "TODO: Beschreiben Sie die Konferenz und ihre Ziele.",
					route: "reading",
					info: [
						{
							date: "Es sind derzeit keine Veranstaltungen geplant",
							location: null,
							urlmap: null,
						},
					],
					image: readingImg,
					next: null,
				},
			],
		},
		contact: {
			title: "Kontakte",
			description: "Nehmen Sie Kontakt mit uns auf.",
			email: "Email: awarepoint01@gmail.com",
		},
	},
};