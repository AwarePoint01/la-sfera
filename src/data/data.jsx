import HomeIcon from '@mui/icons-material/Home';
import GroupIcon from '@mui/icons-material/Group';
import EventIcon from '@mui/icons-material/Event';
import MailIcon from '@mui/icons-material/Mail';
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
				{ label: "Who We Are", id: "who-we-are", icon: <GroupIcon /> },
				{ label: "Events", id: "events", icon: <EventIcon /> },
				{ label: "Contact", id: "contact", icon: <MailIcon /> },
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
			buttonJoin: "Join",
			buttonCancel: "Cancel",
			details: [
				{
					title: "Healing energy",
					subtitle: "Rebalance your inner energy thanks to an extraordinary technique.",
					description: "Healing energy is a unique and natural approach to restoring balance and harmony, both within ourselves and in our relationships with others. This method is based on a fundamental principle: health is the natural expression of a deep balance between body, mind, and spirit. \n\nAchieving this state means learning to love ourselves authentically and to respect our natural energy flow.",
					route: "healing-energy",
					info: eventsInfo["healing-energy"],
					image: healingEnergyImg,
				},
				{
					title: "Conference",
					subtitle: "Discover the ideas of the International School of Self Awareness.",
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
				{ label: "Chi Siamo", id: "who-we-are", icon: <GroupIcon /> },
				{ label: "Eventi", id: "events", icon: <EventIcon /> },
				{ label: "Contatti", id: "contact", icon: <MailIcon /> },
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
			buttonJoin: "Iscriviti",
			buttonCancel: "Annulla",
			details: [
				{
					title: "Energia risanante",
					subtitle: "Riequilibria la tua energia interiore grazie ad una tecnica straordinaria.",
					description: "Energia risanante è un approccio unico e naturale per ristabilire equilibrio e armonia, sia dentro di noi che nelle relazioni con gli altri. Questo metodo si fonda su un principio fondamentale: la salute è l’espressione naturale di un equilibrio profondo tra corpo, mente e spirito. \n\nRaggiungere questo stato significa imparare ad amarci autenticamente e a rispettare il nostro naturale flusso energetico.",
					route: "healing-energy",
					info: eventsInfo["healing-energy"],
					image: healingEnergyImg,
				},
				{
					title: "Conferenze e seminari",
					subtitle: "Scopri le idee dell'International School of Self Awareness.",
					description: "TODO: Descrivere la conferenza e i suoi obiettivi.",
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
				{ label: "Wer wir sind", id: "who-we-are", icon: <GroupIcon /> },
				{ label: "Veranstaltungen", id: "events", icon: <EventIcon /> },
				{ label: "Kontakt", id: "contact", icon: <MailIcon /> },
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
			description: "Wir teilen Ideen über Wachstum und inneres Wohlbefinden, wobei wir die Selbstwahrnehmung in den Mittelpunkt jedes Treffens stellen. Wir bieten Veranstaltungen an, die Ihnen helfen, Ihre innere Welt zu entdecken, dem Leben und den Menschen den richtigen Wert zu geben, sich mit den großen Fragen der Menschheit zu beschäftigen und Schönheit und Harmonie zu erkennen.",
		},
		events: {
			title: "Events",
			subtitle: "Nächste Events",
			description: "Schauen Sie sich unsere bevorstehenden Veranstaltungen an.",
			buttonJoin: "Teilnehmen",
			buttonCancel: "Abbrechen",
			details: [
				{
					title: "Heilungsenergie",
					subtitle: "Bringen Sie Ihre innere Energie mit einer außergewöhnlichen Technik wieder ins Gleichgewicht.",
					description: "Heilungsenergie ist ein einzigartiger und natürlicher Ansatz, um Gleichgewicht und Harmonie wiederherzustellen, sowohl in uns selbst als auch in unseren Beziehungen zu anderen. Diese Methode basiert auf einem grundlegenden Prinzip: Gesundheit ist der natürliche Ausdruck eines tiefen Gleichgewichts zwischen Körper, Geist und Seele. \n\nDieses Gleichgewicht zu erreichen bedeutet, zu lernen, uns selbst authentisch zu lieben und unseren natürlichen Energiefluss zu respektieren.",
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