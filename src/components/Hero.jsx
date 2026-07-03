import { FaGraduationCap, FaPaperPlane, FaGithub, FaLaptopCode } from 'react-icons/fa';
import { personalInfo } from '../data/data';
import photo from '../assets/photo.jpg'; // Apetraho ny sarynao ao amin'ny src/assets/

const Hero = () => {
    return (
        <section id="accueil" className="min-h-screen flex items-center pt-20">
            <div className="container-custom grid md:grid-cols-2 gap-12 items-center">
                <div className="text-center md:text-left">
                    <h1 className="text-accent text-xl font-medium mb-2">
                        Bonjour, je suis
                    </h1>
                    <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4">
                        {personalInfo.nom} <span className="text-accent">{personalInfo.prenoms}</span>
                    </h1>
                    <h2 className="text-xl md:text-2xl font-medium mb-4">
                        Étudiant en <span className="bg-gradient-to-r from-accent to-emerald-400 bg-clip-text text-transparent">L3 Informatique</span>
                        <FaGraduationCap className="inline ml-2" /><br />
                        {personalInfo.ecole} <br /> {personalInfo.ville}
                    </h2>
                    <p className="text-text-gray mb-6 max-w-lg mx-auto md:mx-0">
                        {personalInfo.description}
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-6">
                        <a href="#contact" className="btn-primary">
                            <FaPaperPlane /> Me contacter
                        </a>
                        <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="btn-outline">
                            <FaGithub /> GitHub
                        </a>
                    </div>
                    <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                        <span className="badge"><FaGraduationCap className="text-accent" /> L3 ENI Fianar</span>
                        <span className="badge"><span className="text-accent">💻</span> Fullstack</span>
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="w-64 h-64 md:w-72 md:h-72 rounded-full bg-card-bg border-2 border-accent flex items-center justify-center overflow-hidden">
                        <img 
                            src={photo} 
                            alt="Paulinot" 
                            className="w-full h-full object-cover"
                            onError={(e) => {
                                e.target.style.display = 'none';
                                e.target.parentElement.innerHTML = '<FaLaptopCode className="text-8xl text-accent" />';
                            }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;