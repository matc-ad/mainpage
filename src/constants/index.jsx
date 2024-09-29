

export const modalitatsOptions = [
    {
        title: "Simpatitzant",
        price: "5€",
        features: [
            "Molts beneficis, a un preu reduït.",
            "nom.cognom.cognom@correu.matc.ad",
            "Subdomini no inclòs.",
            "Accés limitat, segons recursos.",
            "Cap requisit."
        ]
    },
    {
        title: "Estudiant",
        price: "9€",
        features: [
            "Tots els beneficis.",
            "elquevulguis@matc.ad (i l'altre!)",
            "Subdomini inclòs.",
            "Accés complet.",
            "Requisit: ser estudiant de MatCAD."
        ]
    }
];

export const roadmapItems = [
    {
        description: "Conseguim matc.ad.",
        date: "16/10/2024"
    },
    {
        description: "Creació subdominis facils (peix, transparencia) de la administraciò.",
        date: "4/10/2024"
    },
    {
        description: "Inici de peix@matc.ad.",
        date: "25/10/2024"
    },
    {
        description: "Creació del mailing system.",
        date: "23/10/2024"
    },
    {
        description: "Inici de newslater@matc.ad.",
        date: "25/10/2024"
    },
    {
        description: "Inici de editor.matc.ad.",
        date: "16/11/2024"
    },
    {
        description: "Inici de git.matc.ad.",
        date: "13/12/2024"
    }
];

export const formulariContacte = "https://matc.ad/formulari";

export const preguntesFreq = [
    { question: "Per què heu fet aquesta pàgina web?", answer: "Som un grup d'estudiants que ens va fer gràcia poder tenir el correu @matc.ad. Fa poc Andorra va començar a permetre la compra dels .ad i per això ho hem comprat. Hem decidit crear aquesta pàgina web i més serveis que ens seran útils o divertits." },
    { question: "Com em creo un compte?", answer: "Molt fàcil, dona-li a \"formulari de contacte\" i pots fer una petició." },
    { question: "Què més fa aquesta pàgina web a part de demanar diners?", answer: "Pot redirigir altres pàgines com un acurtador d'enllaços. Prova matc.ad/song (nota: ara mateix no tenim matc.ad però es pot fer amb matcad.pages.dev/song)." },
    { question: "Puc demanar una redirecció?", answer: "Sí. Dona-li al formulari de contacte i allà pots enviar una petició." },
];

export const navLinks = [
    { label: 'Modalitats', path: 'modalitats' },
    { label: 'Subdominis', path: 'subdomains' },
    { label: 'Preguntes Freqüents', path: 'faq' },
    { label: 'Full de ruta', path: 'roadmap' },
    { label: 'Redireccions', href: '/redireccions' },
    { label: 'Formulari de contacte', href: formulariContacte}
];

export const colorsOptions = {
    darkMode: {
        background: 'bg-gray-800',
        divBackground: 'bg-gray-700',
        text: 'text-white',
        title: 'text-blue-400',
        paragraph: 'text-gray-300',
        border: 'border-neutral-600',
        buttonBackground: 'bg-blue-500',
        buttonText: 'text-gray-800',
        buttonHoverBackground: 'hover:bg-blue-600'
    },
    lightMode: {
        background: 'bg-gray-300',
        divBackground: 'bg-gray-200',
        text: 'text-black',
        title: 'text-green-700',
        paragraph: 'text-gray-700',
        border: 'border-neutral-500',
        buttonBackground: 'bg-green-600',
        buttonText: 'text-white',
        buttonHoverBackground: 'hover:bg-green-700'
    }
};

export const subdomainsOptions = [
    { title: "transparencia", description: "Transparència de la nostra organització.", url: "https://transparencia.matc.ad"},
    { title: "peix", description: "Acudits de peixos. Res més.", url: "https://peix.matc.ad"},
    { title: "repster", description: "Pagina de RepSter.", url: "https://repster.matc.ad" }
];

export const redireccions = [
    { page: "apunts", url: "https://github.com/TheRepSter/Apunts-MatCAD"},
    { page: "song", url: "https://youtu.be/dQw4w9WgXcQ"},
    { page: "formulari", url: "https://youtu.be/dQw4w9WgXcQ"},
    ...subdomainsOptions.map(subdomain => ({ page: subdomain.title, url: subdomain.url }))
];