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
import { eventsInfo } from "./events";

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
			description: "We share ideas about growth and inner well-being, placing self-awareness at the center of every meeting. We offer events to help you discover your inner world, give the right value to life and people, address the big questions inherent in humanity, and recognize beauty and harmony.",
		},
		events: {
			title: "Events",
			subtitle: "Next events",
			description: "Check out our upcoming events.",
			button: "Join",
			details: [
				{
					title: "Healing energy",
					subtitle: "Rebalance your inner energy thanks to an extraordinary technique.",
					description: "Healing energy is a unique and natural approach to restoring balance and harmony, both within ourselves and in our relationships with others. This method is based on a fundamental principle: health is the natural expression of a deep balance between body, mind, and spirit. \n\nAchieving this state means learning to love ourselves authentically and to respect our natural energy flow. Only in this way is it possible to promote healing and rediscover a deep connection with ourselves.",
					route: "healing-energy",
					info: eventsInfo["healing-energy"],
					image: healingEnergyImg,
				},
				{
					title: "Conference",
					subtitle: "Discover the ideas of the international school of self awareness.",
					description: "TODO: Describe the conference and its objectives.",
					route: "reading",
					info: eventsInfo["reading"],
					image: readingImg,
				},
				{
					title: "Meditation",
					subtitle: "Stop now. Think for a moment that breathing is what allows you to live.",
					description: "TODO: Describe the meditation and its benefits.",
					route: "meditation",
					info: eventsInfo["meditation"],
					image: meditationImg,
				},
			]
		},
		contact: {
			title: "Contact",
			description: "Send us a message.",
			name: "Name",
			email: "Email",
			message: "Message",
			send: "Send",
			sending: "Sending...",
			success: "Thank you!",
			successMessage: "Your message has been sent successfully.",
			error: "Something went wrong. Please try again.",
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
			description: "Condividiamo idee riguardanti la crescita e il benessere interiore, mettendo al centro di ogni incontro la consapevolezza di sé. \n\nProponiamo eventi per scoprire il proprio mondo interiore, dare il giusto valore alla vita e alle persone, occuparsi delle grandi domande insite nell’uomo, riconoscere bellezza e armonia.",
		},
		events: {
			title: "Eventi",
			subtitle: "Prossimi eventi",
			description: "Scopri i nostri eventi in programma.",
			button: "Partecipa",
			details: [
				{
					title: "Energia risanante",
					subtitle: "Riequilibria la tua energia interiore grazie ad una tecnica straordinaria.",
					description: "Energia risanante è un approccio unico e naturale per ristabilire equilibrio e armonia, sia dentro di noi che nelle relazioni con gli altri. Questo metodo si fonda su un principio fondamentale: la salute è l’espressione naturale di un equilibrio profondo tra corpo, mente e spirito. \n\nRaggiungere questo stato significa imparare ad amarci autenticamente e a rispettare il nostro naturale flusso energetico. Solo così è possibile promuovere la guarigione e ritrovare una connessione profonda con noi stessi.",
					route: "healing-energy",
					info: eventsInfo["healing-energy"],
					image: healingEnergyImg,
				},
				{
					title: "Conferenze e seminari",
					subtitle: "Scopri le idee dell'international school of self awareness.",
					description: "Scopri le idee dell'international school of self awareness.",
					route: "reading",
					info: eventsInfo["reading"],
					image: readingImg,
				},
				{
					title: "Meditazione",
					subtitle: "Fermati ora. Pensa per un momento che il respiro è proprio ciò che ti consente di vivere.",
					description: "Ti sei mai sentito teso, rapito dalle emozioni, trascinato a destra e a sinistra dai pensieri, assente?\n Hai mai provato a chiudere semplicemente gli occhi e fare un passo dentro di te?\n\n È proprio questo passo in dentro che ti permette di prendere distanza dalle sollecitazioni della vita, sperimentando un luogo di silenzio, dove tu hai tempo di scegliere ciò che vuoi veramente.\n\n La meditazione è un allenamento che ti permette di scoprire questo luogo, di praticarlo e di portarlo con te nella vita quotidiana.",
					route: "meditation",
					info: eventsInfo["meditation"],
					image: meditationImg,
				},

			],
		},
		contact: {
			title: "Contatti",
			description: "Inviaci un messaggio.",
			name: "Nome",
			email: "Email",
			message: "Messaggio",
			send: "Invia",
			sending: "Invio...",
			success: "Grazie!",
			successMessage: "Il tuo messaggio è stato inviato con successo.",
			error: "Qualcosa è andato storto. Per favore, riprova.",
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
			button: "Teilnehmen",
			details: [
				{
					title: "Heilungsenergie",
					subtitle: "Tägliche Morgenmeditation zur Förderung von Achtsamkeit und innerem Frieden.",
					description: "Tägliche Morgenmeditation zur Förderung von Achtsamkeit und innerem Frieden.",
					route: "healing-energy",
					info: eventsInfo["healing-energy"],
					image: healingEnergyImg,
				},
				{
					title: "Konferenz",
					subtitle: "Entdecken Sie die Ideen der International School of Self Awareness.",
					description: "TODO: Beschreiben Sie die Konferenz und ihre Ziele.",
					route: "reading",
					info: eventsInfo["reading"],
					image: readingImg,
				},
				{
					title: "Meditation",
					subtitle: "Tägliche Morgenmeditation zur Förderung von Achtsamkeit und innerem Frieden.",
					description: "TODO: Beschreiben Sie die Meditation und ihre Vorteile.",
					route: "meditation",
					info: eventsInfo["meditation"],
					image: meditationImg,
				},
			],
		},
		contact: {
			title: "Kontakte",
			description: "Senden Sie uns eine Nachricht.",
			name: "Name",
			email: "Email",
			message: "Nachricht",
			send: "Senden",
			sending: "Wird gesendet...",
			success: "Vielen Dank!",
			successMessage: "Ihre Nachricht wurde erfolgreich gesendet.",
			error: "Etwas ist schief gelaufen. Bitte versuchen Sie es erneut.",
		},
	},
};