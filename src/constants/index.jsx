

export const modalitatsOptions = [
    {
        title: "Simpatitzant",
        price: "5€",
        features: [
            "Molts beneficis, a un preu reduït.",
            "nom.cognom.cognom@correu.matc.ad",
            "No inclòs.",
            "Accés limitat, segons recursos.",
            "1 any.",
            "Cap."
        ]
    },
    {
        title: "Estudiant",
        price: "9€",
        features: [
            "Tots els beneficis.",
            "elquevulguis@matc.ad (i l'altre!)",
            "Inclòs.",
            "Accés complet.",
            "1 any.",
            "Ser estudiant."
        ]
    }
];

export const roadmapItems = [
    {
        description: "Creació logo matc.ad (.svg).",
        date: "01/01/2023"
    },
    {
        description: "Fer més bonica la pàgina web.",
        date: "15/02/2022"
    },
    {
        description: "Creació d'un roadmap correcte amb les coses que volem fer després de tot això.",
        date: "30/03/2023"
    },
    {
        description: "Creaciò de la pàgina de preus.",
        date: "1/04/2024"
    }
];

export const preguntesFreq = [
    { question: "Per què?", answer: "Som un grup d'estudiants que ens va fer gràcia poder tenir el correu @matc.ad. Fa poc Andorra va començar a permetre la compra dels .ad i per això ho hem comprat. Hem decidit crear aquesta pàgina web i més serveis que ens seran útils o divertits." },
    { question: "Pregunta 2", answer: "Resposta a la pregunta 2." },
    { question: "Pregunta 3", answer: "Resposta a la pregunta 3." },
];

export const formulariContacte = "https://youtu.be/dQw4w9WgXcQ";

export const navLinks = [
    { label: 'Modalitats', path: 'modalitats' },
    { label: 'Subdominis', path: 'subdomains' },
    { label: 'Preguntes Freqüents', path: 'faq' },
    { label: 'Roadmap', href: '/roadmap' },
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
    { title: "www", description: "Efectivament. www no ès mort, ja que mostra aquesta pàgina web. Apart d'això, també fa de acurtador d'enllaços utils per la comunitat. Per exemple, prova a escriure https://matc.ad/song (nota: encara no tenim matc.ad pero pots fer matcad.pages.dev/song)", url: "https://matc.ad" },
    { title: "repster", description: "Pagina de RepSter.", url: "https://repster.matc.ad" },
    { title: "peix", description: "Acudits de peixos. Res més.", url: "https://peix.matc.ad"},
];