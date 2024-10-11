export const modalitatsOptions = [
	{
		title: "Simpatitzant",
		price: "5€",
		features: [
			"Molts beneficis, a un preu reduït.",
			"nom.cognom.cognom@correu.matc.ad",
			"Subdomini no inclòs.",
			"Accés limitat, segons recursos.",
		],
		requisits: "Cap",
	},
	{
		title: "Estudiant",
		price: "9€",
		features: [
			"Tots els beneficis.",
			"elquevulguis@matc.ad (i l'altre!)",
			"Subdomini inclòs.",
			"Accés complet.",
		],
		requisits: "Ser estudiant de MatCAD.",
	},
];

export const roadmapItems = [
	{
		description: "Conseguim matc.ad.",
		date: "16/10/2024",
	},
	{
		description:
			"Creació subdominis facils (peix, transparencia) de la administraciò.",
		date: "4/10/2024",
	},
	{
		description: "Inici de peix@matc.ad.",
		date: "25/10/2024",
	},
	{
		description: "Creació del mailing system.",
		date: "23/10/2024",
	},
	{
		description: "Inici de newslater@matc.ad.",
		date: "25/10/2024",
	},
	{
		description: "Inici de editor.matc.ad.",
		date: "16/11/2024",
	},
	{
		description: "Inici de git.matc.ad.",
		date: "13/12/2024",
	},
];

export const formulariContacte = "https://matc.ad/formulari";

export const preguntesFreq = [
	{
		question: "Per què heu fet aquesta pàgina web?",
		answer:
			"Som un grup d'estudiants que ens va fer gràcia poder tenir el correu @matc.ad. Fa poc Andorra va començar a permetre la compra dels .ad i per això ho hem comprat. Hem decidit crear aquesta pàgina web i més serveis que ens seran útils o divertits.",
	},
	{
		question: "Com em creo un compte?",
		answer:
			'Molt fàcil, dona-li a "formulari de contacte" i pots fer una petició.',
	},
	{
		question: "Què més fa aquesta pàgina web a part de demanar diners?",
		answer:
			"Pot redirigir altres pàgines com un acurtador d'enllaços. Prova matc.ad/song (nota: ara mateix no tenim matc.ad però es pot fer amb matcad.pages.dev/song).",
	},
	{
		question: "Puc demanar una redirecció?",
		answer:
			"Sí. Dona-li al formulari de contacte i allà pots enviar una petició.",
	},
];

export const navLinks = [
	{ label: "Modalitats", path: "modalitats" },
	{ label: "Subdominis", path: "subdomains" },
	{ label: "Preguntes Freqüents", path: "faq" },
	{ label: "Full de ruta", path: "roadmap" },
	{ label: "Redireccions", href: "/redireccions" },
	{ label: "Formulari de contacte", href: formulariContacte },
];

export const colorsOptions = {
	darkMode: {
		background: "bg-gray-800",
		divBackground: "bg-gray-700",
		text: "text-white",
		title: "text-blue-400",
		paragraph: "text-gray-300",
		border: "border-neutral-600",
		buttonBackground: "bg-blue-500",
		buttonText: "text-gray-800",
		buttonHoverBackground: "hover:bg-blue-600",
	},
	lightMode: {
		background: "bg-gray-300",
		divBackground: "bg-gray-200",
		text: "text-black",
		title: "text-green-700",
		paragraph: "text-gray-700",
		border: "border-neutral-500",
		buttonBackground: "bg-green-600",
		buttonText: "text-white",
		buttonHoverBackground: "hover:bg-green-700",
	},
};

export const subdomainsOptions = [
	{
		title: "transparencia",
		description: "Transparència de la nostra organització.",
		url: "https://transparencia.matc.ad",
	},
	{
		title: "peix",
		description: "Acudits de peixos. Res més.",
		url: "https://peix.matc.ad",
	},
	{
		title: "repster",
		description: "Pagina de RepSter.",
		url: "https://repster.matc.ad",
	},
];

export const redireccions = [
	{ page: "apunts", url: "https://github.com/TheRepSter/Apunts-MatCAD" },
	{ page: "song", url: "https://youtu.be/dQw4w9WgXcQ" },
	{ page: "formulari", url: "https://youtu.be/dQw4w9WgXcQ" },
	...subdomainsOptions.map((subdomain) => ({
		page: subdomain.title,
		url: subdomain.url,
	})),
];

export const randomMessage = [
	"Lorem ipsum (no sé què posar aquí) dolor sit amet.",
	"De mitjana millors que Renfe.",
	"El millor correu de tota la història.",
	"Per definició ets un peix.",
	"El punt es pronuncia.",
	"HvZ is a cool game, try it!",
	"La vida es més dura, espabila.",
	"MatCAD està en una bona situació; no té un dia al calendari.",
	"Entenc que es massa llarga per tu.",
	"Teorema de pitagores 2 released: a + b = c + AI",
	"Pēdīcābo ego vōs et irrumābō",
	"Ferroviaria.cat my best friend.",
	"Mola cantidubi.",
	"Mort? Qui t'ha mort? La justicia et reclama.",
	"Ni ou ni castanya aquest mort està ben mort.",
	"Remember doing `rm -fr /` to remove french from LinuxOS.",
	"I use arch, btw.",
	"El meu gat és un gos. I el meu gos es un ocell. I el meu ocell és un peix.",
	"Anant en Jetpack, arriba el Jetpack Jordi.",
	"𓆟",
	"Yeah, I wear knee high socks. How did you know?",
	"I'm Poppy.",
	"Crazy? I was crazy once, they locked me up in a room, a rubber room, with rubber rats. Rats I hate rats, they make me crazy...",
	"Graphic dessign is my passion.",
	"Una diferencial es una fracció;",
	"Buenos días, comenzamos.",
	"tetr.io?",
	"Hola. ¿Hay alguien ahí?",
	"Recordeu el principi bàsic, sempre hi ha que pensar.",
	"There are two kinds of people. Those who can extrapolate information.",
	"Es el vecino el que elige al alcalde y es el alcalde el que quiere que sean los vecinos el alcalde.",
	"Mai et renunciaré, mai et defraudarè, mai et farè la croqueta i et convertirè en una postra.",
	"En cuanto al examen, entrará lo que hemos visto hasta ahora, lo que aún no hemos visto no.",
];
