export const personalInfo = {
    nom: "RASALAMANJANAHARY",
    prenoms: "Ravonantenaina Paulinot",
    titre: "Étudiant en L3 Informatique",
    ecole: "École Nationale d'Informatique (ENI)",
    ville: "Fianarantsoa 301",
    email: "ravonantenainapaulinot@gmail.com",
    telephone: "+261 31 443 31",
    adresse: "Ambohibory, 301 Fianarantsoa",
    github: "https://github.com/Paulinot11",
    linkedin: "https://linkedin.com/in/paulinot",
    description: "Passionné par le développement fullstack, je combine maîtrise des technologies modernes (Laravel, React, Express) et rigueur académique pour créer des solutions innovantes. Actuellement en recherche de stage professionnalisant."
};

export const competences = [
    { categorie: "Base de données", icon: "FaDatabase", items: ["MySQL", "PostgreSQL"] },
    { categorie: "Conception", icon: "FaProjectDiagram", items: ["MERISE", "UML (Win'Design, VP)"] },
    { categorie: "Web", icon: "FaHtml5", items: ["HTML5", "CSS3", "JavaScript"] },
    { categorie: "Frameworks Front", icon: "FaLayerGroup", items: ["Bootstrap", "TailwindCSS", "ReactJS"] },
    { categorie: "Frameworks Back", icon: "FaServer", items: ["Laravel 12", "ExpressJS"] },
    { categorie: "Langages", icon: "FaCode", items: ["C/C++/C#", "JavaScript", "Java", "PHP", "Python"] },
    { categorie: "OS & Outils", icon: "FaLinux", items: ["Windows", "Kali Linux", "Git", "VS Code", "VirtualBox"] },
    { categorie: "Bureautique", icon: "FaFileAlt", items: ["Word", "Excel", "PowerPoint"] }
];

export const projets = [
    {
        id: 1,
        titre: "Gestion des stocks médicaments",
        description: "Application complète pour la gestion des stocks de médicaments avec suivi des entrées/sorties.",
        technologies: ["ReactJS", "ExpressJS", "TailwindCSS", "PostgreSQL"],
        icon: "FaHospital"
    },
    {
        id: 2,
        titre: "Gestion des appartements",
        description: "Plateforme de gestion locative (enregistrements de location). Projet réalisé à l'ENI.",
        technologies: ["ReactJS", "ExpressJS", "TailwindCSS", "PostgreSQL"],
        icon: "FaBuilding"
    },
    {
        id: 3,
        titre: "Gestion des QCM",
        description: "Système de création et passage de questionnaires à choix multiples.",
        technologies: ["JSP", "TailwindCSS", "PostgreSQL"],
        icon: "FaQuestionCircle"
    },
    {
        id: 4,
        titre: "Gestion des paiements de bourse",
        description: "Application Java pour la gestion et le suivi des paiements de bourses universitaires.",
        technologies: ["Java", "MySQL"],
        icon: "FaGraduationCap"
    },
    {
        id: 5,
        titre: "Gestion d'une pharmacie",
        description: "Système de gestion (achats, ventes, stocks) pour officine pharmaceutique.",
        technologies: ["PHP", "Bootstrap", "MySQL"],
        icon: "FaPrescriptionBottle"
    }
];

export const stage = {
    titre: "Développeur – Laura Vicuna Anjarasoa (FMA)",
    date: "Sept. 2025 – Nov. 2025 (3 mois)",
    theme: "Développement d'un système de gestion des inscriptions académiques et formations professionnelles.",
    technologies: ["PHP/Laravel 12", "ReactJS", "TailwindCSS", "Bootstrap", "PostgreSQL", "Git"]
};

export const loisirs = [
    { nom: "Jeux vidéo", icon: "FaGamepad" },
    { nom: "Musique", icon: "FaMusic" },
    { nom: "Football", icon: "FaFutbol" },
    { nom: "AJEM", icon: "FaUsers" }
];

export const langues = [
    { langue: "Anglais", niveau: "Assez bien", description: "compréhension, lecture, écrit, oral", drapeau: "🏴" },
    { langue: "Français", niveau: "Bien", description: "compréhension, lecture, écrit – Oral : Assez bien", drapeau: "🇫🇷" },
    { langue: "Malagasy", niveau: "Langue maternelle", description: "", drapeau: "🇲🇬" }
];