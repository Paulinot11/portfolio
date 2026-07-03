import { FaGraduationCap, FaPaperPlane, FaGithub, FaCode, FaAward, FaLaptopCode } from 'react-icons/fa';
import { personalInfo } from '../data/data';
import photo from '../assets/photo.JPG';

const Hero = () => {
    return (
        <section id="accueil" className="min-h-screen flex items-center pt-20">
            <div className="container-custom">
                {/* Photo au centre */}
                <div className="flex justify-center mb-8">
                    <div className="relative">
                        <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-accent shadow-2xl shadow-accent/20">
                            <img 
                                src={photo} 
                                alt={personalInfo.prenoms}
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    e.target.style.display = 'none';
                                    e.target.parentElement.innerHTML = '<div className="w-full h-full bg-accent/20 flex items-center justify-center text-6xl text-accent"><FaCode /></div>';
                                }}
                            />
                        </div>
                        <div className="absolute -bottom-2 -right-2 bg-accent rounded-full p-2 shadow-lg">
                            <FaLaptopCode className="text-dark text-xl" />
                        </div>
                    </div>
                </div>

                {/* Contenu */}
                <div className="text-center max-w-3xl mx-auto">
                    <p className="text-accent text-lg font-medium mb-2">
                        <FaCode className="inline mr-2" /> Bonjour, je suis
                    </p>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4">
                        {personalInfo.nom} <br />
                        <span className="text-accent">{personalInfo.prenoms}</span>
                    </h1>

                    <div className="flex flex-wrap justify-center gap-3 mb-4">
                        <span className="badge"><FaGraduationCap className="text-accent mr-2" /> L3 Informatique</span>
                        <span className="badge"><FaCode className="text-accent mr-2" /> ENI Fianarantsoa</span>
                        <span className="badge"><FaLaptopCode className="text-accent mr-2" /> Fullstack</span>
                        <span className="badge"><FaAward className="text-accent mr-2" /> Bac D - Mention Bien</span>
                    </div>

                    <h2 className="text-xl md:text-2xl font-medium text-text-secondary mb-6">
                        Étudiant en <span className="bg-gradient-to-r from-accent to-emerald-400 bg-clip-text text-transparent font-bold">L3 Informatique</span>
                    </h2>

                    <p className="text-text-secondary mb-8 max-w-2xl mx-auto leading-relaxed">
                        {personalInfo.description}
                    </p>

                    <div className="flex flex-wrap gap-4 justify-center mb-6">
                        <a href="#contact" className="btn-primary">
                            <FaPaperPlane className="mr-2" /> Me contacter
                        </a>
                        <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="btn-outline">
                            <FaGithub className="mr-2" /> GitHub
                        </a>
                    </div>

                    <div className="flex flex-wrap justify-center gap-6 text-sm">
                        <div className="text-text-secondary">
                            <span className="block text-2xl font-bold text-accent">5+</span>
                            Projets
                        </div>
                        <div className="text-text-secondary">
                            <span className="block text-2xl font-bold text-accent">3</span>
                            Stages
                        </div>
                        <div className="text-text-secondary">
                            <span className="block text-2xl font-bold text-accent">8</span>
                            Technologies
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;