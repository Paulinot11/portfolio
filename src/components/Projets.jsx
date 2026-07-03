import { useState } from 'react';
import { 
    FaHospital, FaBuilding, FaQuestionCircle, 
    FaGraduationCap, FaPrescriptionBottle, FaCode, 
    FaCalendarAlt, FaTag, FaFolderOpen, FaBriefcase 
} from 'react-icons/fa';
import { projets, stage } from '../data/data';

const iconMap = {
    FaHospital, FaBuilding, FaQuestionCircle, FaGraduationCap, FaPrescriptionBottle
};

const Projets = () => {
    const [selectedTech, setSelectedTech] = useState('Tous');
    
    const allTechs = ['Tous', ...new Set(projets.flatMap(p => p.technologies))];
    const projetsFiltres = selectedTech === 'Tous' 
        ? projets 
        : projets.filter(p => p.technologies.includes(selectedTech));

    return (
        <section id="projets" className="py-20">
            <div className="container-custom">
                <h2 className="section-title"><FaFolderOpen className="inline mr-3 text-accent" /> Projets académiques</h2>
                
                {/* Filtres */}
                <div className="flex flex-wrap gap-3 justify-center mb-10">
                    {allTechs.map(tech => (
                        <button
                            key={tech}
                            onClick={() => setSelectedTech(tech)}
                            className={`px-5 py-2 rounded-full border-2 transition-all duration-300 font-medium
                                ${selectedTech === tech 
                                    ? 'bg-accent border-accent text-dark' 
                                    : 'border-border text-text-light hover:border-accent hover:text-accent'
                                }`}
                        >
                            {tech}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projetsFiltres.map(projet => {
                        const Icon = iconMap[projet.icon] || FaCode;
                        return (
                            <div key={projet.id} className="bg-card-bg p-6 rounded-2xl border border-border card-hover">
                                <Icon className="text-4xl text-accent mb-4" />
                                <h3 className="text-xl font-bold mb-3">{projet.titre}</h3>
                                <p className="text-text-gray mb-4">{projet.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {projet.technologies.map((tech, idx) => (
                                        <span key={idx} className="tag">{tech}</span>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Stage */}
                <h2 className="section-title mt-20"><FaBriefcase className="inline mr-3 text-accent" /> Stage réalisé</h2>
                <div className="bg-card-bg p-6 md:p-8 rounded-2xl border-l-4 border-accent">
                    <div className="flex flex-wrap justify-between items-start mb-4">
                        <h3 className="text-xl font-bold"><FaCode className="inline mr-2 text-accent" /> {stage.titre}</h3>
                        <span className="text-accent"><FaCalendarAlt className="inline mr-2" /> {stage.date}</span>
                    </div>
                    <p className="mb-4"><FaTag className="inline mr-2 text-accent" /> <strong>Thème :</strong> {stage.theme}</p>
                    <div className="flex flex-wrap gap-2">
                        {stage.technologies.map((tech, idx) => (
                            <span key={idx} className="tag">{tech}</span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projets;